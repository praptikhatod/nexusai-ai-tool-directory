import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle } from 'lucide-react';
import { CATEGORIES } from '../data/tools';

export default function SubmitModal({ isOpen, onClose, onSubmitTool }) {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: 'Productivity',
    pricing: 'Freemium',
    description: '',
    tagline: '',
    tags: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.url.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields (Name, URL, and Description).');
      return;
    }

    const newTool = {
      id: `custom-${Date.now()}`,
      name: formData.name.trim(),
      url: formData.url.startsWith('http') ? formData.url.trim() : `https://${formData.url.trim()}`,
      category: formData.category,
      pricing: formData.pricing,
      tagline: formData.tagline.trim() || formData.description.slice(0, 60) + '...',
      description: formData.description.trim(),
      featured: false,
      rating: 4.8,
      iconBg: '#3B82F6',
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : ['New', formData.category],
      features: [
        'User submitted AI tool',
        'Direct link to official platform'
      ]
    };

    onSubmitTool(newTool);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  const handleModalClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={handleModalClose}
      role="dialog" 
      aria-modal="true"
      aria-labelledby="submit-modal-title"
    >
      <div 
        className="modal-container submit-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={handleModalClose}
          aria-label="Close submit dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="submit-success-state">
            <div className="success-icon-wrap">
              <CheckCircle size={48} className="success-icon" />
            </div>
            <h3 className="success-title">Tool Added Successfully!</h3>
            <p className="success-text">
              <strong>{formData.name}</strong> has been added to your local directory session. You can now search, filter, and bookmark it!
            </p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-avatar submit-avatar">
                <Sparkles size={24} />
              </div>
              <div className="modal-title-area">
                <h2 id="submit-modal-title" className="modal-title">Submit an AI Tool</h2>
                <p className="modal-tagline">Suggest a game-changing AI product to add to the directory.</p>
              </div>
            </div>

            {error && (
              <div className="form-error-banner" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="submit-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tool-name">Tool Name *</label>
                  <input
                    id="tool-name"
                    type="text"
                    required
                    placeholder="e.g., Codeium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tool-url">Official Website URL *</label>
                  <input
                    id="tool-url"
                    type="text"
                    required
                    placeholder="https://example.com"
                    value={formData.url}
                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tool-category">Category *</label>
                  <select
                    id="tool-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {CATEGORIES.filter(c => c.id !== 'All').map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="tool-pricing">Pricing Model *</label>
                  <select
                    id="tool-pricing"
                    value={formData.pricing}
                    onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                  >
                    <option value="Free">Free</option>
                    <option value="Freemium">Freemium</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tool-tagline">One-line Tagline</label>
                <input
                  id="tool-tagline"
                  type="text"
                  placeholder="e.g., Ultra-fast autocomplete for 70+ languages"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tool-description">Description *</label>
                <textarea
                  id="tool-description"
                  required
                  rows={3}
                  placeholder="Describe what the AI tool does, key capabilities, and who it is for..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tool-tags">Tags (comma separated)</label>
                <input
                  id="tool-tags"
                  type="text"
                  placeholder="e.g., Coding, Autocomplete, Free"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit-action">
                  <Send size={16} />
                  <span>Submit to Directory</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
