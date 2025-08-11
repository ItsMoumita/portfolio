// src/Components/Hero.jsx
import { Link } from 'react-router'; 
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import portrait from '../assets/portrait.jpg';
import ShimmerButton from './ShimmerButton';

export default function Hero() {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-transparent text-white min-h-[calc(100svh-80px)]"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 py-14 sm:py-16 md:py-20 pb-24 lg:mt-12 place-items-center lg:items-center lg:justify-items-start">
        {/* Left (text) — on mobile this is second */}
        <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl text-zinc-200"
          >
            Hi! <span className="align-middle">👋</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mt-2 text-4xl leading-tight font-extrabold sm:text-6xl md:text-7xl"
          >
            I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Moumita
            </span>
            ,
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl mx-auto"
          >
            A{' '}
            <span className="font-semibold text-white">
              <Typewriter
                words={[
                  'Front‑End Developer',
                  'React Developer',
                  'MERN Stack Developer',
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1400}
              />
            </span>{' '}
            who loves building intuitive, clean, and modern experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <button
              onClick={() => scrollToId('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-semibold text-black  hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              <Mail size={16} />
              Get in Touch
            </button>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:border-white/40 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
            >
              <Download size={16} />
              Resume
            </Link>
          </motion.div>
        </div>

        {/* Right (image) — on mobile this is first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="order-1 lg:order-2 relative mx-auto w-56 md:w-72 lg:w-[26rem] aspect-square"
        >
          {/* optional soft halo behind the image */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.35),transparent_60%)]" />
          <img
            src={portrait}
            alt="Portrait"
            className="relative z-10 h-full w-full rounded-full object-cover ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      {/* Bottom-center arrow */}
      <motion.button
        type="button"
        onClick={() => scrollToId('projects')}
        className="group absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 text-white hover:border-white shadow-[0_0_10px_rgba(255,255,255,0.35)] hover:shadow-[0_0_16px_rgba(255,255,255,0.55)] bg-transparent"
        aria-label="Scroll down"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} className="transition-transform group-hover:translate-y-0.5" />
      </motion.button>
    </section>
  );
}