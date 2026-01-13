# React Client - Folder and File Structure

## Project Structure

```
react-client/
├── src/
│   ├── app/                          # App Router (Pages & API)
│   │   ├── (auth)/                   # Auth Route Group
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx            # Auth layout (shared auth pages layout)
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── home/
│   │   │   └── page.tsx              # Home/Landing page (alternative route)
│   │   │
│   │   ├── api/                      # API Routes (Next.js API routes)
│   │   │   ├── auth/
│   │   │   │   ├── forgot-password/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── login/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── logout/
│   │   │   │   │   └── route.ts
│   │   │   │   └── signup/
│   │   │   │       └── route.ts
│   │   │   ├── users/
│   │   │   │   └── route.ts
│   │   │   └── products/
│   │   │       └── route.ts
│   │   │
│   │   ├── dashboard/                # Protected Dashboard Areas
│   │   │   ├── products/
│   │   │   │   └── page.tsx
│   │   │   ├── users/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx          # User profile page
│   │   │   ├── layout.tsx            # Dashboard layout (with sidebar/navbar)
│   │   │   └── page.tsx              # Dashboard home/main component
│   │   │
│   │   ├── layout.tsx                # Root Layout (already exists)
│   │   ├── page.tsx                  # Landing Page (root route - /)
│   │   ├── globals.css               # Global Styles (already exists)
│   │   ├── favicon.ico               # Favicon (already exists)
│   │   └── not-found.tsx             # 404 Not Found page
│   │
│   ├── components/                   # Reusable UI Components
│   │   ├── auth/
│   │   │   ├── ForgotPasswordForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── SignupForm.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Widgets/
│   │   │   │   ├── Widget1.tsx
│   │   │   │   ├── Widget2.tsx
│   │   │   │   └── Widget3.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── UsersTable.tsx
│   │   │   ├── ProductsTable.tsx
│   │   │   └── ProfileCard.tsx
│   │   │
│   │   ├── home/                     # Landing page components
│   │   │   ├── Hero.tsx              # Hero section
│   │   │   ├── Features.tsx          # Features section
│   │   │   └── CTA.tsx               # Call-to-action section
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       ├── Modal.tsx
│   │       └── Loading.tsx
│   │
│   ├── hooks/                        # Custom Hooks
│   │   ├── useAuth.ts
│   │   ├── useForm.ts
│   │   └── useLocalStorage.ts
│   │
│   ├── lib/                          # Libraries & Utilities
│   │   ├── apiClient.ts              # API client instance (Axios/fetch)
│   │   ├── auth.ts                   # Auth helper functions
│   │   └── validators.ts             # Form validation utilities
│   │
│   ├── services/                     # External API Services
│   │   ├── authService.ts            # Auth API service
│   │   ├── userService.ts            # User API service
│   │   └── productService.ts         # Product API service
│   │
│   ├── types/                        # TypeScript Definitions
│   │   ├── user.ts
│   │   ├── auth.ts
│   │   ├── product.ts
│   │   └── api.ts
│   │
│   ├── contexts/                     # React Context Providers
│   │   └── AuthContext.tsx
│   │
│   └── constants/                    # App-wide Constants
│       └── index.ts
│
├── public/                           # Static assets
│   ├── images/                       # Image assets
│   └── icons/                        # Icon assets
│
├── middleware.ts                     # Next.js Middleware (Auth Protection)
├── package.json                      # Dependencies (already exists)
├── tsconfig.json                     # TypeScript config (already exists)
├── next.config.ts                    # Next.js config (already exists)
├── postcss.config.mjs                # PostCSS config (already exists)
└── eslint.config.mjs                 # ESLint config (already exists)
```

## Route Structure

### Public Routes
- `/` - Landing page (root route)
- `/home` - Home/Landing page (alternative route)
- `/about` - About page
- `/contact` - Contact page

### Authentication Routes
- `/login` - Login page
- `/signup` - Signup page
- `/forgot-password` - Forgot password page

### Protected Routes (Dashboard)
- `/dashboard` - Dashboard home/main view
- `/dashboard/users` - Users management
- `/dashboard/products` - Products management
- `/dashboard/profile` - User profile

### API Routes (Next.js API Routes)
- `/api/auth/login` - Login API endpoint
- `/api/auth/signup` - Signup API endpoint
- `/api/auth/logout` - Logout API endpoint
- `/api/auth/forgot-password` - Forgot password API endpoint
- `/api/users` - Users API endpoint
- `/api/products` - Products API endpoint

### Error Routes
- `/not-found` or any unmatched route - 404 Not Found page

## Key Features

1. **Route Groups**: Using `(auth)` route group for authentication pages with shared layout
2. **Protected Routes**: Dashboard routes protected via Next.js middleware
3. **API Routes**: Next.js API routes for server-side API handling (if needed)
4. **Services Layer**: Separate services folder for external API calls to backend
5. **Component Organization**: Components organized by feature/domain
6. **Context API**: Auth context for global state management
7. **TypeScript**: Full type safety with dedicated type files
8. **Custom Hooks**: Reusable hooks including `useForm` for form handling
9. **Validators**: Centralized validation utilities
10. **Constants**: App-wide constants in dedicated folder

## Architecture Notes

- **API Client**: `lib/apiClient.ts` - Centralized HTTP client for backend communication
- **Services**: `services/` - Business logic layer for API calls
- **Middleware**: `middleware.ts` - Next.js middleware for route protection
- **Auth Layout**: `(auth)/layout.tsx` - Shared layout for all auth pages
- **Dashboard Layout**: `dashboard/layout.tsx` - Shared layout for dashboard pages with sidebar/navbar
- **Widgets**: Dashboard widgets organized in `components/dashboard/Widgets/`

## Next Steps

After this structure is approved, we'll implement:
1. Authentication flow (login, signup, forgot password)
2. Next.js middleware for protected routes
3. Dashboard layout and components
4. API service integration with backend
5. State management for auth and data
6. Form validation and error handling