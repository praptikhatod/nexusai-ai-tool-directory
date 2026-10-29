import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div 
      className={`toast-notification toast-${toast.type || 'info'}`} 
      role="status" 
      aria-live="polite"
      onClick={onClose}
      style={{ cursor: 'pointer' }}
      title="Click to dismiss"
    >
      <div className="toast-icon">
        {toast.type === 'success' ? <CheckCircle size={18} /> : <Info size={18} />}
      </div>
      <span className="toast-message">{toast.message}</span>
    </div>
  );
}
