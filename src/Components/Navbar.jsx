import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const barRef = useRef(null); // measure only the top bar, not the dropdown
  const [navHeight, setNavHeight] = useState(0);
  const [active, setActive] = useState(
    typeof window !== 'undefined' ? window.location.hash.slice(1) || 'home' : 'home'
  );
  const [open, setOpen] = useState(false);

  // Measure the visible bar height and set scroll-padding-top for anchors
  useEffect(() => {
    const measure = () => {
      const h = barRef.current ? Math.ceil(barRef.current.getBoundingClientRect().height) : 0;
      setNavHeight(h);
      // Make anchor jumps land below the sticky bar
      document.documentElement.style.scrollPaddingTop = `${h + 8}px`;
    };
    // Measure now and after layout settles
    measure();
    const ro = new ResizeObserver(measure);
    if (barRef.current) ro.observe(barRef.current);
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
    };
  }, []);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined' || open) return; // pause when menu open

    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    // Keep latest intersection ratios
    const ratios = Object.fromEntries(sections.map((el) => [el.id, 0]));

    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.intersectionRatio;
        });

        // Prefer the section with the largest visible area
        let bestId = null;
        let bestRatio = -1;
        for (const id of Object.keys(ratios)) {
          if (ratios[id] > bestRatio) {
            bestRatio = ratios[id];
            bestId = id;
          }
        }

        // If none has a meaningful ratio (e.g., in fast scroll), fallback to last above header line
        if (bestRatio < 0.12) {
          const byTop = sections
            .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))
            .sort((a, b) => a.top - b.top);

          const above = byTop.filter((s) => s.top - navHeight <= 0);
          if (above.length) bestId = above[above.length - 1].id;
          else bestId = byTop[0].id;
        }

        // Snap to last section at page bottom
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const vh = window.innerHeight;
        const docH = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        if (scrollY + vh >= docH - 1) {
          bestId = sections[sections.length - 1].id;
        }

        setActive((prev) => {
          if (prev !== bestId) {
            window.history.replaceState({}, '', `#${bestId}`);
            return bestId;
          }
          return prev;
        });
      },
      {
        root: null,
        threshold: thresholds,
        // Offset top by the bar height; bias selection away from the bottom 40% to reduce overlap
        rootMargin: `-${Math.max(0, navHeight + 1)}px 0px -40% 0px`,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navHeight, open]);

  // Keep UI in sync when navigating browser history to hashes
  useEffect(() => {
    const syncFromUrl = () => {
      const id = window.location.hash.slice(1) || 'home';
      setActive(id);
    };
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('hashchange', syncFromUrl);
    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('hashchange', syncFromUrl);
    };
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Push history entry on click (so back button works)
      window.history.pushState({}, '', `#${id}`);
      setActive(id);
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        {/* Capsule navbar */}
        <nav className="mt-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div
            ref={barRef}
            className="flex h-14 md:h-16 items-center justify-between px-3 md:px-5"
          >
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-white italic"
              aria-current={active === 'home' ? 'page' : undefined}
            >
              Moumita
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id} className="relative">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNav(e, link.id)}
                      className={[
                        'relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                        isActive ? 'text-white' : 'text-zinc-300 hover:text-white',
                      ].join(' ')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-zinc-700/60 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Resume download (desktop) */}
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/90"
            >
              <Download size={16} />
              Resume
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mt-2 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md md:hidden"
            >
              <ul className="px-2 py-2">
                {links.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id} className="relative">
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => handleNav(e, link.id)}
                        className={[
                          'relative block rounded-full px-4 py-2 text-base font-semibold',
                          isActive ? 'text-white' : 'text-white/90 hover:text-white',
                        ].join(' ')}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                        {isActive && (
                          <span className="pointer-events-none absolute inset-0 rounded-full bg-zinc-700/60 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
                        )}
                      </a>
                    </li>
                  );
                })}

                <li className="pt-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-base font-semibold text-black shadow-sm hover:bg-white/90"
                    onClick={() => setOpen(false)}
                  >
                    <Download size={18} />
                    Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}