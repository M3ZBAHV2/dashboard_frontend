# True BDC - Dealership Management System

## Overview

True BDC is a comprehensive full-stack dealership management application designed for automotive dealerships to manage their Business Development Centers (BDC). The system provides CRUD operations for dealers, employees, appointments, roles/permissions, and various administrative functions. It features a modern React frontend with TypeScript, Express backend, and uses localStorage for data persistence (with Drizzle ORM configured for future PostgreSQL integration).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18.3+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server (port 5000)
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and caching
- **Tailwind CSS** for utility-first styling with custom design tokens
- **shadcn/ui** component library built on Radix UI primitives

**Design Patterns:**
- Component-based architecture with separation of concerns (layout, common, pages, UI components)
- Custom hooks pattern (`useLocalStorage`, `use-toast`, `use-mobile`)
- Local state management stores (dealer, dealership, role, SMS) using localStorage
- Centralized routing configuration in `client/src/App.tsx`
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)

**Key Architectural Decisions:**
- **localStorage-first approach**: Currently using browser localStorage for data persistence via custom stores (dealerListStore, roleStore, smsLogStore, etc.) to enable rapid prototyping and offline functionality
- **Shadcn/ui component system**: Provides highly customizable, accessible components while maintaining full control over styling
- **Monorepo structure**: Frontend (`client/`), backend (`server/`), and shared code (`shared/`) in a single repository for easier type sharing and development workflow

### Backend Architecture

**Technology Stack:**
- **Express.js** web framework with TypeScript
- **Drizzle ORM** configured for PostgreSQL (currently unused, in-memory storage active)
- **Passport.js** ready for authentication (not yet implemented)
- Custom middleware for request logging and error handling

**Current State:**
- **In-memory storage**: `MemStorage` class implements `IStorage` interface with basic CRUD operations for users
- **Minimal route configuration**: `server/routes.ts` is a skeleton awaiting API endpoint implementation
- **Session management**: Infrastructure present but not actively used

**Design Rationale:**
The backend is intentionally minimal, serving primarily as a development scaffold. The application currently operates with frontend-only localStorage, with the backend prepared for future migration to database-backed operations.

### Data Storage

**Current Implementation:**
- **localStorage stores** for all entities:
  - `dealerListStore`: Dealer CRUD with 10 seed dealers, 30+ fields per dealer
  - `dealershipStore`: Dealership management with assigned dealers
  - `roleStore`: Role-based permissions across 11 modules
  - `smsLogStore` & `pendingSmsStore`: SMS message tracking
  
**Prepared Infrastructure:**
- **Drizzle ORM** schema defined in `shared/schema.ts` with tables for users, dealers, and related entities
- **PostgreSQL** configuration via `DATABASE_URL` environment variable
- Migration scripts available (`db:push`, `db:generate`, `db:studio`)

**Migration Strategy:**
When transitioning to database persistence, the localStorage stores can be replaced with API calls to Express endpoints that use Drizzle ORM, maintaining the same interface contracts.

### Authentication & Authorization

**Current State:**
- Basic login route (`/login`) exists but authentication is not enforced
- User model defined in schema with username/password fields
- Passport.js dependency included but not configured

**Role-Based Permissions:**
- Comprehensive permission system defined in `roleStore`
- 11 modules with granular permissions (Manage, Create, Edit, Delete, View, Schedule, etc.)
- Roles: Admin, Manager, Agent, QA Analyst with different permission levels
- Permission structure ready for backend enforcement

### Build & Deployment

**Development:**
- `npm run dev`: Runs TypeScript server via `tsx` with hot reload
- Vite dev server on port 5000 with HMR
- Strict TypeScript checking across all code

**Production:**
- `npm run build`: Vite builds client to `dist/public`, esbuild bundles server to `dist/`
- `npm start`: Runs production server from compiled JavaScript
- Vercel configuration present for deployment with SPA routing

**Code Quality:**
- ESLint configured for React, TypeScript, and React Hooks
- Recommended VS Code extensions and settings for consistent development experience
- TypeScript strict mode enabled with path aliases

## External Dependencies

### UI & Styling
- **Radix UI**: Comprehensive set of accessible component primitives (accordion, dialog, dropdown, popover, select, etc.)
- **Tailwind CSS**: Utility-first CSS framework with custom design system (color tokens, spacing, typography)
- **class-variance-authority**: Type-safe variant styling for component APIs
- **Lucide React**: Icon library for consistent iconography
- **cmdk**: Command palette component for search and navigation

### Data Management
- **TanStack Query**: Async state management with caching, background refetching, and query invalidation
- **React Hook Form**: Form state management with validation
- **Zod**: TypeScript-first schema validation (with drizzle-zod integration)
- **date-fns**: Date manipulation and formatting utilities

### Backend & Database
- **Drizzle ORM**: TypeScript ORM for PostgreSQL with type-safe queries
- **@neondatabase/serverless**: Serverless PostgreSQL driver (Neon DB compatible)
- **connect-pg-simple**: PostgreSQL session store for Express (ready for use)
- **Express session middleware**: Cookie-based session management

### Routing & Navigation
- **Wouter**: Minimalist router (~1.5KB) chosen over React Router for smaller bundle size
- Provides hooks-based API (`useLocation`, `useRoute`) similar to React Router

### Build Tools
- **Vite**: Fast build tool with native ESM support and optimized production builds
- **esbuild**: JavaScript bundler for server-side code (ESM format)
- **tsx**: TypeScript execution engine for development server
- **TypeScript**: Type checking and compilation across entire stack

### Development Tools
- **ESLint**: Code linting with React, TypeScript, and React Hooks rules
- **Drizzle Kit**: Database schema management and migration tools
- **PostCSS**: CSS processing with Tailwind and autoprefixer

### Third-Party Services (Prepared)
- **PostgreSQL**: Relational database (via DATABASE_URL environment variable)
- **Ring Central**: Phone system integration (settings page exists, not yet connected)
- **SMTP**: Email configuration prepared in settings (not implemented)