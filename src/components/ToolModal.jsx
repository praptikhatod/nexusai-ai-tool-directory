import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Star, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  DollarSign, 
  Layers 
} from 'lucide-react';

export default function ToolModal({
  tool,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tool) return null;

  const isFav = isFavorite(tool.id);

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true"
      aria-labelledby="modal-tool-title"
    >
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close details dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div 
            className="modal-avatar" 
            style={{ backgroundColor: tool.iconBg || '#2563EB' }}
          >
            {tool.name.slice(0, 2).toUpperCase()}
          </div>
          <div className="modal-title-area">
            <div className="modal-title-row">
              <h2 id="modal-tool-title" className="modal-title">{tool.name}</h2>
              <CheckCircle2 size={18} className="verified-icon" title="Verified AI Tool" />
              {tool.featured && (
                <span className="featured-pill-mini">
                  <Sparkles size={12} />
                  Featured
                </span>
              )}
            </div>
            <p className="modal-tagline">{tool.tagline}</p>
          </div>
        </div>

        {/* Badges Bar */}
        <div className="modal-badges-row">
          <div className="modal-badge-item">
            <Layers size={14} />
            <span>Category: <strong>{tool.category}</strong></span>
          </div>
          <div className="modal-badge-item">
            <DollarSign size={14} />
            <span>Pricing: <strong className={`pricing-text-${tool.pricing.toLowerCase()}`}>{tool.pricing}</strong></span>
          </div>
          {tool.rating && (
            <div className="modal-badge-item">
              <Star size={14} fill="currentColor" className="star-icon" />
              <span>Score: <strong>{tool.rating} / 5.0</strong></span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview Section */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-description-full">{tool.description}</p>
          </div>

          {/* Pricing Model Section */}
          {tool.pricingDetails && (
            <div className="modal-section pricing-detail-box">
              <h4 className="modal-section-title">Pricing Breakdown</h4>
              <p className="modal-pricing-text">{tool.pricingDetails}</p>
            </div>
          )}

          {/* Key Capabilities */}
          {tool.features && tool.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Core Capabilities & Highlights</h4>
              <ul className="modal-feature-list">
                {tool.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <span className="feature-check-icon">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {tool.tags && tool.tags.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Tags & Keywords</h4>
              <div className="modal-tags-list">
                {tool.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className={`modal-fav-btn ${isFav ? 'is-fav' : ''}`}
            onClick={() => onToggleFavorite(tool)}
          >
            <Heart size={18} fill={isFav ? '#FF3CAC' : 'none'} color={isFav ? '#FF3CAC' : 'currentColor'} />
            <span>{isFav ? 'Bookmarked' : 'Add to Favorites'}</span>
          </button>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-visit-btn"
          >
            <span>Visit Official Website</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
