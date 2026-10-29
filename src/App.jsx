import React, { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import FilterBar from './components/FilterBar';
import FeaturedTools from './components/FeaturedTools';
import ToolGrid from './components/ToolGrid';
import ToolModal from './components/ToolModal';
import SubmitModal from './components/SubmitModal';
import FavoritesDrawer from './components/FavoritesDrawer';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import WavyLinesBackground from './components/WavyLinesBackground';

import { TOOLS_DATA, CATEGORIES } from './data/tools';
import './App.css';

export default function App() {
  // --- Persistent State: Theme ---
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('nexus_ai_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('nexus_ai_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // --- Persistent State: Favorites ---
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('nexus_ai_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nexus_ai_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  }, [favorites]);

  // --- Persistent State: Custom Submitted Tools ---
  const [toolsList, setToolsList] = useState(() => {
    try {
      const saved = localStorage.getItem('nexus_ai_custom_tools');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...TOOLS_DATA, ...parsed];
      }
    } catch (e) {
      console.error('Error loading custom tools:', e);
    }
    return TOOLS_DATA;
  });

  // --- Search & Filter State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // --- Modals & Drawers ---
  const [activeModalTool, setActiveModalTool] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const toastTimerRef = useRef(null);

  const showToast = (message, type = 'info') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // --- Favorite Actions ---
  const isFavorite = (toolId) => favorites.includes(toolId);

  const handleToggleFavorite = (tool) => {
    setFavorites((prev) => {
      if (prev.includes(tool.id)) {
        showToast(`Removed "${tool.name}" from your saved tools`, 'info');
        return prev.filter((id) => id !== tool.id);
      } else {
        showToast(`Saved "${tool.name}" to your favorites!`, 'success');
        return [...prev, tool.id];
      }
    });
  };

  const handleRemoveFavoriteById = (toolId) => {
    const tool = toolsList.find((t) => t.id === toolId);
    setFavorites((prev) => prev.filter((id) => id !== toolId));
    if (tool) {
      showToast(`Removed "${tool.name}" from saved`, 'info');
    }
  };

  const handleClearAllFavorites = () => {
    if (window.confirm('Are you sure you want to clear all your saved tools?')) {
      setFavorites([]);
      showToast('Cleared all saved tools', 'info');
    }
  };

  // --- Submission Handler ---
  const handleAddNewTool = (newTool) => {
    setToolsList((prev) => [newTool, ...prev]);
    try {
      const existing = localStorage.getItem('nexus_ai_custom_tools');
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem('nexus_ai_custom_tools', JSON.stringify([newTool, ...parsed]));
    } catch (e) {
      console.error(e);
    }
    showToast(`Added "${newTool.name}" to directory!`, 'success');
  };

  // --- Category Counts ---
  const categoryCounts = useMemo(() => {
    const counts = { All: toolsList.length };
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'All') {
        counts[cat.id] = toolsList.filter((t) => t.category === cat.id).length;
      }
    });
    return counts;
  }, [toolsList]);

  // --- Featured Tools List ---
  const featuredTools = useMemo(() => {
    return toolsList.filter((t) => t.featured);
  }, [toolsList]);

  // --- Filtered and Sorted Tools ---
  const filteredTools = useMemo(() => {
    let result = [...toolsList];

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    // Pricing Filter
    if (selectedPricing !== 'All') {
      result = result.filter((t) => t.pricing.toLowerCase() === selectedPricing.toLowerCase());
    }

    // Favorites Only
    if (showOnlyFavorites) {
      result = result.filter((t) => favorites.includes(t.id));
    }

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((t) => {
        const nameMatch = t.name.toLowerCase().includes(query);
        const descMatch = t.description.toLowerCase().includes(query);
        const taglineMatch = t.tagline ? t.tagline.toLowerCase().includes(query) : false;
        const categoryMatch = t.category.toLowerCase().includes(query);
        const tagsMatch = t.tags ? t.tags.some((tag) => tag.toLowerCase().includes(query)) : false;
        return nameMatch || descMatch || taglineMatch || categoryMatch || tagsMatch;
      });
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return result;
  }, [toolsList, selectedCategory, selectedPricing, showOnlyFavorites, searchQuery, sortBy, favorites]);

  const hasActiveFilters = Boolean(
    searchQuery.trim() ||
    selectedCategory !== 'All' ||
    selectedPricing !== 'All' ||
    showOnlyFavorites
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPricing('All');
    setShowOnlyFavorites(false);
    showToast('Filters reset to default', 'info');
  };

  // --- Scroll Navigation ---
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    handleScrollTo('directory');
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    handleScrollTo('directory');
  };

  // Saved tools list for drawer
  const savedTools = useMemo(() => {
    return toolsList.filter((t) => favorites.includes(t.id));
  }, [toolsList, favorites]);

  return (
    <div className="app-wrapper">
      {/* Background Shining Wavy Ribbon Lines */}
      <WavyLinesBackground />

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
        onOpenSubmit={() => setIsSubmitModalOpen(true)}
        onNavigate={handleScrollTo}
      />

      <main>
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
          totalToolsCount={toolsList.length}
          onExploreClick={() => handleScrollTo('directory')}
          onFeaturedClick={() => handleScrollTo('featured')}
          onTagClick={handleTagClick}
        />

        {/* Category Domain Chips */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
          categoryCounts={categoryCounts}
        />

        {/* Featured Tools Showcase */}
        <FeaturedTools
          featuredTools={featuredTools}
          onOpenDetails={(tool) => setActiveModalTool(tool)}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* All Tools Directory Section */}
        <section id="directory" className="directory-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <span>Complete Catalog</span>
              </div>
              <h2 className="section-title">Explore All AI Tools</h2>
              <p className="section-subtitle">
                Filter by pricing model, search by keyword, or sort by user satisfaction.
              </p>
            </div>

            {/* Filter Bar Controls */}
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={() => setSearchQuery('')}
              selectedPricing={selectedPricing}
              onSelectPricing={setSelectedPricing}
              sortBy={sortBy}
              onSortChange={setSortBy}
              showOnlyFavorites={showOnlyFavorites}
              onToggleFavoritesOnly={() => setShowOnlyFavorites(!showOnlyFavorites)}
              favoritesCount={favorites.length}
              filteredCount={filteredTools.length}
              totalCount={toolsList.length}
              hasActiveFilters={hasActiveFilters}
              onResetFilters={handleResetFilters}
            />

            {/* Dynamic Tools Grid */}
            <ToolGrid
              tools={filteredTools}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
              onOpenDetails={(tool) => setActiveModalTool(tool)}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        {/* Why Use NexusAI Benefits Section */}
        <BenefitsSection onExploreClick={() => handleScrollTo('directory')} />
      </main>

      {/* Footer */}
      <Footer onCategoryClick={handleCategorySelect} />

      {/* Tool Details Modal */}
      <ToolModal
        tool={activeModalTool}
        isOpen={Boolean(activeModalTool)}
        onClose={() => setActiveModalTool(null)}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* Submit Tool Modal */}
      <SubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitTool={handleAddNewTool}
      />

      {/* Saved Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
        favorites={savedTools}
        onRemoveFavorite={handleRemoveFavoriteById}
        onClearAllFavorites={handleClearAllFavorites}
        onOpenDetails={(tool) => {
          setIsFavoritesDrawerOpen(false);
          setActiveModalTool(tool);
        }}
        onBrowseAll={() => handleScrollTo('directory')}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
