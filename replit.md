# Overview

Denmarrk Drive-Inn Restaurant is a modern restaurant website built with React and Express.js. The application serves as a digital presence for a casual dining establishment, featuring a complete restaurant website with menu display, contact form functionality, and comprehensive information about the restaurant's offerings and team.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with TypeScript, utilizing a component-based architecture. Key architectural decisions include:

- **Routing**: Uses Wouter for lightweight client-side routing, chosen for its minimal bundle size and simplicity over React Router
- **Styling**: Implements Tailwind CSS with shadcn/ui components for consistent design system and rapid development
- **State Management**: TanStack Query (React Query) handles server state management and API interactions, providing caching, synchronization, and error handling
- **Form Handling**: React Hook Form with Zod validation ensures type-safe form processing with minimal re-renders
- **Build Tool**: Vite provides fast development server and optimized production builds

The application follows a single-page application (SPA) pattern with component composition for reusability. Components are organized by feature (navigation, hero, menu, contact) with shared UI components in a dedicated directory.

## Backend Architecture

The backend uses **Express.js** with TypeScript, implementing a RESTful API architecture:

- **Server Framework**: Express.js chosen for its simplicity and extensive ecosystem
- **Development Setup**: Custom Vite integration for hot module replacement during development
- **API Design**: RESTful endpoints following conventional HTTP methods and status codes
- **Error Handling**: Centralized error handling middleware for consistent error responses
- **Request Logging**: Custom middleware for API request logging and performance monitoring

The server architecture separates concerns with dedicated route handlers and storage abstraction layers.

## Data Storage Solutions

The application implements a **dual storage strategy**:

- **Production Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Schema Management**: Drizzle Kit handles database migrations and schema changes
- **Database Provider**: Neon serverless PostgreSQL for production deployment

This approach allows for quick development iteration while maintaining production-ready database capabilities.

## Authentication and Authorization

Currently implements a **basic user schema** with username/password fields. The architecture supports future authentication implementation with:

- User management endpoints ready for implementation
- Storage interfaces designed for user authentication
- Frontend components structured for auth integration

## API Structure

The API follows RESTful conventions with clear endpoint organization:

- `POST /api/contact` - Handles contact form submissions with validation
- `GET /api/contact` - Retrieves contact submissions for admin purposes
- User endpoints prepared but not yet implemented

Request/response handling includes proper HTTP status codes, error formatting, and data validation using Zod schemas.

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database toolkit with migration support

## UI Component Libraries
- **Radix UI**: Headless component library providing accessible primitives for complex components
- **shadcn/ui**: Pre-built component system built on Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

## Form and Data Management
- **React Hook Form**: Form state management with minimal re-renders
- **Zod**: Schema validation for both client and server-side data validation
- **TanStack React Query**: Server state management, caching, and synchronization

## Development Tools
- **TypeScript**: Static type checking for enhanced developer experience and code reliability
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server
- **ESBuild**: JavaScript bundler for production builds

## Communication Services
- **WhatsApp Business API**: Direct integration for customer communication and table reservations
- The contact form is designed to complement WhatsApp integration for multi-channel customer engagement

## Deployment Platform
- **Replit**: Cloud-based development and hosting environment with specialized tooling for this stack