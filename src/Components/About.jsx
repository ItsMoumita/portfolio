import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Code2, Rocket, Sparkles, BookOpen, Music, Scissors, Ruler, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 relative bg-transparent text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center italic font-extrabold leading-tight tracking-tight
                     text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]"
        >
          <span className="bg-white/90 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: main text */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {/* Intro */}
              <p className="text-lg text-zinc-200">
                Hi, I’m <span className="font-semibold text-white">Fatema‑Tuj‑Zahura Moumita</span>.
                I’m a CSE student and a passionate web developer.
              </p>

              {/* Journey */}
              <p className="mt-4 text-zinc-300">
                I started with simple web pages and got hooked on building smooth, modern websites.
                Today I use tools like React and Tailwind to create clean, fast, and responsive UIs.
                I love learning new tech and staying up to date.
              </p>

              {/* What I enjoy */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Code2 size={18} />
                </span>
                <h3 className="text-xl font-semibold">The work I enjoy</h3>
              </div>
              <p className="mt-2 text-zinc-300">
                I enjoy front‑end work: simple layouts, clear typography, and small animations with
                Framer Motion. When needed, I build full MERN apps to bring ideas to life. I care
                about accessibility and performance.
              </p>

              {/* Personality */}
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Sparkles size={18} />
                </span>
                <h3 className="text-xl font-semibold">How I work</h3>
              </div>
              <ul className="mt-2 space-y-2 text-zinc-300">
                <li>• Curious: I like to explore and try new tools.</li>
                <li>• Careful: I focus on details and clean code.</li>
                <li>• Friendly: I enjoy working with others and clear communication.</li>
              </ul>

              {/* Outside of code */}
              <div className="mt-6 flex items-center gap-3">
                   <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Heart size={18} />
                </span>
                <h3 className="text-xl font-semibold">Outside of code</h3>
              </div>

              <p className="mt-2 text-zinc-300">
                I love music and often make playlists. I also design my own clothes—sketching ideas,
                choosing fabrics, and creating pieces that match my style. This creativity helps me
                in my design and UI work too.
              </p>

            
            </div>
          </motion.div>

          {/* Right: quick facts / chips */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Quick facts */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <h4 className="text-sm uppercase tracking-wider text-zinc-400">Quick facts</h4>
                <ul className="mt-3 space-y-2 text-zinc-200">
                  <li>• CSE student</li>
                  <li>• Web developer (React, Tailwind)</li>
                  <li>• Loves new tech and learning</li>
                </ul>
              </div>

              {/* What I build */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <h4 className="text-sm uppercase tracking-wider text-zinc-400">What I build</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Landing pages', 'Dashboards', 'Reusable components', 'Animations'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <h4 className="text-sm uppercase tracking-wider text-zinc-400">I also enjoy</h4>
                <div className="mt-3 flex items-center gap-3 text-white/90">
                  <Badge icon={<Music size={16} />} label="Music" />
                  <Badge icon={<Scissors size={16} />} label="Designing clothes" />
                  <Badge icon={<Ruler size={16} />} label="Pattern making" />
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs">
      {icon}
      {label}
    </span>
  );
}