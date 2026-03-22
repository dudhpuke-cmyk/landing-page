# Dudhpuke - Farm Fresh Milk Delivery

A production-grade but now simplified dairy website for **Dudhpuke**, a farm-fresh milk brand by **Om Sai Pashu Palan** focused on clear, regular local milk delivery.

## 🏗️ Architecture Overview

Built with **Next.js 15 (App Router)**, TypeScript, Tailwind CSS. Designed as a modern landing page with clean architecture, ready for e-commerce, subscriptions, authentication, and admin dashboard functionality.

### Tech Stack

- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion
- **UI Components**: Custom shadcn-style components
- **Database**: Not currently used (Prisma-ready for future integration)
- **Email**: Resend (transactional emails)
- **State Management**: React Server Components + Client Components
- **SEO**: Next.js Metadata API, OpenGraph, Twitter Cards, JSON-LD

## 📁 Project Structure

```
Dudhpuke-landingPage/
├── app/
│   ├── (dashboard)/          # Admin dashboard route group
│   │   ├── layout.tsx        # Dashboard layout with sidebar
│   │   ├── page.tsx           # Overview page
│   │   ├── orders/           # Orders management
│   │   ├── subscriptions/    # Subscription management
│   │   ├── customers/        # Customer management
│   │   └── products/         # Product management
│   ├── (auth)/               # Authentication route group
│   │   ├── layout.tsx        # Auth layout
│   │   ├── login/            # Login page
│   │   └── register/         # Registration page
│   ├── api/                  # API routes
│   │   ├── products/         # Product endpoints
│   │   ├── subscriptions/    # Subscription endpoints
│   │   ├── orders/           # Order endpoints
│   │   ├── contact/          # Contact form submission
│   │   └── subscription-inquiry/  # Subscription inquiry emails
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── accordion.tsx
│   ├── layout/               # Layout components
│   │   └── DashboardSidebar.tsx
│   ├── marketing/            # Marketing components
│   │   ├── Timeline.tsx
│   │   └── ContactForm.tsx
│   │   └── Timeline.tsx
│   ├── Button.tsx
│   ├── FeatureCard.tsx
│   ├── ProductCard.tsx
│   ├── SectionShell.tsx
│   ├── StepCard.tsx
│   └── TestimonialCard.tsx
├── sections/                 # Page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── ProductsSection.tsx
│   ├── SubscriptionSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── DeliverySection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FaqSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   ├── seo.ts                # SEO metadata & structured data
│   ├── utils.ts              # Utility functions (cn, etc.)
│   └── resend.ts             # Resend email client & templates
├── types/
│   └── product.ts            # TypeScript types
├── hooks/
│   └── useInViewAnimation.ts  # Framer Motion animation hook
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- (Optional) PostgreSQL for future database integration

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (create `.env` from `.env.example`):
   ```env
   # Resend Email API (required for email functionality)
   RESEND_API_KEY="your-resend-api-key-here"
   
   # Email Configuration (optional)
   RESEND_FROM_EMAIL="Dudhpuke <onboarding@resend.dev>"
   RESEND_REPLY_TO="dudhpuke@gmail.com"
   ```
   
   **Note**: See `.env.example` for a complete list of environment variables.
   
   **Note**: Database and authentication are not currently used. These are planned for future integration.

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## ✨ Features

### Public Website (Simplified Landing)

- ✅ **Hero Section** - Clear headline, simple CTAs for milk delivery
- ✅ **Brand Story** - Founder and family story (Puspa Raj Adhikari), with farm background image and process gallery (family, cows, milking, processing)
- ✅ **Product Overview** - Product cards (Milk, Paneer, Ghee)
- ✅ **Image Showcase Section** - Visual gallery of farm, milk, paneer, and ghee images
- ✅ **How It Works** - Simple 3-step explanation of delivery and payment
- ✅ **Delivery Coverage** - Plain explanation of local areas served
- ✅ **Testimonials** - Basic customer quotes
- ✅ **FAQ Section** - Short answers focused on delivery, timing, and payment
- ✅ **Contact Section** - Lead capture, WhatsApp integration, phone CTA

### Dashboard (Future-Ready)

- ✅ **Sidebar Navigation** - Overview, Orders, Subscriptions, Customers, Products
- ✅ **Overview Page** - Stats cards, quick actions
- ✅ **Placeholder Pages** - Structured for easy expansion
- ✅ **Authentication Shell** - Login/Register pages ready for NextAuth

### Database Schema (Future - Prisma)

Database integration is planned for future development. The following models are designed but not yet implemented:
- `User` - Authentication & user management
- `Customer` - Customer profiles & addresses
- `Product` - Product catalog (milk, paneer, ghee, etc.)
- `Subscription` - Subscription plans & billing cycles
- `Order` - Order management & history
- `Delivery` - Delivery tracking & schedules
- `Review` - Customer reviews & ratings

### API Routes

- `/api/products` - Product listing
- `/api/subscriptions` - Subscription management (GET/POST)
- `/api/orders` - Order management (GET/POST)
- `/api/contact` - Contact form submission (sends email via Resend)
- `/api/subscription-inquiry` - Subscription inquiry emails (sends email via Resend)

All routes are structured for NextAuth authentication and Prisma integration.

### Email Integration (Resend)

The platform uses **Resend** for transactional emails:

- **Contact Form**: Sends inquiry to `dudhpuke@gmail.com` and confirmation to customer (if email provided)
- **Subscription Inquiries**: Handles subscription plan inquiries with email notifications
- **Email Templates**: Professional HTML email templates in `lib/resend.ts`

**Configuration**:
- API Key: Set `RESEND_API_KEY` in `.env`
- From Email: `dudhpuke@gmail.com` (configured in `lib/resend.ts`)

## 🎨 Design System

### Color Palette

- **Primary**: Deep Green (`#2F6F4E`)
- **Secondary**: Cream (`#FFF8EB`)
- **Accent**: Soft Brown (`#8B5A2B`)
- **Neutral**: White + Light Gray

