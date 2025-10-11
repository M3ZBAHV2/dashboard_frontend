# True BDC - Dealership Management System

## Overview

True BDC is a full-stack dealership management application designed to help automotive dealerships manage their business development centers. The system handles appointments, follow-ups, employee management, call tracking, and dealer administration. Built with modern TypeScript across the entire stack, it provides a type-safe, scalable solution for dealership operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3+ with TypeScript**: Component-based UI with full type safety
- **Vite**: Fast build tool providing instant HMR and optimized production builds
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router

**UI & Styling**
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens defined in CSS variables
- **shadcn/ui**: High-quality, accessible React components built on Radix UI primitives
- **Component Library**: Extensive set of pre-built UI components (dialogs, dropdowns, forms, tables, etc.)
- **Theme System**: Light/dark mode support with CSS custom properties for consistent theming

**State Management**
- **TanStack Query (React Query)**: Server state management, caching, and synchronization
- **Local Storage Hook**: Custom `useLocalStorage` hook for persistent client-side state
- **Query Client Configuration**: Centralized configuration with custom error handling and 401 retry logic

**Path Aliases**
- `@/`: Maps to `client/src/` for frontend code
- `@shared/`: Maps to `shared/` for shared types and schemas
- `@assets/`: Maps to `attached_assets/` for static assets

### Backend Architecture

**Server Framework**
- **Express.js**: Node.js web application framework
- **TypeScript**: Full type safety across server code
- **Custom Middleware**: Request logging, JSON parsing, and error handling

**Storage Layer**
- **In-Memory Storage**: Initial implementation using `MemStorage` class for development
- **Prepared for Database Migration**: Interface-based design (`IStorage`) allows easy swap to database-backed storage
- **Storage Interface**: Defines CRUD operations for users and other entities

**Database Schema (Planned)**
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Schema Definition**: Centralized in `shared/schema.ts` for use across frontend and backend
- **Tables Defined**:
  - Users (authentication)
  - Dealers (dealership information)
  - Employees (staff management)
  - Departments (organizational structure)
  - Scenarios (interaction templates)
  - Lead Sources (tracking customer origins)

**API Design**
- **RESTful Endpoints**: Prefixed with `/api` for clear separation
- **Logging**: Request/response logging with duration tracking
- **Error Handling**: Centralized error middleware with status code handling

**Development Tools**
- **Vite Middleware Mode**: Serves frontend during development with HMR
- **Static File Serving**: Production builds served from `dist/public`
- **Build Process**: Dual build system (Vite for frontend, esbuild for backend)

### Key Architectural Decisions

**1. Monorepo Structure**
- **Problem**: Managing frontend, backend, and shared code in a scalable way
- **Solution**: Single repository with clear separation (`client/`, `server/`, `shared/`)
- **Pros**: Simplified dependency management, shared types, single deployment
- **Cons**: Requires careful build configuration

**2. Type-Safe Schema Sharing**
- **Problem**: Keeping frontend and backend data models in sync
- **Solution**: Shared schema definitions in `shared/schema.ts` using Drizzle ORM and Zod
- **Pros**: Single source of truth, compile-time type checking, runtime validation
- **Cons**: Schema changes require rebuilding both frontend and backend

**3. Component-First UI Design**
- **Problem**: Building consistent, accessible UI quickly
- **Solution**: shadcn/ui components with Tailwind CSS
- **Pros**: Highly customizable, accessible by default, no runtime bundle overhead
- **Cons**: Components are copied into project (not installed as dependency)

**4. In-Memory Storage with Interface**
- **Problem**: Need to develop quickly but prepare for database integration
- **Solution**: Storage interface with in-memory implementation
- **Pros**: Fast development iteration, easy testing, clear migration path
- **Cons**: Data doesn't persist, not suitable for production

**5. Server-Side Rendering Strategy**
- **Problem**: Balancing development speed with production performance
- **Solution**: Vite middleware in development, static SPA in production
- **Pros**: Fast HMR in dev, optimized bundle in production
- **Cons**: Requires different serving strategies per environment

## External Dependencies

### Database & ORM
- **PostgreSQL**: Primary relational database (configured via `DATABASE_URL`)
- **Neon Database**: Serverless Postgres provider (`@neondatabase/serverless`)
- **Drizzle ORM**: Type-safe database toolkit with migration support
- **Connection Pooling**: `connect-pg-simple` for PostgreSQL session storage

### UI Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives
- **Lucide React**: Icon library for consistent iconography
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command palette component
- **vaul**: Drawer component library
- **embla-carousel-react**: Carousel/slider functionality
- **react-day-picker**: Date picker component

### Form & Validation
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integrates Zod with React Hook Form

### Development Tools
- **Replit Plugins**: 
  - `@replit/vite-plugin-cartographer`: Code navigation in Replit IDE
  - `@replit/vite-plugin-runtime-error-modal`: Enhanced error reporting
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript/TypeScript bundler for production builds

### Build & Deployment
- **Vite**: Development server and production build tool
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Vercel**: Deployment platform (configured via `vercel.json`)

### Authentication (Prepared)
- **Passport.js**: Authentication middleware (dependency present, implementation pending)
- **Session Management**: PostgreSQL-backed sessions via `connect-pg-simple`