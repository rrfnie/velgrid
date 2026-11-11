import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TECH_STACKS = [
  {
    name: 'React',
    category: 'Frontend Library',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="#0284c7">
        <circle cx="0" cy="0" r="2.05" fill="#0284c7"/>
        <g stroke="#0284c7" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Next.js',
    category: 'Full-Stack React',
    bgColor: 'bg-slate-900/10',
    borderColor: 'border-slate-800/20',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
        <mask id="nextMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#nextMask)">
          <circle cx="90" cy="90" r="90" fill="#0F172A" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <rect x="115" y="54" width="12" height="72" fill="white" />
        </g>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'Utility Styling',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0284C7">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    )
  },
  {
    name: 'Vite',
    category: 'Lightning Bundler',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32">
        <path fill="#BD34FE" d="M29.5 5.5L16.8 28.2c-.3.6-1.2.6-1.5 0L2.5 5.5c-.4-.7.1-1.5.9-1.5h25.2c.8 0 1.3.8.9 1.5z"/>
        <path fill="#41D1FF" d="M22.5 4H9.5c-.8 0-1.3.8-.9 1.5l6.5 12c.4.7 1.4.7 1.8 0l6.5-12c.4-.7-.1-1.5-.9-1.5z"/>
        <path fill="#FFD025" d="M16 11l-3.5 6.5h7L16 11z"/>
      </svg>
    )
  },
  {
    name: 'Node.js',
    category: 'Runtime Engine',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="#16a34a">
        <path d="M16 3l12 7v14l-12 7-12-7V10l12-7z"/>
        <path d="M16 12l6 3.5v7L16 26l-6-3.5v-7L16 12z" fill="#ffffff" fillOpacity="0.4"/>
      </svg>
    )
  },
  {
    name: 'PHP',
    category: 'Backend & CMS',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-400/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#4f46e5">
        <ellipse cx="12" cy="12" rx="10" ry="6" fill="#4f46e5"/>
        <text x="12" y="14" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PHP</text>
      </svg>
    )
  },
  {
    name: 'MySQL',
    category: 'Relational Database',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0369a1">
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6c-4.41 0-8-1.34-8-2.5S7.59 3 12 3s8 1.34 8 2.5S16.41 8 12 8z"/>
        <path d="M2 9.5v4C2 15.98 6.48 18 12 18s10-2.02 10-4.5v-4C22 11.98 17.52 14 12 14S2 11.98 2 9.5z"/>
        <path d="M2 15.5v2C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-2c0 2.48-4.48 4.5-10 4.5S2 17.98 2 15.5z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    category: 'Type-Safe Code',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M11 12H7V10H16V12H12V19H11V12Z" fill="white"/>
        <path d="M17 19V17H19V15H17V13H20V11H15V19H17Z" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Framer Motion',
    category: 'Smooth Micro-UI',
    bgColor: 'bg-blue-600/10',
    borderColor: 'border-blue-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0055FF">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    category: 'Enterprise DB',
    bgColor: 'bg-sky-600/10',
    borderColor: 'border-sky-600/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  },
  {
    name: 'Vercel',
    category: 'Edge Deployment',
    bgColor: 'bg-slate-900/10',
    borderColor: 'border-slate-800/20',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0F172A">
        <path d="M12 1L24 22H0L12 1Z"/>
      </svg>
    )
  },
  {
    name: 'Figma',
    category: 'UI/UX Prototyping',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E"/>
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
      </svg>
    )
  },
  {
    name: 'Flutter',
    category: 'Mobile Android & iOS',
    bgColor: 'bg-sky-400/10',
    borderColor: 'border-sky-400/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#02569B">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM14.314 11.028L7.857 17.485 11.557 21.185 18.014 14.728l-3.7-3.7zM21.686 11.028l-3.7 3.7 3.7 3.7h7.371l-3.7-3.7 3.7-3.7h-7.371z" fill="#02569B"/>
      </svg>
    )
  },
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2v6zm0-8h-2V8h2v2z"/>
      </svg>
    )
  },
  {
    name: 'Python',
    category: 'Data & Automation',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M11.9 2c-3.1 0-5.3.3-5.3 2.1v2.1h5.3v.7H4.3c-2 0-3.3 1.3-3.3 3.3 0 2.1 1.4 3.4 3.3 3.4h1.7v-2.3c0-2.3 2-4.1 4.3-4.1h5.3v-2.9c0-1.8-2.2-2.3-3.7-2.3z" fill="#3776AB"/>
        <path d="M12.1 22c3.1 0 5.3-.3 5.3-2.1v-2.1h-5.3v-.7h7.6c2 0 3.3-1.3 3.3-3.3 0-2.1-1.4-3.4-3.3-3.4h-1.7v2.3c0 2.3-2 4.1-4.3 4.1H8.4v2.9c0 1.8 2.2 2.3 3.7 2.3z" fill="#FFD43B"/>
      </svg>
    )
  },
  {
    name: 'Git & GitHub',
    category: 'Clean Code Repo',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#ea580c">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    )
  }
];

export default function TechStackMarquee() {
  const { t } = useLanguage();
  const renderCard = (tech, idx) => (
    <div
      key={`${tech.name}-${idx}`}
      className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-slate-950/90 border border-slate-800/90 hover:border-sky-500/50 hover:bg-slate-900 transition-colors flex-shrink-0"
    >
      <div
        className={`w-10 h-10 rounded-xl ${tech.bgColor} border ${tech.borderColor} flex items-center justify-center flex-shrink-0`}
      >
        {tech.svg}
      </div>
      <div className="text-left">
        <p className="text-xs sm:text-sm font-bold text-white font-heading leading-tight whitespace-nowrap">
          {tech.name}
        </p>
        <p className="text-[10px] text-slate-400 font-medium mt-0.5 whitespace-nowrap">
          {tech.category}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-slate-900 border-y border-slate-800/80 overflow-hidden relative">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-32 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-32 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-heading">
              Modern Tech Ecosystem
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              {t.marquee.ecosystem}
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Outer Container with Gradient Edges */}
      <div className="marquee-container relative w-full overflow-hidden flex select-none">
        {/* Left Gradient Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Edge Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10 pointer-events-none" />

        {/* Two identical moving tracks moving smoothly to the left */}
        <div className="animate-marquee-infinite pr-4">
          {TECH_STACKS.map((tech, idx) => renderCard(tech, `track1-${idx}`))}
        </div>

        <div className="animate-marquee-infinite pr-4" aria-hidden="true">
          {TECH_STACKS.map((tech, idx) => renderCard(tech, `track2-${idx}`))}
        </div>
      </div>
    </section>
  );
}
