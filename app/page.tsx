'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShoppingBag,
  Smartphone,
  Home,
  Signal,
  Landmark,
  Package,
  Store,
  Zap,
  CreditCard,
  ChevronRight,
  ArrowRight,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  MessageSquare,
  DollarSign,
  Star,
  Shield,
  Eye,
  Target,
  TrendingUp,
  BarChart2,
  Globe,
  Repeat,
  Award,
  Layers,
} from 'lucide-react';

import { PEP_SOURCES } from '../data/pepSources';
import {
  ECOSYSTEM_METRICS,
  USE_CASES,
  FAB_ROWS,
  CAMPAIGN_TILES,
  SPONSORSHIP_PACKAGES,
  DASHBOARD_METRICS,
  BUSINESS_CONTEXT,
} from '../data/pepPartnerData';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  ShoppingBag,
  Smartphone,
  Home,
  Signal,
  Landmark,
  Package,
  Store,
  Zap,
  CreditCard,
};

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-4">
      · {label}
    </p>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`font-serif leading-tight mb-6 ${light ? 'text-[#071A2F]' : 'text-white'}`}
      style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
    >
      {children}
    </h2>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-white/10">
      <motion.div
        className="h-full rounded-full"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00A3A3, #00843D)',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

// ─── Sticky Nav ───────────────────────────────────────────────────────────────

function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Opportunity', href: '#opportunity' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Campaign', href: '#campaign' },
    { label: 'Pilot', href: '#pilot' },
  ];

  return (
    <nav
      className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071A2F]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <span className="font-serif text-white text-lg font-semibold">
            PEP <span className="text-[#FFD200]">×</span> SchoolBridge
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-white/40 tracking-widest uppercase">
            Partner Microsite
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#pilot"
          className="bg-[#00843D] hover:bg-[#006B32] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          Present
        </a>
      </div>
    </nav>
  );
}

// ─── SVG Ecosystem Diagram ────────────────────────────────────────────────────

