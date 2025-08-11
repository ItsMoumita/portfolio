'use client';
import React from 'react';

export default function ShimmerButton({
  as = 'a',
  href,
  onClick,
  icon: Icon,
  children,
  className = '',
  innerClassName = '',
  target,
  rel,
  accent = '#06b6d4', // cyan by default
}) {
  const Comp = as === 'button' ? 'button' : 'a';

  const customCss = `
    @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
    @keyframes shimmer-spin { to { --angle: 360deg; } }
  `;

  return (
    <div className={`inline-flex ${className}`}>
      <style>{customCss}</style>
      <Comp
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className="relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden group"
        style={{ background: 'transparent' }}
      >
        {/* animated conic border */}
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from var(--angle), transparent 25%, ${accent}, transparent 50%)`,
            animation: 'shimmer-spin 2.5s linear infinite',
          }}
          aria-hidden
        />
        {/* inner pill */}
        <span className={`relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-black/70 backdrop-blur-sm transition-colors duration-300 ${innerClassName}`}>
          {Icon ? <Icon size={16} /> : null}
          {children}
        </span>
      </Comp>
    </div>
  );
}