### Style Principles

- Premium, clean, organic aesthetic
- Modern SaaS feel
- Rounded 2xl cards
- Soft shadows
- Subtle micro-interactions (Framer Motion)

## 🔧 Future Expansion Ready

The codebase is structured to easily add:

- **Payment Integration** - Razorpay-ready structure in API routes
- **Authentication** - NextAuth-ready with route protection
- **Role-Based Access** - Admin/Customer role system
- **Subscription Billing** - Automated billing logic hooks
- **Order Tracking** - Real-time delivery status
- **Customer Portal** - Self-service subscription management
- **Admin Analytics** - Dashboard metrics & reporting

## 📊 SEO & Performance

- ✅ Next.js Metadata API
- ✅ OpenGraph tags
- ✅ Twitter cards
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Optimized images (Next.js Image)
- ✅ Lazy loading
- ✅ Semantic HTML
- ✅ Accessible (WCAG-friendly)

## 🛠️ Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Clean architecture patterns
- Modular component structure
- Reusable utility functions

## 🚀 Deployment

### Pre-Deployment Checklist

Before deploying, ensure you have:

1. **Environment Variables**: Set all required environment variables in your deployment platform
   - `RESEND_API_KEY` (required for email functionality)
   - `RESEND_FROM_EMAIL` (optional, defaults to test domain)
   - `RESEND_REPLY_TO` (optional, defaults to dudhpuke@gmail.com)

2. **Build Process**: 
   ```bash
   npm install  # Runs prisma generate automatically
   npm run build
   ```

### Deployment Issues

See **[VERCEL_DEPLOYMENT_ISSUES.md](./VERCEL_DEPLOYMENT_ISSUES.md)** for Vercel-specific deployment issues and solutions.

See **[DEPLOYMENT_ISSUES.md](./DEPLOYMENT_ISSUES.md)** for general deployment considerations.

See **[DOMAIN_CONFIGURATION_GUIDE.md](./DOMAIN_CONFIGURATION_GUIDE.md)** for configuring multiple domains with Vercel nameservers and fixing "Invalid Configuration" errors.

### Platform-Specific Notes

- **Vercel**: ✅ Recommended platform. Automatically detects Next.js. Set environment variables in dashboard. **Important**: `output: 'standalone'` has been removed from `next.config.js` for Vercel compatibility.
- **Railway**: Add environment variables in dashboard.
- **Docker**: Ensure environment variables are available.

## 📝 Notes

- **Database**: Not currently used. Prisma integration is planned for future development.
- **Authentication**: Not currently implemented. NextAuth integration is planned.
- All API routes include TODO comments for integration points
- Dashboard pages are placeholders ready for data integration
- Payment flows are structured but not connected (Razorpay-ready)
- The marketing copy on the public landing page has been simplified to remove heavy "subscription platform" and SaaS wording; it now describes Dudhpuke mainly as regular local milk delivery with simple monthly payment.

## 📢 Latest Layout + Ad Integration Update

- Added a strict global `.container` (`max-width: 1200px`, centered, with `16px` side padding) for safe page-level layout constraints.
- Introduced `.content-layout` grid on the main home page (`2fr 1fr`) with a constrained `.sidebar` (`300px`) and a responsive fallback to single-column below `1024px`.
- Added reusable `AdUnit` component at `sections/AdUnit.tsx` with fixed ad dimensions:
  - `banner`: max `728x90`
  - `rectangle`: `300x250`
  - `sidebar`: `300x600`
- Inserted ads safely on the home page:
  - one banner below navbar,
  - one rectangle after early content,
  - one rectangle near bottom (hidden on mobile to keep ad count low),
  - one sidebar unit for desktop-only sidebar.
- Added mobile ad protection:
  - banner switches to `320x100` constraint on small screens,
  - sidebar hidden on tablet/mobile,
  - reduced mobile ad density (max 2 visible ads).

## 📄 License

Proprietary - Om Sai Pashu Palan / Dudhpuke

---

**Built with ❤️ for Dudhpuke - Bringing 20+ years of dairy trust to your doorstep.**
#   l a n d i n g - p a g e 
 
 #   l a n d i n g - p a g e 
 
 