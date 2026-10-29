import React from 'react';
import { Search, X, ArrowRight, ShieldCheck, Zap, Database, Terminal } from 'lucide-react';
import HeroOrbitalGraphic from './HeroOrbitalGraphic';

export default function Hero({ 
  searchQuery, 
  onSearchChange, 
  onClearSearch, 
  totalToolsCount,
  onExploreClick,
  onFeaturedClick,
  onTagClick
}) {
  const popularKeywords = ['Claude', 'Cursor', 'Midjourney', 'ElevenLabs', 'Coding', 'Free'];

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-blob hero-blob-pink"></div>
      <div className="hero-glow-blob hero-blob-blue"></div>

      <div className="container hero-container">
        {/* Two-Column Layout */}
        <div className="hero-grid-layout">
          {/* Left Column: Headline, CTAs, Search */}
          <div className="hero-left-col">
            {/* Tag Badge: Discover • Compare • Grow */}
            <div className="hero-discover-badge">
              <span className="badge-dot-green"></span>
              <span>Discover • Compare • Grow</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title-main">
              Find the Right <span className="hero-highlight-pink">AI Tool</span> <br />
              for Your Next <span className="hero-highlight-blue">Big Idea</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle-text">
              Explore handpicked AI tools for writing, coding, design, video, productivity and more. Save your favorites and build smarter.
            </p>

            {/* Action Buttons Matching Screenshot */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn-explore-pink" 
                onClick={onExploreClick}
              >
                <Search size={16} />
                <span>Explore Tools</span>
                <ArrowRight size={16} />
              </button>

              <button 
                type="button" 
                className="btn-browse-outline" 
                onClick={onFeaturedClick}
              >
                <span>Browse Categories</span>
              </button>
            </div>

            {/* Embedded Search Input */}
            <div className="hero-search-wrapper">
              <div className="hero-search-box">
                <Search className="hero-search-icon" size={18} />
                <input
                  type="text"
                  className="hero-search-input"
                  placeholder="Search 24+ AI tools (e.g. 'Cursor', 'Voice', 'Free')..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  aria-label="Search AI tools by name, description, or keyword"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="hero-search-clear"
                    onClick={onClearSearch}
                    aria-label="Clear search input"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Quick Filter Tags */}
              <div className="popular-tags">
                <span className="popular-tags-label">Trending:</span>
                <div className="popular-tags-list">
                  {popularKeywords.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="popular-tag-chip"
                      onClick={() => onTagClick(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Shining Orbital Wavy Graphic & Floating Tools */}
          <div className="hero-right-col">
            <HeroOrbitalGraphic />
          </div>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-blue">
              <Database size={18} />
            </div>
            <div className="stat-info">
              <div className="stat-number">{totalToolsCount}+</div>
              <div className="stat-desc">Curated AI Tools</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-pink">
              <Terminal size={18} />
            </div>
            <div className="stat-info">
              <div className="stat-number">7</div>
              <div className="stat-desc">Focused Categories</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-green">
              <ShieldCheck size={18} />
            </div>
            <div className="stat-info">
              <div className="stat-number">100%</div>
              <div className="stat-desc">Verified Official Links</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrap stat-icon-purple">
              <Zap size={18} />
            </div>
            <div className="stat-info">
              <div className="stat-number">Instant</div>
              <div className="stat-desc">Search & Filter Logic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
