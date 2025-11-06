# Meidin Brand Website

## Overview

This is a single-page brand website for Meidin (메이딘), a natural supplement company specializing in science-backed wellness products. The flagship product is Sensibi (센시비), an anti-inflammatory supplement based on Angelica gigas extract. The site is built as a static, marketing-focused web application without e-commerce functionality, designed to establish brand credibility and facilitate business inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single page with anchor navigation)

**UI System:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color system based on Korean wellness brand aesthetics (Nature's Farm inspired):
  - Primary brand color: `#2F8F6B` (calming green)
  - Secondary: `#DCF2EA` (light mint)
  - Accent: `#B88C4A` (gold)
  - Pretendard font family via CDN

**Component Structure:**
- Page components in `client/src/pages/` (Home, NotFound)
- Feature sections as discrete components (Hero, About, RnD, Product, Partners, News, Contact)
- Reusable UI components from shadcn/ui in `client/src/components/ui/`
- Form handling with react-hook-form and Zod validation

**State Management:**
- TanStack Query (React Query) for server state and API calls
- React Hook Form for complex form state (contact form)
- Local component state with useState/useEffect for UI interactions

**SEO & Metadata:**
- react-helmet-async for dynamic meta tag management
- Pre-configured SEO constants in `client/src/lib/seo.ts`
- OG images and social media preview optimization

### Backend Architecture

**Server Framework:**
- Express.js as the HTTP server
- TypeScript for type safety across the full stack
- Custom Vite middleware integration for development HMR

**API Design:**
- RESTful endpoints under `/api/*` prefix
- Single contact form submission endpoint (`POST /api/contact`)
- Shared schema validation using Zod between client and server
- JSON-based request/response format

**Development vs Production:**
- Development: Vite dev server with middleware mode for instant updates
- Production: Static asset serving from `dist/public` after build
- Environment-aware logging and error handling

**Storage Layer:**
- In-memory storage implementation (MemStorage) for user data
- Interface-based storage abstraction (IStorage) allowing future database integration
- Currently uses Map-based data structures without persistence

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* packages for accessible, unstyled UI primitives (dialogs, dropdowns, forms, etc.)
- lucide-react for consistent iconography
- embla-carousel-react for potential carousel functionality
- cmdk for command palette patterns

**Form & Validation:**
- react-hook-form for performant form state management
- @hookform/resolvers for Zod schema integration
- zod for runtime type validation and schema definitions
- drizzle-zod for potential database schema validation

**Data Fetching:**
- @tanstack/react-query for async state management, caching, and server synchronization
- Custom fetch wrapper in `client/src/lib/queryClient.ts`

**Styling & Theming:**
- tailwindcss with custom configuration
- tailwindcss-animate for CSS animations
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for conditional class composition

**Database (Configured but Not Required):**
- Drizzle ORM configured for PostgreSQL
- @neondatabase/serverless as the database driver
- Database schema defined in `shared/schema.ts`
- Note: The application currently functions without database connectivity; the contact form logs to console rather than persisting data

**Development Tools:**
- @replit/vite-plugin-runtime-error-modal for enhanced error display
- @replit/vite-plugin-cartographer for Replit integration
- tsx for TypeScript execution in Node.js

**Build & Asset Management:**
- esbuild for server-side bundling
- Vite's built-in Rollup for client bundling
- Path aliases configured for clean imports (@/, @shared/, @assets/)

**Session Management (Configured):**
- connect-pg-simple for PostgreSQL session storage (currently unused as no authentication exists)

### Key Architectural Decisions

**Single Page Application:**
- All content on one page with smooth anchor scrolling
- No authentication or user accounts required
- Static site generation suitable for CDN deployment

**Shared Schema Pattern:**
- Type definitions shared between client and server via `shared/` directory
- Single source of truth for API contracts using Zod schemas
- Ensures type safety across the full stack

**No Persistence Layer:**
- Contact form submissions are logged but not stored
- Suitable for MVP/demo deployment
- Storage interface allows easy database integration when needed

**Asset Strategy:**
- Static images in `attached_assets/generated_images/`
- Vite asset imports with content hashing
- CDN-friendly font loading (Pretendard via jsDelivr)

**Responsive Design:**
- Mobile-first approach with Tailwind breakpoints
- Custom design guidelines in `design_guidelines.md`
- Consistent spacing system (py-14 mobile, py-20 desktop)