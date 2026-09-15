'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { PROJECTS_DATA, ProjectData } from '../../data/projects';

type FilterCategory = 'All Projects' | 'Featured' | 'Web Apps' | 'AI / ML' | 'Full Stack' | 'Other';

const FILTER_CATEGORIES: FilterCategory[] = [
  'All Projects',
  'Featured',
  'Web Apps',
  'AI / ML',
  'Full Stack',
  'Other',
];

interface ProjectMeta {
  domain: string;
  categoryLabel: string;
  icon: string;
  accentColor: string;
  gradient: string;
}

const PROJECT_META: Record<string, ProjectMeta> = {
  'path-pilot': {
    domain: 'path-pilot.app',
    categoryLabel: 'AI & Career',
    icon: '🧭',
    accentColor: '#ff6b00',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 0, 0.25) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'virat-plast': {
    domain: 'virat-plast.vercel.app',
    categoryLabel: 'B2B & Web',
    icon: '🏭',
    accentColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.22) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'job-hub': {
    domain: 'jobhub.vercel.app',
    categoryLabel: 'Full Stack',
    icon: '💼',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'bizhub': {
    domain: 'bizhub-learn.org',
    categoryLabel: 'AI & EdTech',
    icon: '🎓',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.22) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'swachha-nagar-nigam': {
    domain: 'swachha-nagar.org',
    categoryLabel: 'Civic Tech',
    icon: '🌱',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'cinemood': {
    domain: 'cinemood.app',
    categoryLabel: 'Media & Web',
    icon: '🎬',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'stock-analysis': {
    domain: 'stock-pulse.io',
    categoryLabel: 'Full Stack',
    icon: '📈',
    accentColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'agentic-ai-systems': {
    domain: 'agentic-ai.io',
    categoryLabel: 'Autonomous AI',
    icon: '🤖',
    accentColor: '#ff6b00',
    gradient: 'linear-gradient(135deg, rgba(255, 107, 0, 0.3) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'blog-backend': {
    domain: 'api.blog-service.io',
    categoryLabel: 'Backend API',
    icon: '⚡',
    accentColor: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'data-analytics': {
    domain: 'analytics-lab.py',
    categoryLabel: 'Data & Analytics',
    icon: '📊',
    accentColor: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'my-resume-website': {
    domain: 'resume-web.v1',
    categoryLabel: 'Web Portfolio',
    icon: '📄',
    accentColor: '#94a3b8',
    gradient: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'html-portfolio': {
    domain: 'portfolio-v1.dev',
    categoryLabel: 'Archive & Learn',
    icon: '🎨',
    accentColor: '#94a3b8',
    gradient: 'linear-gradient(135deg, rgba(148, 163, 184, 0.15) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'finance-tracker': {
    domain: 'finance-tracker.app',
    categoryLabel: 'Web App',
    icon: '💳',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'tic-tac-toe': {
    domain: 'tictactoe-game.js',
    categoryLabel: 'Game & Logic',
    icon: '🎮',
    accentColor: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
  'snake-game': {
    domain: 'snake-arcade.js',
    categoryLabel: 'Game & Logic',
    icon: '🐍',
    accentColor: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(13, 17, 26, 0.95) 100%)',
  },
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All Projects');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Featured') return project.featured;
    if (activeFilter === 'Web Apps') {
      return ['path-pilot', 'virat-plast', 'job-hub', 'cinemood', 'swachha-nagar-nigam', 'blog-backend', 'my-resume-website', 'html-portfolio', 'finance-tracker'].includes(project.id);
    }
    if (activeFilter === 'AI / ML') {
      return ['path-pilot', 'bizhub', 'agentic-ai-systems', 'data-analytics'].includes(project.id);
    }
    if (activeFilter === 'Full Stack') {
      return ['path-pilot', 'virat-plast', 'job-hub', 'stock-analysis', 'blog-backend'].includes(project.id);
    }
    if (activeFilter === 'Other') {
      return ['data-analytics', 'tic-tac-toe', 'snake-game', 'my-resume-website', 'html-portfolio'].includes(project.id);
    }
    return true;
  });

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingBottom: 'var(--space-3xl)' }}>
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(400px, 60vw, 900px)',
          height: 'clamp(300px, 30vw, 500px)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255, 107, 0, 0.16) 0%, rgba(255, 107, 0, 0.03) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* HEADER SECTION MATCHING REFERENCE B */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 107, 0, 0.1)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.875rem',
              boxShadow: '0 0 14px rgba(255, 107, 0, 0.15)',
            }}
          >
            <span>🚀</span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '0.75rem',
            }}
          >
            PRO<span style={{ color: 'var(--primary)' }}>JECTS</span>
          </h1>

          {/* Orange Underline */}
          <div
            style={{
              width: '64px',
              height: '4px',
              borderRadius: '2px',
              background: 'linear-gradient(90deg, #ff6b00 0%, #ff8533 100%)',
              boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
              marginBottom: '1rem',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.25vw, 1.1rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            A curated showcase of real-world web applications, AI systems, B2B platforms, and full-stack software built by Nirmal Patil.
          </p>
        </div>

        {/* SEGMENTED FILTER PILLS */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 3.5vw, 3rem)',
          }}
        >
          {FILTER_CATEGORIES.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                style={{
                  cursor: 'pointer',
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(255, 107, 0, 0.3) 0%, rgba(255, 107, 0, 0.15) 100%)'
                    : 'rgba(13, 17, 26, 0.7)',
                  border: isActive ? '1px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: isActive ? '0 0 16px rgba(255, 107, 0, 0.3)' : 'none',
                  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                }}
              >
                {filter === 'Featured' ? '⭐ Featured' : filter}
              </button>
            );
          })}
        </div>

        {/* 3-COLUMN PROJECTS GRID MATCHING REFERENCE B */}
        <div className="projects-grid-3col">
          {filteredProjects.map((project: ProjectData) => {
            const meta = PROJECT_META[project.id] || {
              domain: `${project.slug}.dev`,
              categoryLabel: project.category,
              icon: '💻',
              accentColor: '#ff6b00',
              gradient: 'linear-gradient(135deg, rgba(255, 107, 0, 0.2) 0%, rgba(13, 17, 26, 0.95) 100%)',
            };

            return (
              <div
                key={project.id}
                className="project-card-container"
              >
                {/* TOP BROWSER / THUMBNAIL MOCKUP AREA */}
                <div className="project-thumb-wrapper">
                  {/* Browser Mockup Chrome Bar */}
                  <div
                    style={{
                      height: '28px',
                      background: 'rgba(7, 9, 14, 0.85)',
                      backdropFilter: 'blur(8px)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 10px',
                      zIndex: 3,
                      position: 'relative',
                    }}
                  >
                    {/* Window Controls (Red, Yellow, Green) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', opacity: 0.8 }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', opacity: 0.8 }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', opacity: 0.8 }} />
                    </div>

                    {/* Domain Name Pill */}
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '1px 10px',
                        borderRadius: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.02em',
                        maxWidth: '180px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {meta.domain}
                    </div>

                    {/* Status Dot */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: project.status === 'Completed' ? '#10b981' : 'var(--primary)',
                          boxShadow: `0 0 6px ${project.status === 'Completed' ? '#10b981' : 'var(--primary)'}`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Visual Canvas / Hero Mockup Inside Card */}
                  <div
                    style={{
                      position: 'relative',
                      height: 'calc(100% - 28px)',
                      background: meta.gradient,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Background Grid Lines / Tech Pattern */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                        opacity: 0.35,
                      }}
                    />

                    {/* Center Icon with Glowing Ring */}
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(13, 17, 26, 0.85)',
                        border: `1.5px solid ${meta.accentColor}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        boxShadow: `0 0 20px ${meta.accentColor}40`,
                        position: 'relative',
                        zIndex: 2,
                        transition: 'transform 300ms ease',
                      }}
                    >
                      {meta.icon}
                    </div>

                    {/* Category Label Pill floating top left */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '8px',
                        left: '8px',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        background: 'rgba(13, 17, 26, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: meta.accentColor,
                        zIndex: 3,
                      }}
                    >
                      {meta.categoryLabel}
                    </div>

                    {/* Featured Badge floating top right */}
                    {project.featured && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 107, 0, 0.2)',
                          border: '1px solid var(--primary)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          boxShadow: '0 0 10px rgba(255, 107, 0, 0.4)',
                          zIndex: 3,
                        }}
                      >
                        ⭐ Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* CARD BODY CONTENT */}
                <div
                  style={{
                    padding: 'clamp(1rem, 2vw, 1.35rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    gap: '0.65rem',
                  }}
                >
                  {/* Status & Category Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {project.status}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600 }}>
                      {project.role.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.15rem, 1.6vw, 1.3rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle / Tagline */}
                  {project.subtitle && (
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.subtitle}
                    </div>
                  )}

                  {/* Description One-Liner */}
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      margin: 0,
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.oneLiner}
                  </p>

                  {/* Tech Stack Badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginTop: '0.35rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(21, 27, 40, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          fontSize: '0.7rem',
                          color: 'var(--text-secondary)',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span
                        style={{
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'rgba(255, 107, 0, 0.1)',
                          border: '1px solid rgba(255, 107, 0, 0.25)',
                          fontSize: '0.7rem',
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* ACTION FOOTER BUTTONS */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      marginTop: 'auto',
                    }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      style={{ textDecoration: 'none', flex: 1 }}
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        fullWidth
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          borderRadius: 'var(--radius-md)',
                        }}
                      >
                        View Project →
                      </Button>
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          style={{
                            fontSize: '0.8rem',
                            padding: '6px 10px',
                            minHeight: '36px',
                          }}
                        >
                          🐙
                        </Button>
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="primary"
                          size="sm"
                          style={{
                            fontSize: '0.8rem',
                            padding: '6px 10px',
                            minHeight: '36px',
                          }}
                        >
                          🚀
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            background: 'linear-gradient(135deg, rgba(21, 27, 40, 0.9) 0%, rgba(13, 17, 26, 0.95) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-orange)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 107, 0, 0.15)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Have a project in mind or looking for an <span className="text-gradient-orange">intern?</span>
          </h3>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            I am always eager to contribute to innovative teams, build high-performance web products, and explore cutting-edge AI architectures.
          </p>

          <div
            className="responsive-btn-group"
            style={{
              display: 'flex',
              gap: 'var(--space-md)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '0.5rem',
            }}
          >
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button variant="primary" size="md" style={{ boxShadow: 'var(--shadow-glow)' }}>
                Get In Touch →
              </Button>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="md">
                Learn About Me →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
