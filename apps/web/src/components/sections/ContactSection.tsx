'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { FormField } from '../ui/FormField';
import { Badge } from '../ui/Badge';
import { submitContactForm } from '../../lib/api/contact';
import { ContactFormInput } from '@nirmal/validation';
import { PROFILE_DATA } from '../../data/profile';

export function ContactSection() {
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);

  const INQUIRY_TYPES = [
    { id: 'dev-role', label: 'Software Developer Opportunity', subject: 'Opportunity: Software Developer Role' },
    { id: 'b2b-project', label: 'Full-Stack / B2B Web Project', subject: 'Project Inquiry: Full-Stack Web Development' },
    { id: 'collab', label: 'Technical Collaboration', subject: 'Collaboration: Technical / AI Project' },
    { id: 'general', label: 'General Inquiry', subject: 'Inquiry: General Discussion' },
  ];

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
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {
      // Fallback: clipboard permission denied
    }
  };

  const handleSelectInquiry = (inquiry: typeof INQUIRY_TYPES[number]) => {
    setSelectedInquiry(inquiry.id);
    setFormData((prev) => ({ ...prev, subject: inquiry.subject }));
    if (fieldErrors.subject) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.subject;
        return next;
      });
    }
  };

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

  const validateClientSide = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email || !formData.email.includes('@')) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject || formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
        setSuccessMessage(response.data.message || 'Thank you for reaching out! Your message has been sent successfully.');
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
          setServerError(response.error.message || 'An error occurred while submitting your message.');
        }
      }
    } catch {
      setServerError('Failed to connect to the backend server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" spacing="lg">
      <Container size="lg">
        <SectionHeader
          badge="Get In Touch"
          title="Contact & Collaboration Inquiry"
          subtitle="Have an opportunity, project, or technical idea? Reach out directly via the validated message form, copy contact channels, or access the verified resume."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
        >
          {/* CONTACT INFO CARD */}
          <Card variant="elevated">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
              <Badge variant="primary">Direct Communication</Badge>
              {PROFILE_DATA.openToOpportunities && (
                <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 'var(--font-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
                  Open to Opportunities
                </span>
              )}
            </div>

            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
              Let&apos;s Connect
            </h3>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
              Reach out directly for software development roles, full-stack web products, or AI engineering collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {/* EMAIL ROW WITH COPY HELPER */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--primary)' }}>📧</span>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Email</div>
                    <a
                      href={`mailto:${PROFILE_DATA.contactEmail}`}
                      style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {PROFILE_DATA.contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE_DATA.contactEmail, 'email')}
                  aria-label="Copy email address to clipboard"
                  className="btn-copy"
                  style={{
                    minHeight: '36px',
                    padding: '6px 14px',
                    background: copiedEmail ? 'var(--success-bg)' : 'var(--bg-elevated)',
                    border: copiedEmail ? '1px solid var(--success)' : '1px solid var(--border-default)',
                    color: copiedEmail ? 'var(--success)' : 'var(--text-secondary)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all var(--transition-fast)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  <span>{copiedEmail ? '✓' : '📋'}</span>
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* PHONE ROW WITH COPY HELPER */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                  <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--success)' }}>📱</span>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                    <a
                      href={`tel:${PROFILE_DATA.contactPhone}`}
                      style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)', textDecoration: 'none' }}
                    >
                      {PROFILE_DATA.contactPhone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE_DATA.contactPhone, 'phone')}
                  aria-label="Copy phone number to clipboard"
                  className="btn-copy"
                  style={{
                    minHeight: '36px',
                    padding: '6px 14px',
                    background: copiedPhone ? 'var(--success-bg)' : 'var(--bg-elevated)',
                    border: copiedPhone ? '1px solid var(--success)' : '1px solid var(--border-default)',
                    color: copiedPhone ? 'var(--success)' : 'var(--text-secondary)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all var(--transition-fast)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
                    flexShrink: 0,
                  }}
                >
                  <span>{copiedPhone ? '✓' : '📋'}</span>
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LOCATION ROW */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--accent)' }}>📍</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                    {PROFILE_DATA.location}
                  </div>
                </div>
              </div>

              {/* CURRENT STATUS ROW */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--secondary)' }}>💼</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Current Status</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--success)' }}>
                    {PROFILE_DATA.currentRole} @ {PROFILE_DATA.currentOrganization}
                  </div>
                </div>
              </div>
            </div>

            {/* VERIFIED RESUME ACCESS BLOCK */}
            <div
              style={{
                marginTop: 'var(--space-xl)',
                paddingTop: 'var(--space-md)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                Verified Resume &amp; Credentials
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <a
                  href={PROFILE_DATA.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', flex: 1, minWidth: '135px' }}
                >
                  <Button variant="secondary" size="md" fullWidth>
                    📄 View Resume ↗
                  </Button>
                </a>
                <a
                  href={PROFILE_DATA.resumePdfPath}
                  download="Nirmal_Patil_Resume.pdf"
                  style={{ textDecoration: 'none', flex: 1, minWidth: '135px' }}
                >
                  <Button variant="ghost" size="md" fullWidth>
                    📥 Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* CONTACT FORM COMPONENT */}
          <Card variant="glass">
            <form onSubmit={handleSubmit} noValidate>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-md)', color: 'var(--text-primary)' }}>
                Send a Message
              </h3>

              {successMessage && (
                <div
                  style={{
                    padding: 'var(--space-sm) var(--space-md)',
                    background: 'var(--success-bg)',
                    color: 'var(--success)',
                    border: '1px solid var(--success)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  ✅ {successMessage}
                </div>
              )}

              {serverError && (
                <div
                  style={{
                    padding: 'var(--space-sm) var(--space-md)',
                    background: 'var(--error-bg)',
                    color: 'var(--error)',
                    border: '1px solid var(--error)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--font-size-sm)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  ⚠️ {serverError}
                </div>
              )}

              <FormField label="Your Name" htmlFor="contact-name" required error={fieldErrors.name}>
                <Input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  error={!!fieldErrors.name}
                  disabled={loading}
                />
              </FormField>

              <FormField label="Your Email" htmlFor="contact-email" required error={fieldErrors.email}>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jane@example.com"
                  error={!!fieldErrors.email}
                  disabled={loading}
                />
              </FormField>

              {/* INQUIRY TYPE SELECTOR */}
              <div style={{ marginBottom: 'var(--space-md)' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--space-2xs)',
                  }}
                >
                  Select Inquiry Type (Optional Quick Fill)
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
                          minHeight: '38px',
                          padding: '8px 16px',
                          background: isSelected ? 'rgba(255, 107, 0, 0.15)' : 'var(--bg-elevated)',
                          border: isSelected ? '1px solid var(--primary)' : '1px solid var(--border-default)',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          fontSize: 'var(--font-size-xs)',
                          fontWeight: isSelected ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                          borderRadius: 'var(--radius-full)',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          transition: 'all var(--transition-fast)',
                          boxShadow: isSelected ? '0 0 14px rgba(255, 107, 0, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        {isSelected && <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>}
                        <span>{inq.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <FormField label="Subject" htmlFor="contact-subject" required error={fieldErrors.subject}>
                <Input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack / Software Engineering Inquiry"
                  error={!!fieldErrors.subject}
                  disabled={loading}
                />
              </FormField>

              <FormField label="Message" htmlFor="contact-message" required error={fieldErrors.message}>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your project details or message here..."
                  rows={4}
                  error={!!fieldErrors.message}
                  disabled={loading}
                />
              </FormField>

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                {loading ? 'Sending Message...' : 'Submit Message ➔'}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
