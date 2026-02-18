# Dudhpuke - Farm Fresh Milk Delivery

A production-grade but now simplified dairy website for **Dudhpuke**, a farm-fresh milk brand by **Om Sai Pashu Palan** focused on clear, regular local milk delivery.

## 🏗️ Architecture Overview

Built with **Next.js 14 (App Router)**, TypeScript, Tailwind CSS, and Prisma ORM. Designed as a modern SaaS product with clean architecture, ready for e-commerce, subscriptions, authentication, and admin dashboard functionality.

### Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion
- **UI Components**: Custom shadcn-style components
- **Database**: Prisma ORM (PostgreSQL-ready)
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
│   ├── prisma.ts             # Prisma client singleton
│   └── resend.ts             # Resend email client & templates
├── prisma/
│   └── schema.prisma         # Database schema
├── types/
│   └── product.ts            # TypeScript types
├── hooks/
│   └── useInViewAnimation.ts  # Framer Motion animation hook
└── public/                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL (for production; optional for development)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables** (create `.env`):
   ```env
   # Database (optional for initial development)
   DATABASE_URL="postgresql://user:password@localhost:5432/dudhpuke"
   
   # Authentication (for future NextAuth integration)
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Resend Email API
   RESEND_API_KEY="re_7gwzUZw3_FqDCocVuPUDM32hcB1FLqUF5"
   ```

3. **Initialize Prisma** (when ready to connect database):
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## ✨ Features

### Public Website (Simplified Landing)

- ✅ **Hero Section** - Clear headline, simple CTAs for milk delivery
- ✅ **Brand Story** - Short family-run dairy story without technical jargon
- ✅ **Product Overview** - Product cards (Milk, Paneer, Ghee)
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

### Database Schema (Prisma)

Models prepared:
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

## 📝 Notes

- Database connection is optional for initial development
- All API routes include TODO comments for integration points
- Dashboard pages are placeholders ready for data integration
- Authentication pages are UI-only (NextAuth integration pending)
- Payment flows are structured but not connected (Razorpay-ready)
- The marketing copy on the public landing page has been simplified to remove heavy “subscription platform” and SaaS wording; it now describes Dudhpuke mainly as regular local milk delivery with simple monthly payment.

## 📄 License

Proprietary - Om Sai Pashu Palan / Dudhpuke

---

**Built with ❤️ for Dudhpuke - Bringing 20+ years of dairy trust to your doorstep.**
#   l a n d i n g - p a g e  
 #   l a n d i n g - p a g e  
 