# Nirmal Portfolio V2

A modern, full-stack personal portfolio application designed to showcase software development capability, full-stack engineering, and UI/UX product design.

---

## 🎯 Purpose

Nirmal Portfolio V2 is built cleanly from the ground up as a production-quality, monolithic repository (monorepo). It cleanly decouples the Next.js frontend presentation layer from the Express API service layer, powered by PostgreSQL and Prisma ORM.

---

## 🛠️ Technology Stack

- **Frontend**: Next.js (App Router), React, TypeScript
- **Backend**: Express, Node.js, TypeScript
- **Database & ORM**: PostgreSQL, Prisma ORM
- **Shared Packages**: Zod validation, Shared TypeScript interfaces, Centralized configuration
- **Security & Middleware**: Helmet, CORS, Express Rate Limit, Zod request validation

---

## 🏗️ Production Architecture

```
                    NIRMAL PORTFOLIO V2
                             |
              +--------------+--------------+
              |                             |
              v                             v
        NEXT.JS FRONTEND              EXPRESS BACKEND
           apps/web                      apps/api
              |                             |
              v                             v
           VERCEL                        RENDER
                                            |
                                            v
                                      PRISMA ORM
                                            |
                                            v
                                       POSTGRESQL
```

---

## 📁 Repository Structure

```
Nirmal/
├── apps/
│   ├── web/              # Next.js App Router frontend application
│   └── api/              # Express TypeScript backend API service
├── packages/
│   ├── types/            # @nirmal/types shared domain types
│   ├── validation/       # @nirmal/validation Zod schemas
│   └── config/           # @nirmal/config shared constants
├── prisma/               # PostgreSQL schema & database seed script
├── docs/                 # Master Phase Roadmap
└── assets/               # Historical reference assets & resumes
```

---

## 🚀 Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Generate Prisma Client**:
   ```bash
   npm run db:generate
   ```

4. **Run Development Servers**:
   ```bash
   npm run dev
   ```
   - **Frontend App**: `http://localhost:3000`
   - **Backend API**: `http://localhost:4000`
   - **API Health Check**: `http://localhost:4000/api/v1/health`

---

## 📜 Phase Methodology

The portfolio is built strictly phase-by-phase following `docs/PORTFOLIO_V2_PHASE_ROADMAP.md`:
- **Phase 1**: Architecture & Foundation (Current Phase)
- **Phase 2**: Design System & Visual Direction
- **Phase 3**: Frontend Shell & Navigation
- **Phase 4–16**: Feature pages, integration, testing, deployment, and auditing.
