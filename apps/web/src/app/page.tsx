'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { EducationSection } from '../components/sections/EducationSection';
import { CertificatesSection } from '../components/sections/CertificatesSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { HealthCheckModal } from '../components/sections/HealthCheckModal';

export default function PortfolioHomePage() {
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer onOpenHealthModal={() => setIsHealthModalOpen(true)} />

      <HealthCheckModal
        isOpen={isHealthModalOpen}
        onClose={() => setIsHealthModalOpen(false)}
      />
    </div>
  );
}
