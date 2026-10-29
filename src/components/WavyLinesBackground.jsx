import React from 'react';

export default function WavyLinesBackground() {
  return (
    <div className="wavy-lines-bg-container" aria-hidden="true">
      {/* Top Ambient Glow Lines */}
      <svg
        className="wavy-lines-top-stream"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stream-pink-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3CAC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#39FF88" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="stream-blue-purple" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF3CAC" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow-filter-top" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="16" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating wavy lines in upper background */}
        <path
          d="M-100 220 C 250 80, 500 320, 850 160 C 1150 20, 1350 240, 1550 140"
          stroke="url(#stream-pink-blue)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow-filter-top)"
          className="animated-wave wave-1"
        />
        <path
          d="M-80 240 C 270 100, 520 340, 870 180 C 1170 40, 1370 260, 1570 160"
          stroke="url(#stream-blue-purple)"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.6"
          className="animated-wave wave-2"
        />
      </svg>

      {/* Bottom-Left Shining Wavy Ribbon Lines (as in photo) */}
      <svg
        className="wavy-ribbon-bottom-left"
        viewBox="0 0 650 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-bl-pink" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3CAC" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#D946EF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="wave-bl-cyan" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#39FF88" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow-bl" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feGaussianBlur stdDeviation="12" result="ambient" />
            <feMerge>
              <feMergeNode in="ambient" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Multi-strand shining wave curves */}
        <path
          d="M -30 200 C 60 140, 120 280, 240 240 C 340 200, 420 290, 560 250"
          stroke="url(#wave-bl-pink)"
          strokeWidth="3.5"
          fill="none"
          filter="url(#glow-bl)"
          className="shining-wave-path"
        />
        <path
          d="M -30 215 C 60 155, 120 295, 240 255 C 340 215, 420 305, 560 265"
          stroke="url(#wave-bl-cyan)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow-bl)"
          className="shining-wave-path"
        />
        <path
          d="M -30 230 C 60 170, 120 310, 240 270 C 340 230, 420 320, 560 280"
          stroke="#FF3CAC"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.6"
        />
        <path
          d="M -30 245 C 60 185, 120 325, 240 285 C 340 245, 420 335, 560 295"
          stroke="#38BDF8"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Bottom-Right Shining Wavy Ribbon Lines (as in photo) */}
      <svg
        className="wavy-ribbon-bottom-right"
        viewBox="0 0 650 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-br-cyan-green" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#39FF88" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF3CAC" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="wave-br-green" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#39FF88" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow-br" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feGaussianBlur stdDeviation="12" result="ambient" />
            <feMerge>
              <feMergeNode in="ambient" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Multi-strand shining wave curves sweeping right */}
        <path
          d="M 680 190 C 580 130, 490 270, 360 230 C 250 190, 160 280, 20 240"
          stroke="url(#wave-br-cyan-green)"
          strokeWidth="3.5"
          fill="none"
          filter="url(#glow-br)"
          className="shining-wave-path"
        />
        <path
          d="M 680 205 C 580 145, 490 285, 360 245 C 250 205, 160 295, 20 255"
          stroke="url(#wave-br-green)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow-br)"
          className="shining-wave-path"
        />
        <path
          d="M 680 220 C 580 160, 490 300, 360 260 C 250 220, 160 310, 20 270"
          stroke="#38BDF8"
          strokeWidth="1.2"
          fill="none"
          strokeOpacity="0.6"
        />
        <path
          d="M 680 235 C 580 175, 490 315, 360 275 C 250 235, 160 325, 20 285"
          stroke="#39FF88"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}
