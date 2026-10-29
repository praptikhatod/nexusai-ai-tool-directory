import React from 'react';
import ToolCard from './ToolCard';
import { SearchX, RotateCcw } from 'lucide-react';

export default function ToolGrid({
  tools,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
  onResetFilters
}) {
  if (tools.length === 0) {
    return (
      <div className="empty-state-wrapper">
        <div className="empty-state-icon">
          <SearchX size={44} />
        </div>
        <h3 className="empty-state-title">No AI Tools Found</h3>
        <p className="empty-state-text">
          We couldn’t find any AI tools matching your current search criteria or active filters.
        </p>
        <div className="empty-state-actions">
          <button
            type="button"
            className="empty-state-reset-btn"
            onClick={onResetFilters}
          >
            <RotateCcw size={16} />
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="tools-grid-layout" role="region" aria-label="AI Tools List">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          onOpenDetails={onOpenDetails}
        />
      ))}
    </div>
  );
}
