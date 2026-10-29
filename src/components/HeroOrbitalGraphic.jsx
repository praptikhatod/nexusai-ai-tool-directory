import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroOrbitalGraphic() {
  return (
    <div className="hero-orbital-wrapper" aria-hidden="true">
      {/* Background ambient radial glow */}
      <div className="orbital-ambient-glow"></div>

      {/* SVG Shining Wavy Orbital Loops */}
      <svg
        className="orbital-svg"
        viewBox="0 0 540 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for shining lines */}
          <linearGradient id="orb-cyan-pink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="70%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF3CAC" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="orb-pink-green" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3CAC" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#39FF88" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="orb-green-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#39FF88" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.4" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="neon-line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur1" />
            <feGaussianBlur stdDeviation="9" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit loop 1 - Large tilted elliptical wave */}
        <ellipse
          cx="270"
          cy="230"
          rx="220"
          ry="125"
          transform="rotate(-20 270 230)"
          stroke="url(#orb-cyan-pink)"
          strokeWidth="2.5"
          filter="url(#neon-line-glow)"
          className="orbital-path-1"
        />

        {/* Orbit loop 2 - Secondary tilted counter-curve */}
        <ellipse
          cx="270"
          cy="230"
          rx="195"
          ry="105"
          transform="rotate(25 270 230)"
          stroke="url(#orb-pink-green)"
          strokeWidth="2"
          filter="url(#neon-line-glow)"
          strokeDasharray="700 80"
          className="orbital-path-2"
        />

        {/* Orbit loop 3 - Inner tighter wave */}
        <ellipse
          cx="270"
          cy="230"
          rx="160"
          ry="85"
          transform="rotate(-40 270 230)"
          stroke="url(#orb-green-cyan)"
          strokeWidth="1.8"
          strokeOpacity="0.85"
          className="orbital-path-3"
        />

        {/* Subtle accent thin wavy paths */}
        <path
          d="M 60 160 C 130 90, 220 200, 360 130 C 440 90, 480 180, 510 220"
          stroke="#38BDF8"
          strokeWidth="1"
          strokeOpacity="0.5"
          strokeDasharray="4 6"
        />

        <path
          d="M 50 310 C 140 370, 250 260, 390 330 C 450 360, 490 290, 520 260"
          stroke="#FF3CAC"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="5 7"
        />

        {/* Glowing spark dots on orbits */}
        <circle cx="115" cy="155" r="3.5" fill="#38BDF8" filter="url(#neon-line-glow)" className="shining-dot dot-1" />
        <circle cx="435" cy="130" r="4" fill="#FF3CAC" filter="url(#neon-line-glow)" className="shining-dot dot-2" />
        <circle cx="470" cy="270" r="3" fill="#39FF88" filter="url(#neon-line-glow)" className="shining-dot dot-3" />
        <circle cx="370" cy="365" r="3" fill="#38BDF8" filter="url(#neon-line-glow)" className="shining-dot dot-4" />
        <circle cx="145" cy="325" r="3.5" fill="#FF3CAC" filter="url(#neon-line-glow)" className="shining-dot dot-5" />
      </svg>

      {/* Central Glowing Card: "Better Tools Bigger Possibilities" */}
      <div className="center-neon-card">
        <div className="center-card-inner">
          <div className="center-card-sparkle">
            <Sparkles size={26} className="center-sparkle-icon" />
          </div>
          <h3 className="center-card-title">
            <span>Better Tools</span>
            <span>Bigger Possibilities</span>
          </h3>
        </div>
      </div>

      {/* Floating Tool Badge 1: ChatGPT (Top-Left) */}
      <div className="floating-badge badge-chatgpt" title="ChatGPT">
        <div className="floating-badge-inner border-pink">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2" />
            <path d="M12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* Floating Tool Badge 2: Midjourney (Top-Right) */}
      <div className="floating-badge badge-midjourney" title="Midjourney">
        <div className="floating-badge-inner border-cyan">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
            <path d="M12 2v8" />
            <path d="m4.93 10.93 4.24-4.24" />
            <path d="m14.83 6.69 4.24 4.24" />
          </svg>
        </div>
      </div>

      {/* Floating Tool Badge 3: Synthesia / Super (Right) */}
      <div className="floating-badge badge-synthesia" title="Synthesia">
        <div className="floating-badge-inner border-purple">
          <span className="badge-letter">S.</span>
        </div>
      </div>

      {/* Floating Tool Badge 4: Notion (Bottom-Left) */}
      <div className="floating-badge badge-notion" title="Notion AI">
        <div className="floating-badge-inner border-green">
          <span className="badge-letter font-serif">N</span>
        </div>
      </div>

      {/* Floating Tool Badge 5: Figma (Bottom-Right) */}
      <div className="floating-badge badge-figma" title="Figma AI">
        <div className="floating-badge-inner border-multicolor">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" stroke="none" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" stroke="none" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE" stroke="none" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF" stroke="none" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83" stroke="none" />
          </svg>
        </div>
      </div>
    </div>
  );
}
