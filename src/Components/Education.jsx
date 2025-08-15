// src/Components/Education.jsx
'use client';

import React from 'react';
import {  BookOpen } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const items = [
  {
    id: 'bsc',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Tejgaon College (National University)',
    period: '2021 — Present',
    ongoing: true,
    icon: BookOpen,
    about: [
      'Building projects with React and the MERN stack; Focus on full stack web developing and problem solving.',
    ],
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajarbag Police Lines School & College',
    period: '2020',
    ongoing: false,
    icon: BookOpen,
    about: [
      'Science stream with a strong base in mathematics, physics, and analytical thinking.',
      'Sparked my interest in programming and problem‑solving.',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16 md:py-20">
        <header className="mb-8 sm:mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">
            A quick look at my academic background.
          </p>
        </header>

        {/* Education items */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {items.map(({ id, degree, institution, period, ongoing, icon: Icon, about }) => (
            <SpotlightCard key={id} className="h-full" innerClassName="p-6 md:p-7 flex h-full">
              <div className="flex h-full w-full flex-col">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/25">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                        {degree}
                      </h3>
                      <span className="text-xs sm:text-sm text-zinc-400">{period}</span>
                    </div>
                    <p className="mt-1 text-sm sm:text-base text-zinc-300">{institution}</p>
                    {ongoing && (
                      <span className="mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-300 bg-emerald-600/15 ring-1 ring-emerald-500/30">
                        Currently Studying
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-4 space-y-2 list-disc pl-5 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
                  {about.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-2" />
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}