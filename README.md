# True BDC - Dealership Management System

A full-stack dealership management application built with modern web technologies.

## Tech Stack

### Frontend
- **React** 18.3+ with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **TanStack Query** - Powerful async state management
- **Wouter** - Lightweight routing

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Type safety across the stack
- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Relational database
- **Passport.js** - Authentication middleware

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and configure your database connection and other settings.

4. Run database migrations:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run check` - Type check TypeScript files
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configs
│   └── index.html
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data layer
├── shared/               # Shared code between client/server
│   └── schema.ts         # Database schema definitions
└── attached_assets/      # Static assets
```

## Features

- **Dealer Management** - Add, edit, and manage dealerships
- **Employee Management** - Track employees and departments
- **Appointment System** - Create and manage appointments
- **Call Logging** - Track customer interactions
- **Lead Sources** - Monitor marketing channels
- **Analytics Dashboard** - Performance metrics and statistics
- **SMS Integration** - Automated communications

## Development

### Environment Variables

Required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Secret key for session encryption
- `NODE_ENV` - Application environment (development/production)

See `.env.example` for all available options.

### Database Schema

The application uses Drizzle ORM for database management. Schema files are located in `shared/schema.ts`.

To make schema changes:
1. Edit the schema file
2. Run `npm run db:push` to apply changes

## Building for Production

```bash
npm run build
npm run start
```

The build process:
1. Compiles the React frontend with Vite
2. Bundles the Express backend with esbuild
3. Outputs to the `dist/` directory

## License

MIT
