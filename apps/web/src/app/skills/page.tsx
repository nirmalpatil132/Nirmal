'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { Container } from '../../components/ui/Container';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { SKILL_GROUPS, SkillItem, SkillStatus } from '../../data/skills';
import { PROFILE_DATA } from '../../data/profile';
import { EducationSection } from '../../components/sections/EducationSection';

// Custom SVG and Styled Brand Icons
function TechIcon({ name, icon }: { name: string; icon?: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes('python')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2V6.5H12.1V7.2H5.2C3.1 7.2 1.3 8.7 1.3 11.4C1.3 14.5 2.8 15.6 4.6 15.6H6.1V13.5C6.1 11.1 8 11.1 8 11.1H12.9C14.7 11.1 16 9.8 16 8.2V4.4C16 2.7 14.6 2 11.9 2ZM9.5 3.5C10 3.5 10.4 3.9 10.4 4.4C10.4 4.9 10 5.3 9.5 5.3C9 5.3 8.6 4.9 8.6 4.4C8.6 3.9 9 3.5 9.5 3.5Z" fill="#38bdf8" />
        <path d="M12.1 22C17.2 22 16.9 19.8 16.9 19.8V17.5H11.9V16.8H18.8C20.9 16.8 22.7 15.3 22.7 12.6C22.7 9.5 21.2 8.4 19.4 8.4H17.9V10.5C17.9 12.9 16 12.9 16 12.9H11.1C9.3 12.9 8 14.2 8 15.8V19.6C8 21.3 9.4 22 12.1 22ZM14.5 20.5C14 20.5 13.6 20.1 13.6 19.6C13.6 19.1 14 18.7 14.5 18.7C15 18.7 15.4 19.1 15.4 19.6C15.4 20.1 15 20.5 14.5 20.5Z" fill="#ff6b00" />
      </svg>
    );
  }

  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#3178c6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#fff' }}>
        TS
      </div>
    );
  }

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#f7df1e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#000' }}>
        JS
      </div>
    );
  }

  if (normalized.includes('node')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.8V19.2L12 25L22 19.2V7.8L12 2Z" stroke="#22c55e" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 7V17M7 10L17 14M7 14L17 10" stroke="#22c55e" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes('react')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#38bdf8" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#38bdf8" />
      </svg>
    );
  }

  if (normalized.includes('next.js')) {
    return (
      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 900, color: '#000' }}>
        ▲
      </div>
    );
  }

  if (normalized.includes('postgres')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 4 6 4 11C4 16 7 21 12 21C17 21 20 16 20 11C20 6 17 3 12 3Z" stroke="#38bdf8" strokeWidth="2" />
        <path d="M12 7C9 7 8 9 8 12C8 15 9 17 12 17C15 17 16 15 16 12C16 9 15 7 12 7Z" stroke="#ff8533" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes('mongo')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6 8 6 14C6 17.5 8.5 21 12 22C15.5 21 18 17.5 18 14C18 8 12 2 12 2Z" stroke="#10b981" strokeWidth="2" />
        <path d="M12 2V22" stroke="#10b981" strokeWidth="1.5" />
      </svg>
    );
  }

  if (normalized.includes('docker')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="10" width="3" height="3" fill="#38bdf8" />
        <rect x="7" y="10" width="3" height="3" fill="#38bdf8" />
        <rect x="11" y="10" width="3" height="3" fill="#38bdf8" />
        <rect x="7" y="6" width="3" height="3" fill="#38bdf8" />
        <rect x="11" y="6" width="3" height="3" fill="#38bdf8" />
        <path d="M2 14C2 17.5 5 20 12 20C19 20 22 17.5 22 14C22 14 19 14 17 15.5C15 17 13 14 10 14C7 14 4 16 2 14Z" stroke="#38bdf8" strokeWidth="1.8" />
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21.5 10.5L13.5 2.5C12.8 1.8 11.7 1.8 11 2.5L2.5 11C1.8 11.7 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.3 22.2 13 21.5L21.5 13C22.2 12.3 22.2 11.2 21.5 10.5Z" stroke="#ff6b00" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
      </svg>
    );
  }

  if (normalized.includes('figma')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 2H12V7H8C6.62 7 5.5 5.88 5.5 4.5C5.5 3.12 6.62 2 8 2Z" fill="#ff6b00" />
        <path d="M12 2H16C17.38 2 18.5 3.12 18.5 4.5C18.5 5.88 17.38 7 16 7H12V2Z" fill="#f59e0b" />
        <path d="M8 7H12V12H8C6.62 12 5.5 10.88 5.5 9.5C5.5 8.12 6.62 7 8 7Z" fill="#8b5cf6" />
        <circle cx="14" cy="9.5" r="2.5" fill="#38bdf8" />
        <path d="M8 12H12V17C12 18.38 10.88 19.5 9.5 19.5C8.12 19.5 7 18.38 7 17C7 15.62 8.12 14.5 9.5 14.5H12V12H8Z" fill="#10b981" />
      </svg>
    );
  }

  if (normalized.includes('gemini') || normalized.includes('ai')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#tech-gemini-gradient)" />
        <defs>
          <linearGradient id="tech-gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#ff6b00" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <span style={{ fontSize: '18px' }}>
      {icon || '⚡'}
    </span>
  );
}

