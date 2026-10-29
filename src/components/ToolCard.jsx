import React from 'react';
import { Star, Heart, CheckCircle2, Sparkles, Eye, ArrowRight } from 'lucide-react';

export default function ToolCard({
  tool,
  isFavorite,
  onToggleFavorite,
  onOpenDetails
}) {
  const isFav = isFavorite(tool.id);

  return (
    <div className={`tool-card ${tool.featured ? 'is-featured-border' : ''}`}>
      {/* Top Header */}
      <div className="tool-card-header">
        <div className="tool-identity">
          <div 
            className="tool-avatar" 
            style={{ backgroundColor: tool.iconBg || '#2563EB' }}
            aria-hidden="true"
          >
            {tool.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="tool-title-wrap">
            <div className="tool-name-row">
              <h3 className="tool-name">{tool.name}</h3>
              <CheckCircle2 size={15} className="verified-icon" title="Verified official tool" />
            </div>
            <span className="tool-category-badge">{tool.category}</span>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          type="button"
          className={`tool-favorite-btn ${isFav ? 'favorited' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(tool);
          }}
          aria-label={isFav ? `Remove ${tool.name} from favorites` : `Bookmark ${tool.name}`}
          title={isFav ? 'Remove from favorites' : 'Bookmark to favorites'}
        >
          <Heart 
            size={18} 
            fill={isFav ? '#FF3CAC' : 'none'} 
            color={isFav ? '#FF3CAC' : 'currentColor'} 
          />
        </button>
      </div>

      {/* Description */}
      <p className="tool-description">
        {tool.description}
      </p>

      {/* Tags row */}
      {tool.tags && tool.tags.length > 0 && (
        <div className="tool-tags-list">
          {tool.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="tool-tag-pill">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Pricing & Rating Info Row */}
      <div className="tool-meta-row">
        <span className={`pricing-badge pricing-${tool.pricing.toLowerCase()}`}>
          {tool.pricing}
        </span>

        {tool.featured && (
          <span className="featured-pill-mini">
            <Sparkles size={11} />
            Featured
          </span>
        )}

        {tool.rating && (
          <div className="tool-rating" title={`Rating: ${tool.rating} out of 5`}>
            <Star size={13} className="star-icon" fill="currentColor" />
            <span>{tool.rating}</span>
          </div>
        )}
      </div>

      {/* Actions footer with circular arrow */}
      <div className="tool-card-footer">
        <button
          type="button"
          className="btn-card-details"
          onClick={() => onOpenDetails(tool)}
        >
          <Eye size={14} />
          <span>Quick View</span>
        </button>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-circle-arrow"
          aria-label={`Visit official ${tool.name} website`}
          title={`Visit official ${tool.name} website`}
        >
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