function EcosystemDiagram() {
  return (
    <svg
      viewBox="0 0 760 200"
      className="w-full max-w-2xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* PEP node */}
      <rect x="10" y="72" width="110" height="56" rx="12" fill="#00843D" />
      <text x="65" y="98" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">PEP</text>
      <text x="65" y="116" textAnchor="middle" fill="white" fontSize="10" opacity="0.8">Pepkor Group</text>

      {/* Arrow PEP → SB */}
      <path d="M 122 100 L 185 100" stroke="#FFD200" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow)" />

      {/* SchoolBridge node */}
      <rect x="188" y="64" width="140" height="72" rx="12" fill="#071A2F" stroke="#00A3A3" strokeWidth="2" />
      <text x="258" y="94" textAnchor="middle" fill="#00A3A3" fontSize="13" fontWeight="700">SchoolBridge</text>
      <text x="258" y="112" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">Digital School</text>
      <text x="258" y="126" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">Ecosystem</text>

      {/* Arrow SB → Schools */}
      <path d="M 330 100 L 390 100" stroke="#FFD200" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow)" />

      {/* Schools node */}
      <rect x="393" y="72" width="110" height="56" rx="12" fill="#1F2933" stroke="#FFD200" strokeWidth="1.5" />
      <text x="448" y="98" textAnchor="middle" fill="#FFD200" fontSize="13" fontWeight="700">Schools</text>
      <text x="448" y="116" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">2,148+ GDE</text>

      {/* Branches from Schools */}
      {/* Parents */}
      <path d="M 505 88 L 580 52" stroke="#00A3A3" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />
      <rect x="582" y="30" width="100" height="44" rx="8" fill="#00A3A3" fillOpacity="0.15" stroke="#00A3A3" strokeWidth="1" />
      <text x="632" y="50" textAnchor="middle" fill="#00A3A3" fontSize="12" fontWeight="600">Parents</text>
      <text x="632" y="66" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">2.83M</text>

      {/* Learners */}
      <path d="M 505 95 L 580 88" stroke="#00843D" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      <rect x="582" y="74" width="100" height="44" rx="8" fill="#00843D" fillOpacity="0.15" stroke="#00843D" strokeWidth="1" />
      <text x="632" y="94" textAnchor="middle" fill="#00843D" fontSize="12" fontWeight="600">Learners</text>
      <text x="632" y="110" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">1.2M aged 15–19</text>

      {/* Teachers */}
      <path d="M 505 108 L 580 132" stroke="#FFD200" strokeWidth="1.5" markerEnd="url(#arrowYellow)" />
      <rect x="582" y="118" width="100" height="44" rx="8" fill="#FFD200" fillOpacity="0.12" stroke="#FFD200" strokeWidth="1" />
      <text x="632" y="138" textAnchor="middle" fill="#FFD200" fontSize="12" fontWeight="600">Teachers</text>
      <text x="632" y="154" textAnchor="middle" fill="white" fontSize="10" opacity="0.7">95K staff</text>

      {/* Communities */}
      <path d="M 505 114 L 580 170" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" markerEnd="url(#arrowWhite)" />
      <rect x="582" y="158" width="100" height="36" rx="8" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
      <text x="632" y="178" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" opacity="0.7">Communities</text>

      {/* Arrowhead defs */}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#FFD200" />
        </marker>
        <marker id="arrowTeal" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#00A3A3" />
        </marker>
        <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#00843D" />
        </marker>
        <marker id="arrowYellow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#FFD200" />
        </marker>
        <marker id="arrowWhite" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 Z" fill="white" opacity="0.4" />
        </marker>
      </defs>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function Page() {
  return (
    <>
      <ProgressBar />
      <StickyNav />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center bg-[#071A2F] overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #00A3A3 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00843D 0%, transparent 50%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <FadeUp>
            <SectionKicker label="Partnership Opportunity · 2025–2027" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              className="font-serif text-white leading-tight mb-6 max-w-4xl"
              style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
            >
              Own the School Ecosystem{' '}
              <span className="text-[#FFD200]">Before Anyone Else Does</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
              A first-mover digital channel for PEP to reach parents, learners,
              teachers and communities through South Africa&apos;s most trusted
              daily institution: the school.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mb-14">
              <EcosystemDiagram />
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#opportunity"
                className="inline-flex items-center gap-2 bg-[#00843D] hover:bg-[#006B32] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-[#00843D]/30"
              >
                View Partnership Opportunity
                <ArrowRight size={18} />
              </a>
              <a
                href="#fab"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-[#00A3A3] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:bg-white/5"
              >
                Explore Commercial Value
                <ChevronRight size={18} />
              </a>
            </div>
          </FadeUp>

          {/* Metric Cards */}
          <FadeUp delay={0.5}>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-[#FFD200] tracking-[0.2em] uppercase mb-6">
                · Targetable Ecosystem Opportunity — Illustrative
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {ECOSYSTEM_METRICS.map((m, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="font-serif text-[#FFD200] mb-1"
                      style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
                    >
                      {m.value}
                    </div>
                    <div className="text-white/70 text-xs leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 2. WHY SCHOOLS ARE THE NEXT RETAIL CHANNEL ──────────────────────── */}
      <section
        id="opportunity"
        className="bg-[#071A2F] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionKicker label="Strategic Context" />
            <SectionHeading>
              Schools Are a High-Frequency, Trusted Retail Channel
            </SectionHeading>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-white/70 text-lg max-w-3xl mb-12 leading-relaxed">
              Unlike social media or generic digital advertising, SchoolBridge
              sits inside a trusted utility that parents open because it is
              connected to their child&apos;s school life. It carries the
              authority of the school itself — not an algorithm.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Admissions', icon: GraduationCap },
                { label: 'Back-to-School', icon: BookOpen },
                { label: 'Homework', icon: BookOpen },
                { label: 'Attendance', icon: Users },
                { label: 'Events', icon: Calendar },
                { label: 'Communication', icon: MessageSquare },
                { label: 'Payments', icon: DollarSign },
                { label: 'Study Support', icon: Star },
                { label: 'Parent Engagement', icon: Home },
              ].map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={chip.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white/80 hover:border-[#00A3A3]/50 hover:bg-[#00A3A3]/10 transition-all cursor-default"
                  >
                    <Icon size={14} className="text-[#00A3A3]" />
                    {chip.label}
                  </motion.div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 3. FIRST-MOVER ADVANTAGE ─────────────────────────────────────────── */}
      <section
        id="firstmover"
        className="bg-[#FFD200] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#071A2F]/60 mb-4">
              · First-Mover Advantage
            </p>
            <h2
              className="font-serif text-[#071A2F] leading-tight mb-12 max-w-4xl"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              If PEP Moves First, PEP Becomes the Default Retail Partner of the
              School Digital Ecosystem
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Award, title: 'Category Ownership', body: 'No competing retailer in the school channel. PEP gets the whitespace.' },
              { icon: Shield, title: 'Exclusive Sponsorship Rights', body: 'Structured partnership locks out category competitors for the duration.' },
              { icon: Eye, title: 'Always-On Visibility', body: 'Daily school comms mean daily brand presence — 180 school days per year.' },
              { icon: Target, title: 'Direct Digital Campaigns', body: 'Targeted campaigns by district, school, age group and term calendar.' },
              { icon: Users, title: 'Parent & Learner Segmentation', body: 'Reach parents, learners aged 15–19, and teachers as distinct audiences.' },
              { icon: Calendar, title: 'School Calendar Timing', body: 'Campaigns aligned to real school-year moments: registration, exams, winter, festive.' },
              { icon: TrendingUp, title: 'Retail Conversion Loops', body: 'From awareness to voucher redemption to store visit — trackable end-to-end.' },
              { icon: Layers, title: 'CSI + Commercial Impact', body: 'Sponsorship funds school digitisation. Commercial and social value combined.' },
              { icon: BarChart2, title: 'Data-Informed Planning', body: 'School and district-level performance data informs future campaign optimisation.' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeUp key={card.title} delay={i * 0.07}>
                  <div className="bg-[#071A2F]/10 hover:bg-[#071A2F]/20 border border-[#071A2F]/20 rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-[#071A2F]/15 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#071A2F]" />
                    </div>
                    <h3 className="font-semibold text-[#071A2F] mb-2">{card.title}</h3>
                    <p className="text-[#071A2F]/70 text-sm leading-relaxed">{card.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY THIS FITS PEP NOW ─────────────────────────────────────────── */}
      <section
        id="strategy"
        className="bg-[#F4F6F8] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-4">
              · Strategy Alignment
            </p>
            <h2
              className="font-serif text-[#071A2F] leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              PEP Is No Longer Only a Clothing Retailer
            </h2>
            <p className="text-[#1F2933]/60 text-lg max-w-2xl mb-12">
              Pepkor has evolved into a multi-category platform serving millions
              of South Africans across retail, mobile, logistics and financial
              services.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CONTEXT.map((card, i) => {
              const Icon = ICON_MAP[card.icon] || Store;
              const source = PEP_SOURCES.find((s) => s.id === card.sourceId);
              return (
                <FadeUp key={card.id} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-[#071A2F]/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#071A2F]/5 flex items-center justify-center">
                        <Icon size={20} className="text-[#00843D]" />
                      </div>
                      <span className="font-mono text-xs text-white bg-[#071A2F] px-2 py-1 rounded-md">
                        {card.id}
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#071A2F] mb-2 text-lg">{card.title}</h3>
                    <p className="text-[#1F2933]/60 text-sm leading-relaxed mb-4">{card.body}</p>
                    {source && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#00A3A3] hover:underline"
                      >
                        · {source.publisher}, {source.date}
                        <ChevronRight size={12} />
                      </a>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. USE CASES ─────────────────────────────────────────────────────── */}
      <section
        id="usecases"
        className="bg-[#071A2F] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionKicker label="Commercial Opportunities" />
            <SectionHeading>
              Six Commercial Opportunities Inside the School Ecosystem
            </SectionHeading>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => {
              const Icon = ICON_MAP[uc.icon] || ShoppingBag;
              return (
                <FadeUp key={uc.id} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${uc.color}22` }}
                    >
                      <Icon size={20} style={{ color: uc.color }} />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-lg">{uc.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{uc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {uc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-1 rounded-md"
                          style={{ background: `${uc.color}22`, color: uc.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. FAB TABLE ─────────────────────────────────────────────────────── */}
      <section
        id="fab"
        className="bg-[#F4F6F8] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-4">
              · FAB Framework
            </p>
            <h2
              className="font-serif text-[#071A2F] leading-tight mb-12"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Features · Advantages · Benefits
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="w-full border-collapse bg-white text-sm">
                <thead>
                  <tr className="bg-[#071A2F] text-white">
                    <th className="text-left px-6 py-4 font-mono text-xs tracking-widest uppercase w-1/3">Feature</th>
                    <th className="text-left px-6 py-4 font-mono text-xs tracking-widest uppercase w-1/3">Advantage</th>
                    <th className="text-left px-6 py-4 font-mono text-xs tracking-widest uppercase w-1/3">Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {FAB_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#071A2F]/5 hover:bg-[#F4F6F8] transition-colors ${
                        i % 2 === 0 ? 'bg-white' : 'bg-[#F4F6F8]/50'
                      }`}
                    >
                      <td className="px-6 py-5 text-[#071A2F] font-medium align-top leading-relaxed">{row.feature}</td>
                      <td className="px-6 py-5 text-[#1F2933]/70 align-top leading-relaxed">{row.advantage}</td>
                      <td className="px-6 py-5 text-[#00843D] align-top leading-relaxed font-medium">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 7. COMPETITIVE THREAT ────────────────────────────────────────────── */}
      <section
        className="bg-[#1F2933] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionKicker label="Competitive Landscape" />
            <h2
              className="font-serif text-white leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              If PEP Does Not Own This Channel, Another Retailer Will
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
              The school ecosystem is under-monetised, trusted and highly
              strategic. First-mover association is winner-takes-most. Brands that
              wait lose the category advantage forever.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: Store, label: 'Value Retailers' },
                { icon: Smartphone, label: 'Mobile Operators' },
                { icon: Landmark, label: 'Banks' },
                { icon: ShoppingBag, label: 'FMCG Brands' },
                { icon: Star, label: 'Student Discount Platforms' },
                { icon: DollarSign, label: 'School Payment Apps' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white/50 text-sm"
                >
                  <Icon size={16} className="text-white/30" />
                  <span className="font-mono text-xs">{label}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="border-l-4 border-[#FFD200] bg-[#FFD200]/5 rounded-r-2xl px-8 py-6 max-w-2xl">
              <p className="text-[#FFD200] font-semibold text-lg leading-relaxed">
                &ldquo;The first major retail sponsor gets the strongest brand
                association in a channel parents use daily.&rdquo;
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 8. PARTNERSHIP MODEL ─────────────────────────────────────────────── */}
      <section
        id="model"
        className="bg-[#071A2F] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionKicker label="Partnership Packages" />
            <SectionHeading>Choose Your Partnership Level</SectionHeading>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPONSORSHIP_PACKAGES.map((pkg, i) => (
              <FadeUp key={pkg.id} delay={i * 0.1}>
                <div
                  className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all"
                  style={{ borderTop: `4px solid ${pkg.border}` }}
                >
                  <div className="p-6">
                    <h3
                      className="font-serif text-white text-xl mb-2"
                    >
                      {pkg.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{pkg.tagline}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-sm text-white/70">
                          <span style={{ color: pkg.border }} className="mt-0.5 flex-shrink-0">✓</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CAMPAIGN EXAMPLES ─────────────────────────────────────────────── */}
      <section
        id="campaign"
        className="bg-[#F4F6F8] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-4">
              · Campaign Examples
            </p>
            <h2
              className="font-serif text-[#071A2F] leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              How Campaigns Work Inside SchoolBridge
            </h2>
            <p className="text-[#1F2933]/60 text-lg max-w-2xl mb-12">
              Six illustrative campaign models showing the full conversion pathway
              from audience to outcome.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPAIGN_TILES.map((tile, i) => (
              <FadeUp key={tile.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-[#071A2F]/5">
                  <div
                    className="h-2"
                    style={{ background: tile.color }}
                  />
                  <div className="p-6">
                    <span
                      className="inline-block font-mono text-xs px-2 py-1 rounded-md mb-3"
                      style={{ background: `${tile.color}18`, color: tile.color }}
                    >
                      {tile.audience}
                    </span>
                    <h3 className="font-semibold text-[#071A2F] text-lg mb-4">{tile.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#071A2F]/40 uppercase w-20 flex-shrink-0 pt-0.5">Channel</span>
                        <span className="text-[#1F2933]/70">{tile.channel}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#071A2F]/40 uppercase w-20 flex-shrink-0 pt-0.5">Offer</span>
                        <span className="text-[#1F2933]/70">{tile.offerType}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#071A2F]/40 uppercase w-20 flex-shrink-0 pt-0.5">Convert</span>
                        <span className="text-[#1F2933]/70">{tile.conversion}</span>
                      </div>
                      <div className="flex items-start gap-3 pt-2 border-t border-[#071A2F]/5">
                        <span className="font-mono text-xs text-[#071A2F]/40 uppercase w-20 flex-shrink-0 pt-0.5">Metric</span>
                        <span
                          className="font-semibold text-sm"
                          style={{ color: tile.color }}
                        >
                          {tile.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. MEASUREMENT DASHBOARD ────────────────────────────────────────── */}
      <section
        className="bg-[#071A2F] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionKicker label="Measurement Framework" />
            <SectionHeading>Track Every Layer of Commercial Impact</SectionHeading>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="glass rounded-2xl p-6 sm:p-8">
              <p className="font-mono text-xs text-[#FFD200] tracking-[0.2em] uppercase mb-8">
                · Proposed Measurement Framework — Illustrative
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {DASHBOARD_METRICS.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl p-4 text-center transition-all"
                  >
                    <div className="font-serif text-[#FFD200] text-2xl sm:text-3xl mb-1">
                      {metric.value}
                    </div>
                    <div className="text-white/50 text-xs mb-2 leading-tight">{metric.label}</div>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: metric.trend.startsWith('+')
                          ? '#00843D22'
                          : '#00A3A322',
                        color: metric.trend.startsWith('+') ? '#00843D' : '#00A3A3',
                      }}
                    >
                      {metric.trend}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 11. SOCIAL IMPACT LAYER ──────────────────────────────────────────── */}
      <section
        className="bg-[#F4F6F8] py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-4">
              · Social Impact
            </p>
            <h2
              className="font-serif text-[#071A2F] leading-tight mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Commercial Sponsorship That Funds School Digitisation
            </h2>
            <p className="text-[#1F2933]/60 text-lg max-w-2xl mb-12">
              Commercial sponsorship can fund school digitisation while creating
              measurable brand and retail value for PEP.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Affordable Access', body: 'Sponsorship lowers cost barriers for schools and families to access digital school management tools.', icon: Globe },
              { title: 'School-Family Support', body: 'Better communication between schools and parents improves outcomes, trust and community cohesion.', icon: Home },
              { title: 'Digital Inclusion', body: 'Extending digital infrastructure to township, rural and under-resourced school communities.', icon: Smartphone },
              { title: 'Youth Readiness', body: 'Equipping learners with digital tools, financial literacy and connectivity for their future.', icon: GraduationCap },
              { title: 'Community Retail Access', body: 'PAXI and PEP store access integrated into community school networks drives local economic participation.', icon: Store },
              { title: 'Rural & Township Reach', body: 'Underserved communities benefit from both school digitisation and expanded retail accessibility.', icon: Repeat },
            ].map(({ title, body, icon: Icon }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-[#071A2F]/5">
                  <div className="w-10 h-10 rounded-xl bg-[#00843D]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#00843D]" />
                  </div>
                  <h3 className="font-semibold text-[#071A2F] mb-2">{title}</h3>
                  <p className="text-[#1F2933]/60 text-sm leading-relaxed">{body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="bg-[#071A2F] rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <p className="font-serif text-white text-xl leading-relaxed">
                &ldquo;Commercial sponsorship can fund school digitisation while creating
                measurable brand and retail value.&rdquo;
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 12. PILOT / NEXT STEP ────────────────────────────────────────────── */}
      <section
        id="pilot"
        className="bg-[#071A2F] py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto text-center">
          <FadeUp>
            <SectionKicker label="Proposed Pilot" />
            <h2
              className="font-serif text-white leading-tight mb-6 max-w-4xl mx-auto"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              PEP Can Become the First Retail Brand Embedded in South Africa&apos;s
              Digital School Ecosystem
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Start with a structured pilot. Measure. Renew. Scale.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                '50–100 schools',
                '90-day campaign',
                'Back-to-school or PEP Cell focus',
                'Parent & learner dashboard',
                'Retail conversion tracking',
                'Renewal decision',
              ].map((chip) => (
                <span
                  key={chip}
                  className="glass rounded-full px-5 py-2 text-sm text-white/80 font-body"
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <a
              href="mailto:hello@schoolbridge.co.za?subject=PEP%20Pilot%20Partnership%20Enquiry"
              className="inline-flex items-center gap-3 bg-[#00843D] hover:bg-[#006B32] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-[#00843D]/30 hover:-translate-y-1"
            >
              Discuss the Pilot Partnership
              <ArrowRight size={20} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── PUBLIC DATA SOURCES ───────────────────────────────────────────────── */}
      <section className="bg-[#F4F6F8] py-16 px-4 sm:px-6 lg:px-8 border-t border-[#071A2F]/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#00A3A3] mb-6">
              · Public Data Sources
            </p>
            <h3 className="font-serif text-[#071A2F] text-2xl mb-8">References</h3>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PEP_SOURCES.map((src, i) => (
              <FadeUp key={src.id} delay={i * 0.06}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 border border-[#071A2F]/5 hover:border-[#00A3A3]/30 hover:shadow-md transition-all group"
                >
                  <p className="font-mono text-xs text-[#00A3A3] mb-1">
                    {src.publisher} · {src.date}
                  </p>
                  <p className="text-[#071A2F] text-sm font-medium group-hover:text-[#00843D] transition-colors leading-snug">
                    {src.title}
                  </p>
                  <p className="font-mono text-xs text-[#071A2F]/30 mt-2 truncate">{src.url}</p>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#071A2F] border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif text-white/80 mb-3">
            SchoolBridge | ProvinceBridge | Partner Microsite for PEP
          </p>
          <p className="text-white/30 text-xs max-w-2xl mx-auto leading-relaxed">
            All commercial models and metrics shown are proposed frameworks.
            Ecosystem scale data is based on public GDE and SA Government
            education data. Partner commercial proposals are indicative only.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-xs font-mono text-white/20">
            <span>SchoolBridge</span>
            <span>·</span>
            <span>ProvinceBridge</span>
            <span>·</span>
            <span>2025</span>
          </div>
        </div>
      </footer>
    </>
  );
}