// Tool platform card item
interface ToolPlatform {
  name: string;
  category: string;
  icon: string;
  highlightColor: string;
}

const TOOLS_PLATFORMS: ToolPlatform[] = [
  { name: 'VS Code', category: 'IDE & Editor', icon: '💻', highlightColor: '#38bdf8' },
  { name: 'Cursor AI', category: 'Agentic IDE', icon: '✨', highlightColor: '#ff8533' },
  { name: 'Git', category: 'Version Control', icon: '🔀', highlightColor: '#ff6b00' },
  { name: 'GitHub', category: 'Collaboration', icon: '🐙', highlightColor: '#ffffff' },
  { name: 'Postman', category: 'API Testing', icon: '🚀', highlightColor: '#ff6b00' },
  { name: 'Docker', category: 'Containers', icon: '🐳', highlightColor: '#38bdf8' },
  { name: 'Figma', category: 'UI/UX Design', icon: '🎨', highlightColor: '#8b5cf6' },
  { name: 'Vercel', category: 'Cloud Deployment', icon: '▲', highlightColor: '#ffffff' },
  { name: 'Netlify', category: 'Edge Hosting', icon: '🌐', highlightColor: '#10b981' },
  { name: 'Render', category: 'Cloud Services', icon: '☁️', highlightColor: '#38bdf8' },
];

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills: SkillItem[] = SKILL_GROUPS.flatMap((g) => g.skills);
  const totalSkillsCount = allSkills.length;
  const categoriesList = ['All', ...SKILL_GROUPS.map((g) => g.category)];
  const statusList = ['All', 'Applied', 'Working With', 'Learning', 'Explored'];

  // Dynamic derived metrics
  const appliedCount = allSkills.filter((s) => s.status === 'Applied').length;
  const learningCount = allSkills.filter((s) => s.status === 'Learning' || s.status === 'Working With').length;
  const exploredCount = allSkills.filter((s) => s.status === 'Explored').length;

  // Filter skills based on category, status, and search query
  const filteredSkills = allSkills.filter((skill) => {
    const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || skill.status === selectedStatus;
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.status.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesStatus && matchesSearch;
  });

  const getStatusBadgeStyle = (status: SkillStatus) => {
    switch (status) {
      case 'Applied':
        return {
          color: '#ff8533',
          bg: 'rgba(255, 107, 0, 0.12)',
          border: 'rgba(255, 107, 0, 0.3)',
          dot: '#ff6b00',
        };
      case 'Working With':
        return {
          color: '#38bdf8',
          bg: 'rgba(56, 189, 248, 0.12)',
          border: 'rgba(56, 189, 248, 0.3)',
          dot: '#38bdf8',
        };
      case 'Learning':
        return {
          color: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.3)',
          dot: '#f59e0b',
        };
      case 'Explored':
        return {
          color: '#8b5cf6',
          bg: 'rgba(139, 92, 246, 0.12)',
          border: 'rgba(139, 92, 246, 0.3)',
          dot: '#8b5cf6',
        };
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-lg))', paddingBottom: 'var(--space-3xl)' }}>
        <Container size="lg">
          {/* ========================================================
              1. SKILLS HERO SECTION (Title + Portrait + Metrics)
             ======================================================== */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'var(--space-xl)',
              alignItems: 'center',
              marginBottom: 'var(--space-3xl)',
              position: 'relative',
            }}
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', zIndex: 2 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 107, 0, 0.4)',
                    background: 'rgba(255, 107, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(255, 107, 0, 0.25)',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>⚡</span>
                </div>
                <Badge variant="primary">TECHNICAL CAPABILITIES</Badge>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  lineHeight: 1.08,
                  textTransform: 'uppercase',
                }}
              >
                MY <span className="text-gradient-orange">SKILLS</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '560px',
                }}
              >
                Technologies, tools, and technical architectures I work with to build modern web applications, scalable backend systems, and agentic AI workflows.
              </p>

              {/* Decorative Accent Bar */}
              <div
                style={{
                  width: '56px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
                  borderRadius: '9999px',
                  boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
                }}
              />

              {/* Derived Metric Counters (Reference 5 & 12) */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  marginTop: 'var(--space-xs)',
                }}
              >
                <div
                  style={{
                    padding: '8px 14px',
                    background: 'rgba(13, 17, 26, 0.8)',
                    border: '1px solid rgba(255, 107, 0, 0.25)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#ff6b00' }}>{appliedCount}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>Applied in Production</span>
                </div>

                <div
                  style={{
                    padding: '8px 14px',
                    background: 'rgba(13, 17, 26, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#38bdf8' }}>{learningCount}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>Working With &amp; Learning</span>
                </div>

                <div
                  style={{
                    padding: '8px 14px',
                    background: 'rgba(13, 17, 26, 0.8)',
                    border: '1px solid rgba(139, 92, 246, 0.25)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#8b5cf6' }}>{totalSkillsCount}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Technologies</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Authentic Portrait with Orbital Rings (Reference 5) */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '340px',
                overflow: 'hidden',
              }}
            >
              {/* Radial Orange Glow Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 107, 0, 0.28) 0%, rgba(255, 107, 0, 0.05) 50%, transparent 70%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Concentric Orbital Rings SVG (matching reference 5) */}
              <svg
                width="380"
                height="320"
                viewBox="0 0 380 320"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                  opacity: 0.6,
                  maxWidth: '100%',
                }}
              >
                <circle cx="190" cy="160" r="145" stroke="rgba(255, 107, 0, 0.18)" strokeWidth="1" strokeDasharray="5 7" />
                <circle cx="190" cy="160" r="110" stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1.2" />
                <circle cx="190" cy="160" r="75" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 5" />

                {/* Floating particle dots */}
                <circle cx="90" cy="100" r="3" fill="#ff6b00" />
                <circle cx="285" cy="85" r="3.5" fill="#ff8533" />
                <circle cx="310" cy="190" r="2.5" fill="#38bdf8" />
                <circle cx="75" cy="210" r="3" fill="#8b5cf6" />
              </svg>

              {/* Authentic Portrait Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '350px',
                  height: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  zIndex: 1,
                }}
              >
                <Image
                  src={PROFILE_DATA.heroPortraitPath}
                  alt="Nirmal Patil — Technical Skills & Architecture"
                  width={380}
                  height={440}
                  priority
                  style={{
                    width: 'auto',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8))',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </section>

          {/* ========================================================
              2. SEARCH & FILTERING CONTROLS (Reference 5 & 12)
             ======================================================== */}
          <section
            style={{
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              marginBottom: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Top row: Search and Status Legend */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ flex: 1, minWidth: '260px', maxWidth: '420px' }}>
                <Input
                  type="text"
                  placeholder="🔍 Search technologies (e.g. Python, Node.js, Gemini...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'rgba(21, 27, 40, 0.8)',
                    borderColor: searchQuery ? '#ff6b00' : 'rgba(255, 255, 255, 0.12)',
                    boxShadow: searchQuery ? '0 0 12px rgba(255, 107, 0, 0.3)' : 'none',
                    fontSize: '13px',
                  }}
                />
              </div>

              {/* Status Filter Tabs */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {statusList.map((st) => {
                  const isActive = selectedStatus === st;
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setSelectedStatus(st)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: isActive ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.08)',
                        background: isActive ? 'rgba(255, 107, 0, 0.15)' : 'rgba(21, 27, 40, 0.6)',
                        color: isActive ? '#ff8533' : 'var(--text-secondary)',
                      }}
                    >
                      {st === 'All' ? 'All Statuses' : `● ${st}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Navigation Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {categoriesList.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '7px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      border: isActive ? '1px solid #ff6b00' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isActive ? 'rgba(255, 107, 0, 0.18)' : 'rgba(21, 27, 40, 0.5)',
                      color: isActive ? '#ffffff' : 'var(--text-muted)',
                      boxShadow: isActive ? '0 0 14px rgba(255, 107, 0, 0.25)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ========================================================
              3. SKILLS GRID (Reference 5 & 12)
             ======================================================== */}
          {filteredSkills.length === 0 ? (
            <div
              style={{
                background: 'rgba(13, 17, 26, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-3xl)',
                textAlign: 'center',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-3xl)',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔍</div>
              <p style={{ fontSize: '15px', color: '#cbd5e1' }}>
                No technologies found matching your filter criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedStatus('All');
                  setSearchQuery('');
                }}
                style={{
                  marginTop: '14px',
                  background: 'rgba(255, 107, 0, 0.15)',
                  border: '1px solid #ff6b00',
                  color: '#ff8533',
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '13px',
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <section
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                gap: 'var(--space-md)',
                marginBottom: 'var(--space-3xl)',
              }}
            >
              {filteredSkills.map((skill, idx) => {
                const statusStyle = getStatusBadgeStyle(skill.status);

                return (
                  <div
                    key={`${skill.name}-${idx}`}
                    style={{
                      background: 'rgba(13, 17, 26, 0.85)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '16px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.35)',
                      transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 107, 0, 0.4)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 107, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.35)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: 'rgba(21, 27, 40, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <TechIcon name={skill.name} icon={skill.icon} />
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {skill.name}
                        </div>
                        <div
                          style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            marginTop: '2px',
                          }}
                        >
                          {skill.category}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: statusStyle.color,
                        background: statusStyle.bg,
                        border: `1px solid ${statusStyle.border}`,
                        borderRadius: 'var(--radius-full)',
                        padding: '3px 8px',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      ● {skill.status}
                    </span>
                  </div>
                );
              })}
            </section>
          )}

          {/* ========================================================
              4. TOOLS & PLATFORMS SHOWCASE (Reference 5 & 12)
             ======================================================== */}
          <section
            style={{
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              marginBottom: 'var(--space-3xl)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-lg)' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 107, 0, 0.4)',
                  background: 'rgba(255, 107, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '16px' }}>🛠️</span>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', textTransform: 'uppercase' }}>
                DEVELOPER TOOLS &amp; PLATFORMS
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '12px',
              }}
            >
              {TOOLS_PLATFORMS.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  style={{
                    background: 'rgba(21, 27, 40, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '16px 12px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 107, 0, 0.4)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 107, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(13, 17, 26, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '4px',
                    }}
                  >
                    <TechIcon name={tool.name} icon={tool.icon} />
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>{tool.name}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{tool.category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              5. RECONSTRUCTED EDUCATION SECTION (Reference 8 & 14)
             ======================================================== */}
          <EducationSection />

          {/* ========================================================
              6. LEARNING PHILOSOPHY & EXPLORATION CTA
             ======================================================== */}
          <section
            style={{
              marginTop: 'var(--space-2xl)',
              background: 'rgba(13, 17, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.2rem, 2.5vw, 1.8rem) clamp(1.5rem, 3vw, 2.2rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 'var(--space-md)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: '280px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 107, 0, 0.15)',
                  border: '1px solid rgba(255, 107, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '20px' }}>🚀</span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.4,
                  }}
                >
                  I&apos;m constantly learning and exploring new technologies to build better products.
                </p>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  See how these skills are applied across featured systems and open-source projects.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="md" style={{ boxShadow: 'var(--shadow-glow)' }}>
                  Explore Featured Projects ➔
                </Button>
              </Link>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="md">
                  Let&apos;s Connect ✉️
                </Button>
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
