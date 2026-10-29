import React, { useEffect } from 'react';
import { X, Heart, ExternalLink, Trash2, Eye, ArrowRight } from 'lucide-react';

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearAllFavorites,
  onOpenDetails,
  onBrowseAll
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

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true"
      aria-labelledby="fav-drawer-title"
    >
      <div 
        className="favorites-drawer-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="fav-drawer-header">
          <div className="fav-title-wrap">
            <Heart size={20} className="fav-header-icon" fill="#FF3CAC" color="#FF3CAC" />
            <h2 id="fav-drawer-title" className="fav-title">
              Saved Tools ({favorites.length})
            </h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close saved tools drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content list */}
        <div className="fav-drawer-body">
          {favorites.length === 0 ? (
            <div className="fav-empty-state">
              <div className="fav-empty-icon-wrap">
                <Heart size={36} color="var(--text-dim)" />
              </div>
              <h4 className="fav-empty-title">No Saved Tools Yet</h4>
              <p className="fav-empty-text">
                Click the heart icon on any tool card across the directory to save your custom AI software stack here!
              </p>
              <button
                type="button"
                className="fav-browse-btn"
                onClick={() => {
                  onClose();
                  onBrowseAll();
                }}
              >
                <span>Browse Directory</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="fav-items-list">
              {favorites.map((tool) => (
                <div key={tool.id} className="fav-item-row">
                  <div 
                    className="fav-item-avatar" 
                    style={{ backgroundColor: tool.iconBg || '#2563EB' }}
                  >
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="fav-item-info">
                    <div className="fav-item-name-row">
                      <span className="fav-item-name">{tool.name}</span>
                      <span className={`pricing-badge-mini pricing-${tool.pricing.toLowerCase()}`}>
                        {tool.pricing}
                      </span>
                    </div>
                    <span className="fav-item-cat">{tool.category}</span>
                  </div>

                  <div className="fav-item-actions">
                    <button
                      type="button"
                      className="fav-action-btn"
                      onClick={() => onOpenDetails(tool)}
                      title="Quick View"
                      aria-label={`View ${tool.name} details`}
                    >
                      <Eye size={15} />
                    </button>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fav-action-btn"
                      title="Visit official website"
                      aria-label={`Visit official ${tool.name} website`}
                    >
                      <ExternalLink size={15} />
                    </a>
                    <button
                      type="button"
                      className="fav-action-btn btn-delete"
                      onClick={() => onRemoveFavorite(tool.id)}
                      title="Remove from favorites"
                      aria-label={`Remove ${tool.name} from saved favorites`}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="fav-drawer-footer">
            <button
              type="button"
              className="fav-clear-all-btn"
              onClick={onClearAllFavorites}
            >
              <Trash2 size={15} />
              <span>Clear All Saved</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
