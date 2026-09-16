import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '../../components/navigation/Navbar';
import { Footer } from '../../components/navigation/Footer';
import { ProjectsSection } from '../../components/sections/ProjectsSection';

export const metadata: Metadata = {
  title: 'Projects — Nirmal Patil',
  description: 'Explore full-stack web applications, AI-assisted platforms, B2B manufacturing portals, and software engineering projects by Nirmal Patil.',
};

export default function ProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1, paddingTop: 'calc(var(--header-height) + var(--space-lg))' }}>
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
