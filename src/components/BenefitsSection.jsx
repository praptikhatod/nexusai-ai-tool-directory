import React from 'react';
import { ShieldCheck, DollarSign, Filter, BookmarkCheck, ArrowRight } from 'lucide-react';

export default function BenefitsSection({ onExploreClick }) {
  const benefits = [
    {
      icon: ShieldCheck,
      color: 'blue',
      title: '100% Curated & Verified',
      description: 'Every AI product is evaluated for genuine utility, active development, and verified official links. No spam or deceptive redirects.'
    },
    {
      icon: DollarSign,
      color: 'green',
      title: 'Transparent Pricing Clarity',
      description: 'Never guess if a tool is truly free or locked behind a paywall. Clear indicators for Free open-source, Freemium tiers, and Paid enterprise plans.'
    },
    {
      icon: Filter,
      color: 'pink',
      title: 'Workflow-Driven Categorization',
      description: 'Find specialized tools built for exactly what you are doing—whether writing research papers, composing music, or editing code.'
    },
    {
      icon: BookmarkCheck,
      color: 'purple',
      title: 'Local Privacy-First Bookmarks',
      description: 'Save your personal AI tool stack directly in your browser without needing to create an account or provide personal email details.'
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-green">
            <ShieldCheck size={14} />
            <span>Why NexusAI</span>
          </div>
          <h2 className="section-title">Built for Modern AI Explorers</h2>
          <p className="section-subtitle">
            Skip the clutter of scattered blog posts. Discover, test, and integrate the right AI software in seconds.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="benefit-card">
                <div className={`benefit-icon-wrapper benefit-icon-${benefit.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="benefits-cta-banner">
          <div className="cta-banner-content">
            <h3 className="cta-banner-title">Ready to accelerate your productivity?</h3>
            <p className="cta-banner-text">
              Browse our directory and build your personalized stack of state-of-the-art AI tools today.
            </p>
          </div>
          <button 
            type="button" 
            className="cta-banner-btn"
            onClick={onExploreClick}
          >
            <span>Explore All Tools</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
