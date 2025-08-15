// src/Components/SpotlightCard.jsx
'use client';

import React from 'react';

export default function SpotlightCard({
  children,
  className = '',
  innerClassName = '',
}) {
  return (
    <div
      className={[
        'relative isolate w-full h-full rounded-2xl border border-transparent p-[1px] animate-border',
        // Solid inner background via padding-box + white conic-gradient for the border
        '[background:linear-gradient(45deg,#080b11,theme(colors.slate.900)_60%,#0b1220)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white/.18)_80%,theme(colors.white)_86%,theme(colors.white/.85)_90%,theme(colors.white)_94%,theme(colors.white/.18))_border-box]',
        // Subtle outer glow
        'shadow-[0_0_18px_rgba(255,255,255,0.08)]',
        className,
      ].join(' ')}
    >
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes border-spin {
          to {
            --border-angle: 360deg;
          }
        }
        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>

      {/* Solid card content (non-glassy) */}
      <div
        className={[
          'rounded-2xl bg-white text-black dark:bg-zinc-900 dark:text-white',
          'h-full',
          innerClassName,
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}