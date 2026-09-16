'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { submitContactForm } from '../../lib/api/contact';
import { ContactFormInput } from '@nirmal/validation';
import { PROFILE_DATA } from '../../data/profile';
import { SOCIAL_LINKS, SocialLink } from '../../data/social';

// =============================================================================
// TYPES & CONSTANTS
// =============================================================================
interface InquiryType {
  id: string;
  label: string;
  subject: string;
  icon: string;
}

const INQUIRY_TYPES: InquiryType[] = [
  { id: 'dev-role', label: 'Software Developer Role', subject: 'Opportunity: Software Developer Role', icon: '💼' },
  { id: 'fullstack', label: 'Full-Stack Web Project', subject: 'Project Inquiry: Full-Stack Web Development', icon: '⚡' },
  { id: 'agentic-ai', label: 'AI & Agentic Systems', subject: 'Collaboration: AI & Agentic Workflows', icon: '🤖' },
  { id: 'collab', label: 'Technical Discussion', subject: 'Inquiry: Technical Discussion / Collaboration', icon: '💬' },
];

const COLLABORATION_AREAS = [
  {
    id: 'full-stack',
    title: 'Full-Stack Web Applications',
    icon: '⚡',
    tag: 'Web & Product',
    description: 'Modern, reactive web applications built with TypeScript, Next.js, React, and modular glassmorphism design systems.',
    points: ['Next.js & React architectures', 'TypeScript type-safety', 'Responsive glassmorphism UI', 'Clean state & component hierarchy'],
  },
  {
    id: 'backend',
    title: 'Backend Architecture & APIs',
    icon: '⚙️',
    tag: 'APIs & Services',
    description: 'Robust server-side logic and RESTful services with Node.js, Express, structured databases, and scalable integration endpoints.',
    points: ['RESTful API endpoint design', 'Database modeling & queries', 'Node.js & Express services', 'Authentication & validation logic'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Workflows',
    icon: '🧠',
    tag: 'Emerging Systems',
    description: 'Multi-agent workflows, autonomous developer systems, structured LLM prompt pipelines, and intelligent problem-solving tools.',
    points: ['Multi-agent pipeline design', 'Autonomous tool calling', 'Structured prompt workflows', 'AI-assisted development'],
  },
  {
    id: 'data-systems',
    title: 'Data Analytics & Automation',
    icon: '📊',
    tag: 'Data & Automation',
    description: 'Data exploration, analytical scripting, automated pipelines, and structured processing using Python and analytical libraries.',
    points: ['Python & Pandas analytics', 'Exploratory data analysis', 'Workflow automation scripts', 'Structured metrics evaluation'],
  },
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'tech-stack',
    question: 'What technologies and frameworks do you specialize in?',
    answer: 'I focus on full-stack web and software engineering with TypeScript, Next.js, React, Node.js, and Express.js, along with Python for data analytics and agentic AI systems. I also build clean design systems with modern CSS, glassmorphism, and responsive UI components.',
  },
  {
    id: 'current-role',
    question: 'What is your current professional role?',
    answer: `I am currently an SDE / Software Developer Intern at ${PROFILE_DATA.currentOrganization} (${PROFILE_DATA.rolePeriod}), contributing remotely to fintech loan origination systems (LOS intake and staff applications).`,
  },
  {
    id: 'availability',
    question: 'Are you open to new software developer roles or collaborations?',
    answer: 'Yes, I am actively open to software engineering opportunities, full-stack developer roles, and technical project collaborations where I can contribute scalable code and learn through building.',
  },
  {
    id: 'location-comm',
    question: 'Where are you based and how can we connect?',
    answer: `I am based in ${PROFILE_DATA.location}, working remotely for a Pune-based software company. You can connect with me directly via email at ${PROFILE_DATA.contactEmail}, phone/WhatsApp at ${PROFILE_DATA.contactPhone}, or LinkedIn.`,
  },
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export function ContactSection() {
  // Form State
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

  // Copy State
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Social category filter
  const [activeSocialTab, setActiveSocialTab] = useState<'all' | 'primary' | 'developer' | 'social'>('all');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>('tech-stack');

  // Copy Handler
  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  // Inquiry Pill Selection
  const handleSelectInquiry = (inquiry: InquiryType) => {
    if (selectedInquiry === inquiry.id) {
      setSelectedInquiry(null);
      setFormData((prev) => ({ ...prev, subject: '' }));
    } else {
      setSelectedInquiry(inquiry.id);
      setFormData((prev) => ({ ...prev, subject: inquiry.subject }));
      if (fieldErrors.subject) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next.subject;
          return next;
        });
      }
    }
  };

  // Input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'subject') {
      setSelectedInquiry(null);
    }
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validation
  const validateClientSide = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Please enter your name (minimum 2 characters)';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
    if (!formData.subject || formData.subject.trim().length < 3) {
      errors.subject = 'Please specify a subject (minimum 3 characters)';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    if (!validateClientSide()) {
      return;
    }

    setLoading(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        setSuccessMessage(response.data.message || 'Thank you! Your message was submitted successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSelectedInquiry(null);
        setFieldErrors({});
      } else {
        if (response.error.code === 'VALIDATION_ERROR' && Array.isArray(response.error.details)) {
          const apiErrors: Record<string, string> = {};
          (response.error.details as Array<{ field: string; message: string }>).forEach((err) => {
            apiErrors[err.field] = err.message;
          });
          setFieldErrors(apiErrors);
        } else {
          setServerError(response.error.message || 'Unable to submit your message right now.');
        }
      }
    } catch {
      setServerError('Failed to connect to the backend server. Please reach out directly via email or LinkedIn below.');
    } finally {
      setLoading(false);
    }
  };

  // Social filter
  const filteredSocials: SocialLink[] =
    activeSocialTab === 'all'
      ? SOCIAL_LINKS
      : SOCIAL_LINKS.filter((item) => item.category === activeSocialTab);

  // Mailto fallback link with prefilled values
  const mailtoHref = `mailto:${PROFILE_DATA.contactEmail}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(formData.message || 'Hello Nirmal,')}`;

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* ========================================================================= */}
      {/* AMBIENT BACKGROUND GLOW & DECORATIVE FLARE                                */}
      {/* ========================================================================= */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.12) 0%, rgba(255, 107, 0, 0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '400px',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
        {/* ======================================================================= */}
        {/* SECTION 1 — CINEMATIC CONTACT HERO                                      */}
        {/* ======================================================================= */}
        <header
          style={{
            paddingTop: 'var(--space-xl)',
            paddingBottom: 'var(--space-2xl)',
            position: 'relative',
          }}
        >
          {/* Subtle World Map / Network Grid Graphic (Inspired by Ref UI 21) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '10px',
              right: '2%',
              width: '420px',
              height: '240px',
              opacity: 0.18,
              pointerEvents: 'none',
              display: 'none',
            }}
            className="contact-network-bg"
          >
            <svg width="100%" height="100%" viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 180 Q 140 60, 260 120 T 380 90" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M80 200 Q 180 110, 310 140 T 410 70" stroke="#ff6b00" strokeWidth="1" strokeDasharray="3 3" fill="none" />
              <circle cx="40" cy="180" r="4" fill="#ff6b00" />
              <circle cx="140" cy="80" r="3" fill="#ffaa40" />
              <circle cx="260" cy="120" r="5" fill="#ff6b00" />
              <circle cx="380" cy="90" r="4" fill="#ff6b00" />
              <circle cx="310" cy="140" r="3" fill="#ffaa40" />
            </svg>
          </div>

          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 107, 0, 0.08)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              marginBottom: 'var(--space-md)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 8px var(--primary)',
              }}
            />
            <span
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
              }}
            >
              LET&apos;S CONNECT
            </span>
            <span style={{ fontSize: '13px', opacity: 0.9 }}>✈️</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-md)',
              maxWidth: '920px',
            }}
          >
            LET&apos;S BUILD{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ff6b00 0%, #ff9e40 50%, #ffc078 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              SOMETHING GREAT.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              marginBottom: 'var(--space-lg)',
            }}
          >
            Connect with Nirmal Patil for software engineering opportunities, full-stack web projects,
            or AI system collaborations. Send a direct validated message, copy verified channels, or access official credentials.
          </p>

          {/* Top Quick Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={PROFILE_DATA.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="secondary" size="md" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>📄</span>
                <span>View Resume</span>
                <span style={{ opacity: 0.7 }}>↗</span>
              </Button>
            </a>
            <a
              href={PROFILE_DATA.resumePdfPath}
              download="Nirmal_Patil_Resume.pdf"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="ghost" size="md" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>📥</span>
                <span>Download Resume</span>
              </Button>
            </a>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
              <span>{PROFILE_DATA.workArrangement}</span>
            </div>
          </div>
        </header>

        {/* ======================================================================= */}
        {/* SECTION 2 & 3 & 4 — TWO-COLUMN MAIN WORKSPACE                           */}
        {/* ======================================================================= */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'start',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {/* --------------------------------------------------------------------- */}
          {/* LEFT COLUMN: DIRECT CONTACT CARDS + STATUS + RESUME                  */}
          {/* --------------------------------------------------------------------- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Section Header */}
            <div>
              <div
                style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2xs)',
                }}
              >
                DIRECT CHANNELS
              </div>
              <h2
                style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                Verified Contact Information
              </h2>
            </div>

            {/* 4 DIRECT CARDS GRID (Inspired by Ref UI 21) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-md)',
              }}
            >
              {/* EMAIL CARD */}
              <div
                className="contact-card-premium"
                style={{
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 107, 0, 0.1)',
                      border: '1px solid rgba(255, 107, 0, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    ✉️
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE_DATA.contactEmail, 'email')}
                    aria-label="Copy email address to clipboard"
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: copiedEmail ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      border: copiedEmail ? '1px solid var(--success)' : '1px solid var(--border-default)',
                      color: copiedEmail ? 'var(--success)' : 'var(--text-muted)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{copiedEmail ? '✓' : '📋'}</span>
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Address
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      wordBreak: 'break-all',
                      marginTop: '2px',
                    }}
                  >
                    {PROFILE_DATA.contactEmail}
                  </div>
                </div>

                <a
                  href={`mailto:${PROFILE_DATA.contactEmail}`}
                  style={{
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto',
                    paddingTop: '6px',
                  }}
                >
                  <span>Send Mail Directly</span>
                  <span>↗</span>
                </a>
              </div>

              {/* WHATSAPP / PHONE CARD */}
              <div
                className="contact-card-premium"
                style={{
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    💬
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE_DATA.contactPhone, 'phone')}
                    aria-label="Copy phone number to clipboard"
                    style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: copiedPhone ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                      border: copiedPhone ? '1px solid var(--success)' : '1px solid var(--border-default)',
                      color: copiedPhone ? 'var(--success)' : 'var(--text-muted)',
                      fontSize: '11px',
                      fontWeight: 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{copiedPhone ? '✓' : '📋'}</span>
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phone / WhatsApp
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      marginTop: '2px',
                    }}
                  >
                    {PROFILE_DATA.contactPhone}
                  </div>
                </div>

                <a
                  href={`tel:${PROFILE_DATA.contactPhone.replace(/\s+/g, '')}`}
                  style={{
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--success)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto',
                    paddingTop: '6px',
                  }}
                >
                  <span>Call or WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>

              {/* LINKEDIN CARD */}
              <div
                className="contact-card-premium"
                style={{
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(10, 102, 194, 0.15)',
                      border: '1px solid rgba(10, 102, 194, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    💼
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#0a66c2',
                      background: 'rgba(10, 102, 194, 0.1)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                    }}
                  >
                    Professional
                  </span>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    LinkedIn Network
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      marginTop: '2px',
                    }}
                  >
                    patilnirmal
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/patilnirmal?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: '#60a5fa',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto',
                    paddingTop: '6px',
                  }}
                >
                  <span>Connect on LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>

              {/* GITHUB CARD */}
              <div
                className="contact-card-premium"
                style={{
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    🐙
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                    }}
                  >
                    Code &amp; Repos
                  </span>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    GitHub Organization
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      marginTop: '2px',
                    }}
                  >
                    nirmalpatil132
                  </div>
                </div>

                <a
                  href="https://github.com/nirmalpatil132"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto',
                    paddingTop: '6px',
                  }}
                >
                  <span>Explore Repositories</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* AVAILABILITY & CURRENT ROLE CARD (Ref UI 21 & 22) */}
            <div
              style={{
                padding: 'var(--space-lg)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 107, 0, 0.2)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>🕒</span>
                  <span
                    style={{
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    CURRENT PROFESSIONAL STATUS
                  </span>
                </div>
                {PROFILE_DATA.openToOpportunities && (
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--success)',
                      background: 'rgba(34, 197, 94, 0.12)',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--success)',
                        boxShadow: '0 0 6px var(--success)',
                      }}
                    />
                    Open to Opportunities
                  </span>
                )}
              </div>

              {/* Status breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--primary)', marginTop: '2px' }}>💼</span>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Current Role</div>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
                      {PROFILE_DATA.currentRole}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {PROFILE_DATA.currentOrganization} ({PROFILE_DATA.rolePeriod})
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '2px' }}>📍</span>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Location &amp; Work Model</div>
                    <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                      {PROFILE_DATA.location}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      {PROFILE_DATA.workArrangement}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Resume Access */}
              <div
                style={{
                  marginTop: 'var(--space-md)',
                  paddingTop: 'var(--space-sm)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Verified Resume &amp; Academic Credentials
                </span>
                <a
                  href={PROFILE_DATA.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>Open PDF Document</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: SEND A MESSAGE (PRODUCTION GLASS FORM)                  */}
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(20, 20, 24, 0.65)',
              border: '1px solid rgba(255, 107, 0, 0.25)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 107, 0, 0.05)',
              backdropFilter: 'blur(16px)',
              position: 'relative',
            }}
          >
            {/* Form Header */}
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '18px', color: 'var(--primary)' }}>✏️</span>
                <h2
                  style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Send Me a Message
                </h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Fill out the inquiry form below. Messages are validated and processed directly.
              </p>
            </div>

            {/* Real Success Alert */}
            {successMessage && (
              <div
                role="status"
                style={{
                  padding: 'var(--space-md)',
                  background: 'rgba(34, 197, 94, 0.12)',
                  color: 'var(--success)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  marginBottom: 'var(--space-md)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '18px' }}>✅</span>
                <div>
                  <div style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: '2px' }}>Message Received</div>
                  <div>{successMessage}</div>
                </div>
              </div>
            )}

            {/* Server / Network Error Alert with Direct Mailto Option */}
            {serverError && (
              <div
                role="alert"
                style={{
                  padding: 'var(--space-md)',
                  background: 'rgba(239, 68, 68, 0.1)',
                  color: '#fca5a5',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  marginBottom: 'var(--space-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>⚠️</span>
                  <div>
                    <div style={{ fontWeight: 'var(--font-weight-bold)', color: '#f87171' }}>Submission Notice</div>
                    <div>{serverError}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px', flexWrap: 'wrap' }}>
                  <a
                    href={mailtoHref}
                    style={{
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: '#ffffff',
                      background: 'rgba(255, 107, 0, 0.8)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Open in Email Client</span>
                    <span>✉️</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/patilnirmal"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <span>Reach via LinkedIn</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Quick Inquiry Pills */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-secondary)',
                    marginBottom: '8px',
                  }}
                >
                  Quick Inquiry Topic (Optional):
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {INQUIRY_TYPES.map((inq) => {
                    const isSelected = selectedInquiry === inq.id;
                    return (
                      <button
                        key={inq.id}
                        type="button"
                        onClick={() => handleSelectInquiry(inq)}
                        aria-pressed={isSelected}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-full)',
                          background: isSelected ? 'rgba(255, 107, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          border: isSelected ? '1px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          fontSize: '12px',
                          fontWeight: isSelected ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 0 12px rgba(255, 107, 0, 0.25)' : 'none',
                        }}
                      >
                        <span>{inq.icon}</span>
                        <span>{inq.label}</span>
                        {isSelected && <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email 2-col on wider displays */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      disabled={loading}
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: fieldErrors.name ? '1px solid var(--error)' : '1px solid rgba(255, 255, 255, 0.12)',
                        color: 'var(--text-primary)',
                        fontSize: 'var(--font-size-sm)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      className="contact-input-field"
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '14px',
                        opacity: 0.5,
                        pointerEvents: 'none',
                      }}
                    >
                      👤
                    </span>
                  </div>
                  {fieldErrors.name && (
                    <span id="name-error" style={{ display: 'block', fontSize: '11px', color: 'var(--error)', marginTop: '4px' }}>
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '12px',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-secondary)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Email <span style={{ color: 'var(--primary)' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      disabled={loading}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 38px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: fieldErrors.email ? '1px solid var(--error)' : '1px solid rgba(255, 255, 255, 0.12)',
                        color: 'var(--text-primary)',
                        fontSize: 'var(--font-size-sm)',
                        outline: 'none',
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      className="contact-input-field"
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '14px',
                        opacity: 0.5,
                        pointerEvents: 'none',
                      }}
                    >
                      📧
                    </span>
                  </div>
                  {fieldErrors.email && (
                    <span id="email-error" style={{ display: 'block', fontSize: '11px', color: 'var(--error)', marginTop: '4px' }}>
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  Subject / Topic <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Opportunity: Software Developer Position"
                    disabled={loading}
                    aria-invalid={!!fieldErrors.subject}
                    aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '12px 14px 12px 38px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: fieldErrors.subject ? '1px solid var(--error)' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--font-size-sm)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    className="contact-input-field"
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '14px',
                      opacity: 0.5,
                      pointerEvents: 'none',
                    }}
                  >
                    🏷️
                  </span>
                </div>
                {fieldErrors.subject && (
                  <span id="subject-error" style={{ display: 'block', fontSize: '11px', color: 'var(--error)', marginTop: '4px' }}>
                    {fieldErrors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-secondary)',
                    marginBottom: '6px',
                  }}
                >
                  Your Message <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your opportunity, project specifications, or collaboration thoughts..."
                    disabled={loading}
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: fieldErrors.message ? '1px solid var(--error)' : '1px solid rgba(255, 255, 255, 0.12)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--font-size-sm)',
                      lineHeight: 1.6,
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '110px',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    className="contact-input-field"
                  />
                </div>
                {fieldErrors.message && (
                  <span id="message-error" style={{ display: 'block', fontSize: '11px', color: 'var(--error)', marginTop: '4px' }}>
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #ff6b00 0%, #ff8533 100%)',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: 'var(--font-size-md)',
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '0.02em',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 16px rgba(255, 107, 0, 0.35)',
                  transition: 'all 0.25s ease',
                }}
                className="contact-submit-btn"
              >
                {loading ? (
                  <>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTopColor: '#ffffff',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                      }}
                    />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span style={{ fontSize: '16px' }}>✈️</span>
                  </>
                )}
              </button>

              {/* Footer reassurance */}
              <div
                style={{
                  marginTop: 'var(--space-sm)',
                  textAlign: 'center',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <span>🔒</span>
                <span>Direct submission. You can also reach me directly at {PROFILE_DATA.contactEmail}</span>
              </div>
            </form>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 5 — COLLABORATION CONTEXT / WHAT WE CAN DISCUSS                 */}
        {/* ======================================================================= */}
        <section style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-xl) auto' }}>
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2xs)',
              }}
            >
              TECHNICAL AREAS
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              What We Can Collaborate On
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Key technical domains based on verified experience in web engineering, backend systems, and AI workflows.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {COLLABORATION_AREAS.map((area) => (
              <div
                key={area.id}
                style={{
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-sm)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                className="collab-focus-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 107, 0, 0.08)',
                      border: '1px solid rgba(255, 107, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    {area.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {area.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'var(--font-size-md)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--text-primary)',
                    marginTop: '4px',
                  }}
                >
                  {area.title}
                </h3>

                <p
                  style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: '0',
                  }}
                >
                  {area.description}
                </p>

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: 'var(--space-sm)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {area.points.map((pt, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span style={{ color: 'var(--primary)', fontSize: '9px' }}>◆</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 6 — FREQUENTLY ASKED QUESTIONS (Ref UI 20 & 22)                  */}
        {/* ======================================================================= */}
        <section style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-xl) auto' }}>
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2xs)',
              }}
            >
              FREQUENT INQUIRIES
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Quick answers regarding availability, technical focus, and collaboration models.
            </p>
          </div>

          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-sm)',
            }}
          >
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  style={{
                    borderRadius: 'var(--radius-md)',
                    background: isOpen ? 'rgba(255, 107, 0, 0.03)' : 'rgba(255, 255, 255, 0.02)',
                    border: isOpen ? '1px solid rgba(255, 107, 0, 0.25)' : '1px solid rgba(255, 255, 255, 0.06)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '12px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--primary)', fontSize: '14px' }}>❓</span>
                      <span>{faq.question}</span>
                    </span>
                    <span
                      style={{
                        fontSize: '18px',
                        color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 18px 46px',
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 7 — VERIFIED DIGITAL PRESENCE & SOCIAL CONNECTION GRID           */}
        {/* ======================================================================= */}
        <section style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto var(--space-xl) auto' }}>
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-2xs)',
              }}
            >
              ONLINE NETWORKS
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-xs)',
              }}
            >
              Digital Presence &amp; Developer Profiles
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Explore verified repositories, problem-solving handles, UI portfolios, and social profiles.
            </p>

            {/* Filter Pills */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                marginTop: 'var(--space-md)',
              }}
            >
              {[
                { id: 'all', label: 'All Profiles' },
                { id: 'primary', label: 'Primary' },
                { id: 'developer', label: 'Developer & Portfolios' },
                { id: 'social', label: 'Social' },
              ].map((tab) => {
                const isActive = activeSocialTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveSocialTab(tab.id as typeof activeSocialTab)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: isActive ? 'var(--primary)' : 'transparent',
                      border: 'none',
                      color: isActive ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '11px',
                      fontWeight: isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {filteredSocials.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
                className="social-profile-card"
              >
                <div
                  style={{
                    padding: 'var(--space-md)',
                    borderRadius: 'var(--radius-lg)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                      }}
                    >
                      {link.icon || '🔗'}
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                        {link.platform}
                      </div>
                      {link.username && (
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                          @{link.username}
                        </div>
                      )}
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '12px',
                      color: 'var(--primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '2px',
                    }}
                  >
                    <span>Visit</span>
                    <span>↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 8 — CLOSING PHILOSOPHY STATEMENT                                */}
        {/* ======================================================================= */}
        <section style={{ marginBottom: 'var(--space-3xl)' }}>
          <div
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'radial-gradient(ellipse at center, rgba(255, 107, 0, 0.06) 0%, rgba(20, 20, 24, 0.4) 100%)',
              border: '1px solid rgba(255, 107, 0, 0.2)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                margin: '0 auto var(--space-md) auto',
                borderRadius: '50%',
                background: 'rgba(255, 107, 0, 0.12)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}
            >
              💡
            </div>

            <div
              style={{
                fontSize: '11px',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--primary)',
                marginBottom: 'var(--space-xs)',
              }}
            >
              ENGINEERING PHILOSOPHY
            </div>

            <blockquote
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.5,
                color: 'var(--text-primary)',
                maxWidth: '740px',
                margin: '0 auto var(--space-md) auto',
                fontStyle: 'normal',
              }}
            >
              &ldquo;{PROFILE_DATA.philosophy}&rdquo;
            </blockquote>

            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
              — {PROFILE_DATA.displayName}, {PROFILE_DATA.currentRole}
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 9 — FINAL CINEMATIC CALL-TO-ACTION                              */}
        {/* ======================================================================= */}
        <section style={{ marginBottom: 'var(--space-3xl)' }}>
          <div
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.08) 0%, rgba(15, 15, 20, 0.95) 60%, rgba(255, 107, 0, 0.04) 100%)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 107, 0, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--primary)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-xs)',
              }}
            >
              READY TO DISCUSS?
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                marginBottom: 'var(--space-sm)',
                lineHeight: 1.15,
                maxWidth: '780px',
              }}
            >
              Have an Idea or Opportunity?{' '}
              <span style={{ color: 'var(--primary)' }}>Let&apos;s Talk.</span>
            </h2>

            <p
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: 'var(--space-xl)',
              }}
            >
              Reach out directly or explore Nirmal&apos;s verified projects and production experience.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-sm)',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={`mailto:${PROFILE_DATA.contactEmail}`}
                style={{ textDecoration: 'none' }}
              >
                <Button variant="primary" size="lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>Send Direct Email</span>
                  <span>➔</span>
                </Button>
              </a>

              <Link href="/projects" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>Explore Projects</span>
                  <span>↗</span>
                </Button>
              </Link>

              <Link href="/experience" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" size="lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <span>View Experience</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Container>

      {/* Global CSS for this section */}
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .contact-input-field:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.18) !important;
        }
        .contact-card-premium:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 107, 0, 0.3) !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        }
        .collab-focus-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 107, 0, 0.3) !important;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35), 0 0 20px rgba(255, 107, 0, 0.05);
        }
        .social-profile-card:hover > div {
          border-color: rgba(255, 107, 0, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }
        .contact-submit-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(255, 107, 0, 0.45);
        }
        @media (min-width: 900px) {
          .contact-network-bg {
            display: block !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-card-premium,
          .collab-focus-card,
          .social-profile-card > div,
          .contact-submit-btn {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
