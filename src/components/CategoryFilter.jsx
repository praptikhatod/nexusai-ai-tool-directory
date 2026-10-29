import React from 'react';
import { 
  LayoutGrid, 
  PenTool, 
  Code2, 
  Sparkles, 
  Video, 
  Zap, 
  Search, 
  Headphones 
} from 'lucide-react';

const ICON_MAP = {
  LayoutGrid,
  PenTool,
  Code2,
  Sparkles,
  Video,
  Zap,
  Search,
  Headphones
};

const CATEGORY_COLORS = {
  All: 'blue',
  Writing: 'pink',
  Coding: 'cyan',
  'Image Generation': 'green',
  Video: 'purple',
  Productivity: 'cyan',
  Research: 'pink',
  Audio: 'green'
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts
}) {
  return (
    <section id="categories" className="category-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <LayoutGrid size={14} />
            <span>Browse by Domain</span>
          </div>
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">
            Find the optimal generative assistant tailored to your specific creative or technical field.
          </p>
        </div>

        {/* Category Chips Scroller */}
        <div className="category-chips-wrapper">
          <div className="category-chips-list" role="tablist" aria-label="Tool Categories">
            {categories.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || LayoutGrid;
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] ?? 0;
              const colorClass = CATEGORY_COLORS[cat.id] || 'blue';

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  className={`category-chip category-chip-${colorClass} ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => onSelectCategory(cat.id)}
                >
                  <span className="chip-icon-wrap">
                    <IconComponent size={18} />
                  </span>
                  <span className="chip-label">{cat.label}</span>
                  <span className="chip-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
