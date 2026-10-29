import React from 'react';
import { Search, X, RotateCcw, Heart, ArrowUpDown } from 'lucide-react';
import { PRICING_OPTIONS } from '../data/tools';

export default function FilterBar({
  searchQuery,
  onSearchChange,
  onClearSearch,
  selectedPricing,
  onSelectPricing,
  sortBy,
  onSortChange,
  showOnlyFavorites,
  onToggleFavoritesOnly,
  favoritesCount,
  filteredCount,
  totalCount,
  hasActiveFilters,
  onResetFilters
}) {
  return (
    <div className="filter-bar-container">
      {/* Top row: search + count + reset */}
      <div className="filter-bar-main">
        {/* Search Input */}
        <div className="filter-search-box">
          <Search size={18} className="filter-search-icon" />
          <input
            type="text"
            className="filter-search-input"
            placeholder="Search by name, tag, or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Filter tools by keyword"
          />
          {searchQuery && (
            <button
              type="button"
              className="filter-clear-btn"
              onClick={onClearSearch}
              aria-label="Clear filter search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Pricing Segmented Pills */}
        <div className="pricing-filters" role="group" aria-label="Filter by pricing model">
          <span className="filter-label">Pricing:</span>
          <div className="pricing-pills">
            {PRICING_OPTIONS.map((price) => (
              <button
                key={price}
                type="button"
                className={`pricing-pill-btn ${selectedPricing === price ? 'active' : ''}`}
                onClick={() => onSelectPricing(price)}
              >
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Select */}
        <div className="sort-selector-wrapper">
          <ArrowUpDown size={16} className="sort-icon" />
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort tools"
          >
            <option value="featured">Sort: Featured First</option>
            <option value="rating">Sort: Highest Rated</option>
            <option value="name-asc">Sort: Name (A — Z)</option>
            <option value="name-desc">Sort: Name (Z — A)</option>
          </select>
        </div>

        {/* Favorites Only Toggle */}
        <button
          type="button"
          className={`favorites-filter-toggle ${showOnlyFavorites ? 'active' : ''}`}
          onClick={onToggleFavoritesOnly}
          aria-pressed={showOnlyFavorites}
          title="Filter to show only bookmarked favorite tools"
        >
          <Heart size={16} fill={showOnlyFavorites ? '#FF3CAC' : 'none'} color={showOnlyFavorites ? '#FF3CAC' : 'currentColor'} />
          <span>Saved ({favoritesCount})</span>
        </button>
      </div>

      {/* Meta status sub-bar */}
      <div className="filter-meta-bar">
        <div className="results-count-text">
          Showing <strong>{filteredCount}</strong> of {totalCount} AI tools
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            className="reset-filters-btn"
            onClick={onResetFilters}
          >
            <RotateCcw size={14} />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
