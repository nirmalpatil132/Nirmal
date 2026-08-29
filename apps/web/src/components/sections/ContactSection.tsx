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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for edited field
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
        setSuccessMessage(response.data.message || 'Contact message submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    } catch (err) {
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
          title="Contact & Project Inquiry"
          subtitle="[Contact section subtitle placeholder: Feel free to send a message regarding software development, UI/UX design, or collaboration opportunities.]"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
        >
          {/* CONTACT INFO PLACEHOLDER CARD */}
          <Card variant="elevated">
            <Badge variant="primary" style={{ marginBottom: 'var(--space-md)' }}>Communication Hub</Badge>
            
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
              Let&apos;s Connect
            </h3>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
              [Contact summary placeholder: Open for full-stack web development projects, UI/UX consulting, and software engineering roles.]
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--secondary)' }}>📧</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Email (Placeholder)</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                    [email@example.com placeholder]
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--success)' }}>💬</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>WhatsApp Quick Connect</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                    [+91 0000000000 placeholder]
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <span style={{ fontSize: 'var(--font-size-xl)', color: 'var(--accent)' }}>📍</span>
                <div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>Location</div>
                  <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)', color: 'var(--text-primary)' }}>
                    [City, Country Placeholder]
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* CONTACT FORM COMPONENT */}
          <Card variant="glass">
            <form onSubmit={handleSubmit} noValidate>
              <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-md)' }}>
                Send Message
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

              <FormField label="Subject" htmlFor="contact-subject" required error={fieldErrors.subject}>
                <Input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Collaboration"
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
                  placeholder="Write your detailed project message here..."
                  rows={4}
                  error={!!fieldErrors.message}
                  disabled={loading}
                />
              </FormField>

              <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
                {loading ? 'Submitting Message...' : 'Submit Message ➔'}
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
