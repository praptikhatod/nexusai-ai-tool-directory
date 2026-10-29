import React from 'react';
import { Sparkles, ArrowUp, Globe, Heart } from 'lucide-react';
import { CATEGORIES } from '../data/tools';

export default function Footer({ onCategoryClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Main Columns */}
        <div className="footer-grid">
          {/* Col 1: Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="logo-icon-wrapper">
                <Sparkles className="logo-sparkle" size={18} />
              </div>
              <span className="brand-name">Nexus<span className="brand-highlight">AI</span></span>
            </div>
            <p className="footer-desc">
              A meticulously curated directory empowering builders, creators, researchers, and developers to discover leading AI solutions with zero friction.
            </p>
            <div className="footer-social-links">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Repository" 
                className="social-icon-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X Twitter" 
                className="social-icon-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Discord Community" 
                className="social-icon-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6h0a14.5 14.5 0 0 0-4-1.5 9.6 9.6 0 0 0-.5 1.5 13.9 13.9 0 0 0-3 0 9.6 9.6 0 0 0-.5-1.5A14.5 14.5 0 0 0 6 6a18.3 18.3 0 0 0-2 11.5 14.6 14.6 0 0 0 4.5 2.5 10.9 10.9 0 0 0 1-1.5 9.5 9.5 0 0 1-1.5-.7c.1-.1.2-.2.4-.3a10.9 10.9 0 0 0 9.2 0c.1.1.3.2.4.3a9.5 9.5 0 0 1-1.5.7 10.9 10.9 0 0 0 1 1.5 14.6 14.6 0 0 0 4.5-2.5A18.3 18.3 0 0 0 18 6Z" />
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="15" cy="12" r="1" />
                </svg>
              </a>
              <a 
                href="#directory" 
                aria-label="Explore Directory" 
                className="social-icon-btn"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">Categories</h4>
            <ul className="footer-links-list">
              {CATEGORIES.slice(1, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => onCategoryClick(cat.id)}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Categories */}
          <div className="footer-col">
            <h4 className="footer-col-title">More Domains</h4>
            <ul className="footer-links-list">
              {CATEGORIES.slice(5).map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={() => onCategoryClick(cat.id)}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => onCategoryClick('All')}
                >
                  All Tools
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">About Project</h4>
            <p className="footer-info-text">
              Built with React, Vite, and modern CSS architecture. Designed to meet production-level UI/UX portfolio standards with accessible semantic components.
            </p>
            <div className="footer-version-tag">
              Version 1.0 • Dark-Neon Edition
            </div>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 NexusAI Tools Directory. Built with <Heart size={13} fill="#FF3CAC" color="#FF3CAC" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} /> for the AI Community.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
