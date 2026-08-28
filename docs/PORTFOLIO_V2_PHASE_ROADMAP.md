# NIRMAL PORTFOLIO V2 — MASTER PHASE ROADMAP

## Overview
Nirmal Portfolio V2 is a full-stack personal web application demonstrating software development capability, frontend expertise, backend engineering, UI/UX design, and product thinking. The application is built using Next.js (App Router), Express API backend, TypeScript, Prisma ORM, and PostgreSQL within an npm workspaces monorepo.

---

## Phase Breakdown

### Phase 0: Discovery & Requirements
- Project vision, goals, target audience definition, and identity scoping.
- Reference material collection from previous portfolio version.

### Phase 1: Architecture & Foundation (CURRENT PHASE)
- Establish monorepo structure with npm workspaces (`apps/*`, `packages/*`).
- Next.js frontend setup (`apps/web`).
- Express backend API setup (`apps/api`).
- PostgreSQL database integration via Prisma ORM (`prisma/schema.prisma`).
- Shared workspace packages (`@nirmal/types`, `@nirmal/validation`, `@nirmal/config`).
- Versioned API architecture (`/api/v1`).
- Security middleware (Helmet, CORS, rate limiting, request validation).
- Centralized error handling & logging foundation.
- Environment configuration (`.env.example`).
- API health endpoint (`GET /api/v1/health`) with graceful DB failure handling.
- Frontend API client & end-to-end connectivity verification screen.

### Phase 2: Design System & Visual Direction
- Typography, color palette, glassmorphism design tokens, CSS variables.
- Component guidelines for dark theme, typography scales, micro-animations, and visual tokens.

### Phase 3: Frontend Shell & Navigation
- Layout structure, responsive navigation, header, footer, mobile navigation menu, page transitions.

### Phase 4: Home + About
- Hero section, intro animation, profile photo integration, detailed about section, bio, download CV trigger for `Resume_Nirmal_Patil.pdf`.

### Phase 5: Skills + Education
- Technical skills grid, categorized skill badges, interactive skill filters, timeline for educational background.

### Phase 6: Projects
- Comprehensive projects gallery, interactive project category filter, project cards, detailed project case study modal/pages.

### Phase 7: Internships & Experience
- Professional experience timeline, role details, key contributions, achievements, company details.

### Phase 8: Certificates
- Interactive certificate showcase, flip cards, verification links, credential credentials.

### Phase 9: Contact + Email + WhatsApp
- Functional contact form interface, frontend validation, server-side validation, email notification integration, centralized WhatsApp quick-connect trigger.

### Phase 10: Backend & Database Integration
- Complete API route handlers for `/api/v1/projects`, `/api/v1/internships`, `/api/v1/certificates`, `/api/v1/skills`, `/api/v1/education`, `/api/v1/contact`, and `/api/v1/analytics`.

### Phase 11: Advanced UX & Motion
- Smooth scroll integration, micro-animations, interactive cursor/effects, dynamic visual polish.

### Phase 12: Admin / CMS
- CMS data management interface for updating portfolio content, project entries, contact messages, and analytics logs.

### Phase 13: SEO + Accessibility + Performance
- OpenGraph meta tags, dynamic title/description tags, ARIA accessibility auditing, keyboard navigation, Lighthouse & Core Web Vitals optimization.

### Phase 14: QA & Testing
- Automated unit testing, integration tests for API endpoints, end-to-end user flow verification, cross-browser testing.

### Phase 15: Production Deployment
- Deployment setup: Next.js on Vercel, Express API on Render, PostgreSQL database provisioning, environment secrets setup.

### Phase 16: Final Portfolio Audit
- Final end-to-end system audit, code refactoring check, design consistency review, final sign-off.
