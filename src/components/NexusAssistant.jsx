import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Trash2,
  Sparkles,
  Bot,
  User,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { generateReply } from '../engine/chatbotEngine';

const SUGGESTED_PROMPTS = [
  { label: 'Help me write content', icon: '✍️' },
  { label: 'Generate images', icon: '🎨' },
  { label: 'Help me with coding', icon: '💻' },
  { label: 'Create presentations', icon: '📊' },
  { label: 'Summarize documents', icon: '📄' },
];

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  text: "Hi! I'm the **NexusAI Assistant** — your personal AI tool finder. 🚀\n\nDescribe what you're working on and I'll recommend the best AI tools from our curated directory. Try the quick prompts below or type your own question!",
  recommendations: [],
  timestamp: Date.now()
};

export default function NexusAssistant({ onOpenToolDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on new messages
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Lock body scroll when panel is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSend = useCallback((messageText) => {
    const text = (messageText || input).trim();
    if (!text) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate brief "thinking" delay for natural feel
    setTimeout(() => {
      const reply = generateReply(text);
      const botMsg = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: reply.text,
        recommendations: reply.recommendations || [],
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setInput('');
  };

  const handlePromptClick = (promptText) => {
    handleSend(promptText);
  };

  const handleExploreTool = (tool) => {
    if (onOpenToolDetails) {
      onOpenToolDetails(tool);
    } else if (tool.url) {
      window.open(tool.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Simple markdown-ish bold rendering
  const renderText = (text) => {
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((seg, j) => {
        if (seg.startsWith('**') && seg.endsWith('**')) {
          return <strong key={j}>{seg.slice(2, -2)}</strong>;
        }
        return <span key={j}>{seg}</span>;
      });
      return (
        <React.Fragment key={i}>
          {i > 0 && <br />}
          {parts}
        </React.Fragment>
      );
    });
  };

  // Only show suggested prompts if the only message is the welcome message
  const showSuggestions = messages.length === 1 && messages[0].id === 'welcome';

  return (
    <>
      {/* Floating "Ask NexusAI" Button */}
      {!isOpen && (
        <button
          type="button"
          className="nexus-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Open NexusAI Assistant"
          title="Ask NexusAI"
        >
          <div className="nexus-fab-inner">
            <MessageCircle size={22} />
            <span className="nexus-fab-label">Ask NexusAI</span>
          </div>
          <div className="nexus-fab-pulse" />
        </button>
      )}

      {/* Chat Panel Overlay */}
      {isOpen && (
        <div className="nexus-chat-overlay" onClick={() => setIsOpen(false)}>
          <aside
            className="nexus-chat-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="NexusAI Assistant Chat"
            aria-modal="true"
          >
            {/* Header */}
            <header className="nexus-chat-header">
              <div className="nexus-chat-header-left">
                <div className="nexus-chat-avatar">
                  <Sparkles size={18} />
                </div>
                <div className="nexus-chat-header-info">
                  <h3 className="nexus-chat-title">NexusAI Assistant</h3>
                  <span className="nexus-chat-subtitle">Your AI Tool Finder</span>
                </div>
              </div>
              <div className="nexus-chat-header-actions">
                <button
                  type="button"
                  className="nexus-chat-action-btn"
                  onClick={handleClearChat}
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  type="button"
                  className="nexus-chat-action-btn nexus-chat-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close assistant"
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            {/* Messages Area */}
            <div className="nexus-chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`nexus-chat-bubble ${msg.role === 'user' ? 'nexus-bubble-user' : 'nexus-bubble-bot'}`}
                >
                  {/* Avatar */}
                  <div className={`nexus-bubble-avatar ${msg.role === 'user' ? 'nexus-avatar-user' : 'nexus-avatar-bot'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>

                  {/* Content */}
                  <div className="nexus-bubble-content">
                    <p className="nexus-bubble-text">{renderText(msg.text)}</p>

                    {/* Tool Recommendation Cards */}
                    {msg.recommendations && msg.recommendations.length > 0 && (
                      <div className="nexus-recs-grid">
                        {msg.recommendations.map(({ tool, why }) => (
                          <div key={tool.id} className="nexus-rec-card">
                            <div className="nexus-rec-card-header">
                              <div
                                className="nexus-rec-icon"
                                style={{ background: tool.iconBg || 'var(--accent-pink)' }}
                              >
                                {tool.name.charAt(0)}
                              </div>
                              <div className="nexus-rec-info">
                                <span className="nexus-rec-name">{tool.name}</span>
                                <span className="nexus-rec-category">{tool.category} • {tool.pricing}</span>
                              </div>
                            </div>
                            <p className="nexus-rec-tagline">{tool.tagline}</p>
                            <p className="nexus-rec-why">{why}</p>
                            <button
                              type="button"
                              className="nexus-rec-explore-btn"
                              onClick={() => handleExploreTool(tool)}
                            >
                              <span>Explore Tool</span>
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="nexus-chat-bubble nexus-bubble-bot">
                  <div className="nexus-bubble-avatar nexus-avatar-bot">
                    <Bot size={14} />
                  </div>
                  <div className="nexus-bubble-content">
                    <div className="nexus-typing-indicator">
                      <Loader2 size={14} className="nexus-typing-spinner" />
                      <span>NexusAI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Suggested Prompts (shown only at start) */}
              {showSuggestions && (
                <div className="nexus-suggestions">
                  <span className="nexus-suggestions-label">Quick Prompts</span>
                  <div className="nexus-suggestions-grid">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt.label}
                        type="button"
                        className="nexus-suggestion-chip"
                        onClick={() => handlePromptClick(prompt.label)}
                      >
                        <span className="nexus-suggestion-icon">{prompt.icon}</span>
                        <span>{prompt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <footer className="nexus-chat-input-area">
              <div className="nexus-chat-input-row">
                <input
                  ref={inputRef}
                  type="text"
                  className="nexus-chat-input"
                  placeholder="Describe what you need..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Type your message"
                  maxLength={500}
                />
                <button
                  type="button"
                  className={`nexus-chat-send-btn ${input.trim() ? 'active' : ''}`}
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="nexus-chat-disclaimer">
                Rule-based recommendations from NexusAI's curated directory. Not powered by a live AI model.
              </p>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
