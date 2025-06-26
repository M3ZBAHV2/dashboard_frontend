# replit.md

## Overview

This is a full-stack web application built with React, Express, and TypeScript. The application appears to be a dealership management system called "True BDC" that handles dealers, employees, departments, scenarios, lead sources, and SMS communications. It features a modern UI built with shadcn/ui components and uses Drizzle ORM for database operations.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **UI Framework**: shadcn/ui components built on top of Radix UI and Tailwind CSS
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Uses shadcn/ui design system with comprehensive UI components
- **Routing**: Wouter-based routing with pages organized by feature areas (dashboard, admin, settings)
- **State Management**: TanStack Query for API state management with custom query client configuration
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Build System**: Vite with TypeScript support and custom path aliases

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **API Structure**: RESTful API with `/api` prefix (routes not yet implemented)
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Development Setup**: Vite integration for development mode with HMR support

### Database Schema
The application defines several core entities:
- **Users**: Basic user authentication with username/password
- **Dealers**: Dealership information with status and call log preferences
- **Employees**: Staff management with department associations
- **Departments**: Organizational structure
- **Scenarios**: Business process scenarios linked to departments
- **Lead Sources**: Marketing channel tracking

## Data Flow

1. **Client Requests**: React components use TanStack Query hooks to fetch data
2. **API Layer**: Express routes handle HTTP requests (currently using placeholder storage)
3. **Storage Layer**: Abstracted storage interface allows switching between implementations
4. **Database**: PostgreSQL schema managed through Drizzle ORM migrations

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI components for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Data and State Management
- **TanStack Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database queries
- **Zod**: Runtime type validation

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

The application is configured for Replit deployment with:
- **Development**: `npm run dev` runs both client and server with HMR
- **Production Build**: Vite builds client assets, ESBuild bundles server
- **Environment**: PostgreSQL database required via `DATABASE_URL`
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Auto-scaling**: Configured for Replit's autoscale deployment target

## Changelog

- June 26, 2025. Initial setup
- June 26, 2025. Complete leaderboard implementation with appointment and call tabs, data tables, pagination, and filters matching uploaded design
- June 26, 2025. Added comprehensive appointment management system with form creation, history tracking, and statistics
- June 26, 2025. Created full feature set including: appointment forms, history tables, statistics dashboard, call logs, schedule management, and agent activity tracking

## Recent Changes

✓ Rebuilt dashboard leaderboard to match exact design from uploaded screenshot
✓ Created appointment creation form with dealership, department, scenario selection
✓ Built appointment history page with filtering, search, and pagination
✓ Added My Statistics page with today/month/lifetime metrics and hourly tracking
✓ Implemented call history log with empty state matching design
✓ Created schedule & shift management with profile settings tabs
✓ Built RC Agent Activity page with agent selection and activity metrics
✓ Updated navigation and routing for all new pages
✓ Enhanced data models with appointment and call schemas

## User Preferences

Preferred communication style: Simple, everyday language.
User requested exact replication of uploaded dashboard screenshots with all data tables, sections, dates, and functionality.