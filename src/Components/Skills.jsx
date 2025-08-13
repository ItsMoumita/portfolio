import React, { useMemo, useState, useEffect, memo } from 'react';
import {
  SiFramer, SiExpress, SiMongodb, SiFirebase, SiC, SiCplusplus, SiGit, SiGithub
} from 'react-icons/si';

/* ---------------- Icons (your original + added) ---------------- */
const iconComponents = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26" />
      </svg>
    ),
    color: '#E34F26', label: 'HTML5'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6" />
      </svg>
    ),
    color: '#1572B6', label: 'CSS3'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330" />
      </svg>
    ),
    color: '#F7DF1E', label: 'JavaScript'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        </g>
      </svg>
    ),
    color: '#61DAFB', label: 'React'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933" />
      </svg>
    ),
    color: '#339933', label: 'Node.js'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4" />
      </svg>
    ),
    color: '#06B6D4', label: 'Tailwind CSS'
  },

  // Added
  framer:   { component: () => <SiFramer   className="w-full h-full" color="#A855F7" />, color: '#A855F7', label: 'Framer Motion' },
express:  { component: () => <SiExpress  className="w-full h-full" color="#FFFFFF" />, color: '#FFFFFF', label: 'Express.js' },
mongodb:  { component: () => <SiMongodb  className="w-full h-full" color="#47A248" />, color: '#47A248', label: 'MongoDB' },
firebase: { component: () => <SiFirebase className="w-full h-full" color="#FFCA28" />, color: '#FFCA28', label: 'Firebase' },
c:        { component: () => <SiC        className="w-full h-full" color="#A8B9CC" />, color: '#A8B9CC', label: 'C' },
cplusplus:{ component: () => <SiCplusplus className="w-full h-full" color="#00599C" />, color: '#00599C', label: 'C++' },
git:      { component: () => <SiGit      className="w-full h-full" color="#F05032" />, color: '#F05032', label: 'Git' },
github:   { component: () => <SiGithub   className="w-full h-full" color="#FFFFFF" />, color: '#FFFFFF', label: 'GitHub' },
};

const SkillIcon = memo(({ type }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

/* -------------- Orbit item + path (modified colors to your palette) -------------- */
const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}`}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glow = 'indigo', animationDelay = 0 }) => {
  const glowMap = {
    indigo: {
      primary: 'rgba(99, 102, 241, 0.4)', // indigo-500
      secondary: 'rgba(99, 102, 241, 0.2)',
      border: 'rgba(99, 102, 241, 0.3)',
    },
    fuchsia: {
      primary: 'rgba(99, 102, 241, 0.4)', // fuchsia-500
      secondary: 'rgba(99, 102, 241, 0.2)',
      border: 'rgba(99, 102, 241, 0.3)',
    },
  };
  const c = glowMap[glow] || glowMap.indigo;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, animationDelay: `${animationDelay}s` }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${c.secondary} 70%, ${c.primary} 100%)`,
          boxShadow: `0 0 60px ${c.primary}, inset 0 0 60px ${c.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />
      <div className="absolute inset-0 rounded-full" style={{ border: `1px solid ${c.border}`, boxShadow: `inset 0 0 20px ${c.secondary}` }} />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

/* -------------- Orbiting canvas (pauses on hover) -------------- */
function OrbitingCanvas({ skills }) {
  const [time, setTime] = useState(0);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let id;
    let last = performance.now();
    const loop = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setTime((t) => t + dt);
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [isPaused]);

  const orbitPaths = [
    { radius: 100, glow: 'indigo', delay: 0 },
    { radius: 180, glow: 'fuchsia', delay: 1.2 },
  ];

  return (
    <div
      className="relative w-[min(520px,100%)] h-[min(520px,100vw-40px)] mx-auto flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* subtle background gradients */}
      <div className="absolute inset-0 opacity-10 -z-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #374151 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #4B5563 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* center core with brand glow */}
      <div className="w-20 h-20 bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/40 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-xl animate-pulse"></div>
        <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="relative z-10">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>

      {/* orbit paths */}
      {orbitPaths.map((p) => (
        <GlowingOrbitPath key={`path-${p.radius}`} radius={p.radius} glow={p.glow} animationDelay={p.delay} />
      ))}

      {/* orbiting icons */}
      {skills.map((cfg) => {
        const angle = time * cfg.speed + (cfg.phaseShift || 0);
        return <OrbitingSkill key={cfg.id} config={cfg} angle={angle} />;
      })}
    </div>
  );
}

/* -------------- Helpers to build configs per category -------------- */
function makeConfig({ id, orbit, size = 44, speed = 1, phase = 0 }) {
  const meta = iconComponents[id] || {};
  return {
    id,
    orbitRadius: orbit,
    size,
    speed,
    iconType: id,
    phaseShift: phase,
    label: meta.label || id,
  };
}

function buildConfigs(list) {
  // Split into inner (first half) and outer (rest)
  const inner = list.slice(0, Math.ceil(list.length / 2));
  const outer = list.slice(Math.ceil(list.length / 2));

  const distribute = (items, radius, speed) =>
    items.map((id, i) =>
      makeConfig({
        id,
        orbit: radius,
        size: 46,
        speed,
        phase: (2 * Math.PI * i) / items.length,
      })
    );

  return [...distribute(inner, 100, 1), ...distribute(outer, 180, -0.6)];
}

/* -------------- Main Skills section -------------- */
export default function Skills() {
  const [tab, setTab] = useState('frontend');

  const skillsByTab = useMemo(() => {
    const frontend = ['html', 'css', 'javascript', 'react', 'tailwind', 'framer'];
    const backend = ['node', 'express', 'mongodb', 'firebase'];
    const others = ['c', 'cplusplus', 'git', 'github'];
    return {
      frontend: buildConfigs(frontend),
      backend: buildConfigs(backend),
      others: buildConfigs(others),
    };
  }, []);

  const skills = skillsByTab[tab];

  return (
    <section id="skills" className="relative bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        {/* Heading */}
        <h2 className="text-center italic font-extrabold leading-tight tracking-tight text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
          <span className="bg-white/90 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>

        {/* Tabs (capsule like your navbar) */}
        <div className="mt-6 flex justify-center">
          <div className="rounded-full border border-white/10 bg-black/20/50 backdrop-blur-md -4 p-1 flex items-center gap-2 md:gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            {[
              { key: 'frontend', label: 'Frontend' },
              { key: 'backend', label: 'Backend' },
              { key: 'others', label: 'Others' },
            ].map((b) => {
              const active = tab === b.key;
              return (
                <button
                  key={b.key}
                  onClick={() => setTab(b.key)}
                  className={[
                    'px-4 py-2 rounded-full text-md font-semibold transition-colors',
                    active ? 'text-white bg-zinc-800/70 border border-white/10' : 'text-zinc-300 hover:text-white',
                  ].join(' ')}
                >
                  {b.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Orbiting skills */}
        <div className="mt-10">
          <OrbitingCanvas skills={skills} />
        </div>
      </div>
    </section>
  );
}