import React from 'react';
import { Award, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function FeaturedTools({
  featuredTools,
  onOpenDetails,
  isFavorite,
  onToggleFavorite
}) {
  if (!featuredTools || featuredTools.length === 0) return null;

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-pink">
            <Award size={14} />
            <span>Handpicked Elite</span>
          </div>
          <h2 className="section-title">Featured AI Breakthroughs</h2>
          <p className="section-subtitle">
            The industry standard tools redefining productivity, programming, content, and design.
          </p>
        </div>

        <div className="featured-grid">
          {featuredTools.slice(0, 4).map((tool) => {
            const isFav = isFavorite(tool.id);
            return (
              <div key={tool.id} className="featured-card">
                <div className="featured-card-glow"></div>
                <div className="featured-card-content">
                  {/* Top Bar */}
                  <div className="featured-card-top">
                    <div className="featured-avatar" style={{ backgroundColor: tool.iconBg }}>
                      {tool.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="featured-pill-row">
                      <span className="featured-sparkle-pill">
                        <Sparkles size={12} />
                        Featured
                      </span>
                      <span className={`pricing-badge pricing-${tool.pricing.toLowerCase()}`}>
                        {tool.pricing}
                      </span>
                      <button
                        type="button"
                        className={`featured-heart-btn ${isFav ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(tool);
                        }}
                        aria-label={isFav ? `Remove ${tool.name} from favorites` : `Add ${tool.name} to favorites`}
                      >
                        <Heart size={16} fill={isFav ? '#FF3CAC' : 'none'} color={isFav ? '#FF3CAC' : 'currentColor'} />
                      </button>
                    </div>
                  </div>

                  {/* Body */}
                  <h3 className="featured-name">{tool.name}</h3>
                  <div className="featured-category">{tool.category}</div>
                  <p className="featured-tagline">{tool.tagline}</p>

                  {/* Highlights list */}
                  <ul className="featured-features-mini">
                    {tool.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>

                  {/* Bottom Actions with Circular Arrow */}
                  <div className="featured-actions">
                    <button
                      type="button"
                      className="btn-details"
                      onClick={() => onOpenDetails(tool)}
                    >
                      <span>Quick Details</span>
                    </button>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-circle-arrow"
                      aria-label={`Visit official ${tool.name} website`}
                      title="Visit official website"
                    >
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
