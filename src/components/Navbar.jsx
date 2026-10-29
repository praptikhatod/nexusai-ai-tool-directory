import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  PlusCircle, 
  Compass, 
  Layers, 
  Award, 
  Info 
} from 'lucide-react';

export default function Navbar({ 
  theme, 
  onToggleTheme, 
  favoritesCount, 
  onOpenFavorites, 
  onOpenSubmit,
  onNavigate 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          aria-label="NexusAI Home"
        >
          <div className="logo-icon-wrapper">
            <Sparkles className="logo-sparkle" size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Nexus<span className="brand-highlight-pink">AI</span></span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('directory')}
          >
            <Compass size={16} />
            <span>Explore</span>
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('categories')}
          >
            <Layers size={16} />
            <span>Categories</span>
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('featured')}
          >
            <Award size={16} />
            <span>Featured</span>
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('benefits')}
          >
            <Info size={16} />
            <span>Why Us</span>
          </button>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Favorites Button */}
          <button
            type="button"
            className={`action-btn favorites-btn ${favoritesCount > 0 ? 'has-favorites' : ''}`}
            onClick={onOpenFavorites}
            aria-label={`View ${favoritesCount} saved favorite tools`}
            title="View saved tools"
          >
            <Heart size={18} className={favoritesCount > 0 ? 'heart-filled' : ''} />
            <span className="favorites-label">Saved</span>
            {favoritesCount > 0 && (
              <span className="favorites-badge">{favoritesCount}</span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            className="action-btn theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Submit Tool CTA */}
          <button
            type="button"
            className="submit-tool-btn"
            onClick={onOpenSubmit}
          >
            <PlusCircle size={16} />
            <span className="submit-btn-text">Submit Tool</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="action-btn mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-links">
            <button 
              type="button" 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('directory')}
            >
              <Compass size={18} />
              <span>Explore All Tools</span>
            </button>
            <button 
              type="button" 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('categories')}
            >
              <Layers size={18} />
              <span>Categories</span>
            </button>
            <button 
              type="button" 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('featured')}
            >
              <Award size={18} />
              <span>Featured Tools</span>
            </button>
            <button 
              type="button" 
              className="mobile-nav-link" 
              onClick={() => handleNavClick('benefits')}
            >
              <Info size={18} />
              <span>Why Use NexusAI</span>
            </button>
          </div>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="mobile-submit-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmit();
              }}
            >
              <PlusCircle size={18} />
              <span>Submit an AI Tool</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
