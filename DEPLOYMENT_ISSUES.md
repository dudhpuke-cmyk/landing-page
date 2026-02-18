# 🚨 Deployment Issues & Fixes

This document outlines critical issues that could cause deployment failures and their solutions.

## Critical Issues Found

### 1. ❌ **Prisma Client Not Generated During Build**
**Problem**: The build process will fail because Prisma Client is not generated before Next.js tries to compile the code that imports `@prisma/client`.

**Error Expected**:
```
Error: Cannot find module '@prisma/client' or its corresponding type declarations.
```

**Root Cause**: 
- No `postinstall` script in `package.json` to run `prisma generate`
- Prisma Client must be generated before TypeScript compilation

**Fix Applied**: ✅ Added `postinstall` script to `package.json`

---

### 2. ❌ **Prisma Client Initialization Fails Without DATABASE_URL**
**Problem**: Even if you're not using the database yet, importing `lib/prisma.ts` will cause Prisma to throw an error if `DATABASE_URL` is missing or invalid.

**Error Expected**:
```
Error: Can't reach database server at `localhost:5432`
Error: P1001: Can't reach database server
```

**Root Cause**:
- `lib/prisma.ts` creates `PrismaClient` unconditionally
- Prisma validates `DATABASE_URL` on instantiation
- No graceful handling for missing/invalid database connection

**Fix Applied**: ✅ Added conditional Prisma client creation with proper error handling

---

### 3. ❌ **Hardcoded API Key in README.md**
**Problem**: The README.md contains a hardcoded Resend API key (`re_7gwzUZw3_FqDCocVuPUDM32hcB1FLqUF5`) which is a security risk.

**Security Risk**:
- API keys exposed in version control
- Anyone with repo access can see the key
- Key could be used maliciously

**Fix Applied**: ✅ Removed hardcoded key, replaced with placeholder

---

### 4. ❌ **Missing .env.example File**
**Problem**: No reference file for required environment variables, making deployment configuration unclear.

**Impact**:
- Developers don't know what env vars are needed
- Deployment platforms (Vercel, Railway, etc.) require manual configuration
- Easy to miss required variables

**Fix Applied**: ✅ Created `.env.example` with all required variables

---

### 5. ❌ **Email Sender Using Test Domain**
**Problem**: `lib/resend.ts` uses `onboarding@resend.dev` which is Resend's test sender. This will work in development but may be blocked or rate-limited in production.

**Production Issues**:
- Test domain may not work in production
- Emails might be marked as spam
- No domain verification

**Fix Applied**: ✅ Made email sender configurable via `RESEND_FROM_EMAIL` environment variable

---

### 6. ❌ **Next.js Standalone Output Configuration**
**Problem**: `next.config.js` uses `output: 'standalone'` which requires specific deployment setup. If not configured correctly, the build may fail or the app won't start.

**Deployment Considerations**:
- Requires proper Node.js runtime
- Needs all dependencies in `.next/standalone`
- May need custom server setup

**Status**: ⚠️ Configuration is valid but requires proper deployment platform support

---

### 7. ❌ **No Build-Time Environment Variable Validation**
**Problem**: Missing environment variables won't be caught until runtime, causing production errors.

**Impact**:
- App builds successfully but fails at runtime
- Hard to debug in production
- Poor user experience

**Recommendation**: Consider adding build-time validation (not implemented to avoid breaking current setup)

---

### 8. ❌ **Missing Prisma Migration Setup**
**Problem**: No instructions or scripts for running database migrations in production.

**Impact**:
- Database schema won't be applied automatically
- Manual intervention required for deployments
- Risk of schema drift

**Status**: ⚠️ Documented in README but no automated migration script

---

## Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are set in your deployment platform
- [ ] `DATABASE_URL` is set (even if not using database yet, set a dummy value)
- [ ] `RESEND_API_KEY` is set for email functionality
- [ ] `RESEND_FROM_EMAIL` is set (or defaults to test domain)
- [ ] `NEXTAUTH_SECRET` is set (if using NextAuth)
- [ ] `NEXTAUTH_URL` matches your production domain
- [ ] Prisma Client is generated (handled by postinstall script)
- [ ] Database migrations are run (if using database)

---

## Platform-Specific Notes

### Vercel
- ✅ Automatically runs `postinstall` scripts
- ✅ Supports Next.js standalone output
- ⚠️ Set all environment variables in Vercel dashboard
- ⚠️ Run `prisma migrate deploy` in build command if using database

### Railway
- ✅ Supports Next.js standalone output
- ⚠️ Add `prisma generate` to build command if needed
- ⚠️ Set environment variables in Railway dashboard

### Docker
- ✅ Standalone output works well with Docker
- ⚠️ Ensure `DATABASE_URL` is available at build time (if needed)
- ⚠️ Run migrations in entrypoint script

---

## Fixed Issues Summary

✅ **Fixed**: Prisma client generation via postinstall script  
✅ **Fixed**: Graceful Prisma client initialization without DATABASE_URL  
✅ **Fixed**: Removed hardcoded API key from README  
✅ **Fixed**: Created .env.example file  
✅ **Fixed**: Made email sender configurable via environment variable  
✅ **Fixed**: Updated README with deployment instructions  

---

## Testing Deployment Locally

To test the deployment build locally:

```bash
# 1. Set environment variables
cp .env.example .env
# Edit .env with your values

# 2. Install dependencies (runs postinstall automatically)
npm install

# 3. Build the application
npm run build

# 4. Start production server
npm start
```

If the build succeeds, your deployment should work on most platforms.

---

**Last Updated**: Generated automatically during deployment audit
