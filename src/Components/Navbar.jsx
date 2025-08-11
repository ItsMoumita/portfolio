// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import ShimmerButton from './ShimmerButton';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }
    const hash = location.hash?.slice(1) || 'home';
    setActive(links.some((l) => l.id === hash) ? hash : 'home');
  }, [location.pathname, location.hash]);

  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `/#${id}`);
      setActive(id);
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        {/* Capsule navbar container (same width as content) */}
        <nav className="mt-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="flex h-14 md:h-16 items-center justify-between px-3 md:px-5">
            {/* Brand */}
            <Link
              to="/#home"
              onClick={(e) => handleNav(e, 'home')}
              className="text-2xl md:text-3xl font-semibold tracking-tight text-white italic"
            >
              Moumita
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id} className="relative">
                    <NavLink
                      to={`/#${link.id}`}
                      onClick={(e) => handleNav(e, link.id)}
                      className={[
                        'relative z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                        isActive ? 'text-white' : 'text-zinc-300 hover:text-white',
                      ].join(' ')}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-zinc-700/60 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                        />
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            {/* Resume shimmer (desktop) */}
            <div className="hidden md:inline-flex">
              <ShimmerButton
                as="link"
                to="/resume"
                icon={Download}
                accent="#ffffff"
                innerClassName="px-4 py-2 text-sm font-semibold"
              >
                Resume
              </ShimmerButton>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown (glass, full width of content) */}
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
                      <NavLink
                        to={`/#${link.id}`}
                        onClick={(e) => handleNav(e, link.id)}
                        className={[
                          'relative block rounded-full px-4 py-2 text-base font-semibold',
                          isActive ? 'text-white' : 'text-white/90 hover:text-white',
                        ].join(' ')}
                      >
                        {link.label}
                        {isActive && (
                          <span className="pointer-events-none absolute inset-0 rounded-full  bg-zinc-700/60 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.35)]" />
                        )}
                      </NavLink>
                    </li>
                  );
                })}

                <li className="pt-2">
                  <ShimmerButton
                    as="link"
                    to="/resume"
                    icon={Download}
                    accent="#06b6d4"
                    className="w-full"
                    innerClassName="w-full justify-center px-4 py-2 text-base font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Resume
                  </ShimmerButton>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}