'use client';

import React from 'react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { EDUCATION_DATA } from '../../data/education';

export function EducationSection() {
  const btechItem = EDUCATION_DATA.find((e) => e.id === 'btech');
  const hscItem = EDUCATION_DATA.find((e) => e.id === 'hsc');
  const sscItem = EDUCATION_DATA.find((e) => e.id === 'ssc');

  // Verified engineering coursework based on curriculum
  const courseworkItems = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Web Technologies',
    'Software Engineering',
    'Object Oriented Programming',
    'Artificial Intelligence Basics',
  ];

  return (
    <section id="education" style={{ position: 'relative', width: '100%', padding: 'var(--space-2xl) 0' }}>
      <Container size="lg">
        {/* HEADER */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 107, 0, 0.4)',
                background: 'rgba(255, 107, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(255, 107, 0, 0.25)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#ff6b00" />
                <path d="M5 13.18V17.18C5 19.39 8.13 21.18 12 21.18C15.87 21.18 19 19.39 19 17.18V13.18L12 17.18L5 13.18Z" fill="#ff8533" />
              </svg>
            </div>
            <Badge variant="primary">ACADEMIC FOUNDATIONS</Badge>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              lineHeight: 1.15,
              textTransform: 'uppercase',
            }}
          >
            MY <span className="text-gradient-orange">EDUCATION</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.08rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '640px',
              marginTop: '8px',
            }}
          >
            Education has been the foundation of my knowledge, technical discipline, and problem-solving mindset. Here is my verified academic journey.
          </p>

          <div
            style={{
              width: '52px',
              height: '3px',
              background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
              borderRadius: '9999px',
              marginTop: '12px',
              boxShadow: '0 0 10px rgba(255, 107, 0, 0.5)',
            }}
          />
        </div>

        {/* TWO-COLUMN GRID: TIMELINE + HIGHLIGHTS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
          className="education-layout-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .education-layout-grid {
                grid-template-columns: 1.15fr 0.85fr !important;
              }
            }
            @media (max-width: 640px) {
              .edu-timeline-item {
                padding-left: 28px !important;
              }
              .edu-spine {
                left: 10px !important;
              }
              .edu-node {
                left: 2px !important;
              }
              .edu-desktop-date {
                display: none !important;
              }
              .edu-mobile-date {
                display: block !important;
              }
            }
            @media (min-width: 641px) {
              .edu-timeline-item {
                padding-left: 0 !important;
              }
              .edu-desktop-date {
                display: block !important;
              }
              .edu-mobile-date {
                display: none !important;
              }
            }
          `}</style>

          {/* LEFT: EDUCATION TIMELINE */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {/* Vertical timeline spine */}
            <div
              className="edu-spine"
              style={{
                position: 'absolute',
                left: '120px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(180deg, #ff6b00 0%, rgba(255, 107, 0, 0.3) 70%, rgba(255, 107, 0, 0.05) 100%)',
                zIndex: 0,
              }}
            />

            {EDUCATION_DATA.map((item) => {
              const isCurrent = item.id === 'btech';

              return (
                <div
                  key={item.id}
                  className="edu-timeline-item"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '105px 30px 1fr',
                    alignItems: 'flex-start',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Desktop Date Column */}
                  <div
                    className="edu-desktop-date"
                    style={{
                      textAlign: 'right',
                      paddingTop: '20px',
                      paddingRight: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: isCurrent ? '#ff8533' : 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.period.split(' — ')[0]}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: isCurrent ? '#ff6b00' : 'var(--text-muted)',
                        fontWeight: 600,
                        marginTop: '2px',
                      }}
                    >
                      {isCurrent ? 'Present' : (item.period.split(' — ')[1] || '')}
                    </div>
                    {isCurrent ? (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.15)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 7px',
                          marginTop: '6px',
                        }}
                      >
                        Pursuing
                      </span>
                    ) : (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '10px',
                          fontWeight: 600,
                          color: '#94a3b8',
                          background: 'rgba(255, 255, 255, 0.06)',
                          borderRadius: 'var(--radius-full)',
                          padding: '2px 7px',
                          marginTop: '6px',
                        }}
                      >
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Glowing Timeline Node */}
                  <div
                    className="edu-node"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingTop: '22px',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: isCurrent ? '#ff6b00' : 'var(--bg-primary)',
                        border: '3px solid #ff6b00',
                        boxShadow: isCurrent
                          ? '0 0 16px #ff6b00, 0 0 24px rgba(255, 107, 0, 0.5)'
                          : '0 0 10px rgba(255, 107, 0, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isCurrent && (
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ffffff' }} />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      background: 'rgba(13, 17, 26, 0.85)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: isCurrent
                        ? '1px solid rgba(255, 107, 0, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-xl)',
                      padding: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                      boxShadow: isCurrent
                        ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 107, 0, 0.1)'
                        : '0 6px 20px rgba(0, 0, 0, 0.35)',
                    }}
                  >
                    {/* Mobile Date tag */}
                    <div
                      className="edu-mobile-date"
                      style={{
                        marginBottom: '8px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: isCurrent ? '#ff8533' : 'var(--text-muted)',
                      }}
                    >
                      🗓 {item.period} • {isCurrent ? 'Pursuing' : 'Completed'}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      <div>
                        <h3
                          style={{
                            fontSize: 'clamp(1.15rem, 2vw, 1.3rem)',
                            fontWeight: 800,
                            color: '#ffffff',
                            lineHeight: 1.25,
                          }}
                        >
                          {item.degree}
                        </h3>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#38bdf8', marginTop: '2px' }}>
                          {item.fieldOfStudy}
                        </div>
                      </div>

                      {/* Performance Score Badge */}
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: '#ff6b00',
                          background: 'rgba(255, 107, 0, 0.12)',
                          border: '1px solid rgba(255, 107, 0, 0.3)',
                          borderRadius: 'var(--radius-full)',
                          padding: '4px 12px',
                          boxShadow: '0 0 10px rgba(255, 107, 0, 0.15)',
                        }}
                      >
                        {item.result}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                      🏛️ <strong>{item.institution}</strong>
                      <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>📍 {item.location}</span>
                    </div>

                    {item.highlights && (
                      <p
                        style={{
                          fontSize: '12px',
                          color: '#94a3b8',
                          lineHeight: 1.5,
                          paddingTop: '8px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                      >
                        💡 {item.highlights}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: ACADEMIC HIGHLIGHTS & COURSEWORK */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', position: 'sticky', top: '90px' }}>
            {/* Card 1: ACADEMICS AT A GLANCE */}
            <div
              style={{
                background: 'rgba(13, 17, 26, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px' }}>📊</span>
                <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', textTransform: 'uppercase' }}>
                  ACADEMICS AT A GLANCE
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  textAlign: 'center',
                }}
              >
                <div style={{ padding: '10px 4px', background: 'rgba(21, 27, 40, 0.6)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: '#ff6b00' }}>
                    {btechItem?.result.replace('CGPA: ', '') || '7.21'}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                    B.Tech CGPA
                  </div>
                </div>

                <div style={{ padding: '10px 4px', background: 'rgba(21, 27, 40, 0.6)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#38bdf8' }}>
                    {hscItem?.result.replace('Percentage: ', '') || '84.17%'}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                    HSC (XII)
                  </div>
                </div>

                <div style={{ padding: '10px 4px', background: 'rgba(21, 27, 40, 0.6)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '20px', fontWeight: 900, color: '#10b981' }}>
                    {sscItem?.result.replace('Percentage: ', '') || '93.00%'}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                    SSC (X)
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '12px',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  padding: '10px 12px',
                  background: 'rgba(255, 107, 0, 0.05)',
                  border: '1px solid rgba(255, 107, 0, 0.15)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                🎯 Consistent academic track record with strong focus on computer science engineering fundamentals and software engineering practices.
              </div>
            </div>

            {/* Card 2: CORE COURSEWORK */}
            <div
              style={{
                background: 'rgba(13, 17, 26, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ fontSize: '18px' }}>📚</span>
                <span style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.06em', color: '#ffffff', textTransform: 'uppercase' }}>
                  CORE COURSEWORK HIGHLIGHTS
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {courseworkItems.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      background: 'rgba(21, 27, 40, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    • {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: ACADEMIC PHILOSOPHY */}
            <div
              style={{
                background: 'rgba(13, 17, 26, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 0, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'rgba(255, 107, 0, 0.4)',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '2px',
                }}
              >
                “
              </div>
              <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#f1f5f9', lineHeight: 1.6, marginBottom: '10px' }}>
                Education is not just about learning concepts, it&apos;s about building the mindset to solve problems, adapt to new paradigms, and create meaningful impact.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ height: '2px', width: '32px', background: 'linear-gradient(90deg, #ff6b00, transparent)' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#ff8533' }}>— Nirmal Patil</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
