# Security Review Report - Portfolio Site

**Date:** 2025-11-08
**Reviewer:** Claude Code
**Repository:** simpletim76/portfolio-site
**Branch:** claude/code-review-011CUvY4ou8rPsZEKqEmoXt5

---

## Executive Summary

This security review assessed the portfolio-site codebase for common security vulnerabilities and best practices. The application is a Next.js-based static portfolio site with a blog powered by MDX.

**Overall Security Posture:** GOOD with room for improvement

The codebase demonstrates good security practices in several areas (no exposed secrets, secure dependencies, proper Docker configuration), but lacks some important security hardening measures such as security headers and input validation for future features.

---

## Findings Summary

| Severity | Count | Status |
|----------|-------|--------|
| 🔴 Critical | 0 | ✅ |
| 🟠 High | 1 | ⚠️ |
| 🟡 Medium | 4 | ⚠️ |
| 🔵 Low | 2 | ⚠️ |
| ✅ Pass | 5 | ✅ |

---

## Detailed Findings

### 🔴 Critical Severity (0)

None found.

---

### 🟠 High Severity (1)

#### H-1: Missing Security Headers

**Location:** Global configuration
**Risk:** High
**Status:** ⚠️ Vulnerable

**Description:**
The application does not implement critical HTTP security headers that protect against common web attacks.

**Impact:**
- Vulnerable to clickjacking attacks (no X-Frame-Options)
- No Content Security Policy to prevent XSS
- Missing HSTS header (HTTPS enforcement)
- No X-Content-Type-Options header (MIME sniffing protection)
- No Referrer-Policy configured

**Affected Files:**
- No middleware.ts file exists
- No security headers in next.config.ts
- No headers in vercel.json

**Recommendation:**
Create a Next.js middleware file to add security headers:

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-src https://w.soundcloud.com; connect-src 'self';"
  )

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Referrer policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // HTTPS enforcement (when deployed)
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  )

  // XSS Protection (legacy but still useful)
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Permissions Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

**References:**
- https://nextjs.org/docs/app/building-your-application/routing/middleware
- https://owasp.org/www-project-secure-headers/

---

### 🟡 Medium Severity (4)

#### M-1: Potential Path Traversal in Blog Slug Handling

**Location:**
- lib/mdx.ts:59
- lib/mdx.ts:60
- app/blog/[slug]/page.tsx:40

**Risk:** Medium
**Status:** ⚠️ Potentially Vulnerable

**Description:**
The blog slug parameter is used directly in file path construction without explicit validation against path traversal attempts.

**Vulnerable Code:**

```typescript
// lib/mdx.ts:59-60
const filePath = path.join(blogDir, `${slug}.mdx`)
const altFilePath = path.join(blogDir, `${slug}.md`)

// app/blog/[slug]/page.tsx:40
const mdxModule = await import(`@/content/blog/${slug}.mdx`)
```

**Impact:**
An attacker could potentially access files outside the intended directory by using path traversal sequences like:
- `../../../etc/passwd`
- `..%2f..%2f..%2fconfig`

While Next.js likely sanitizes route parameters, relying solely on framework protection is not defense-in-depth.

**Recommendation:**
Add explicit slug validation:

```typescript
// lib/mdx.ts
function sanitizeSlug(slug: string): string {
  // Only allow alphanumeric, hyphens, and underscores
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) {
    throw new Error('Invalid slug format')
  }
  return slug
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const sanitizedSlug = sanitizeSlug(slug)
  const blogDir = path.join(contentDirectory, 'blog')
  const filePath = path.join(blogDir, `${sanitizedSlug}.mdx`)
  // ... rest of code
}
```

---

#### M-2: Contact Form Lacks Input Validation and Sanitization

**Location:** components/sections/Contact.tsx:17-29
**Risk:** Medium
**Status:** ⚠️ To Be Implemented

**Description:**
The contact form is currently client-side only and planned for Phase 4 implementation. When implemented, it will need proper input validation and sanitization.

**Current Code:**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // TODO: Implement form submission in Phase 4
  console.log('Form submitted:', formData)
  alert('Form submission will be implemented in Phase 4!')
}
```

**Impact:**
When the form is implemented without proper validation:
- XSS attacks through malicious input
- Email injection attacks
- Spam submissions
- Buffer overflow from excessively long inputs

**Recommendation:**
When implementing the form backend:

1. Add input validation (length limits, format validation)
2. Sanitize all inputs server-side
3. Implement rate limiting
4. Add CSRF protection
5. Use a secure email service (SendGrid, AWS SES)
6. Add honeypot fields for spam prevention
7. Consider adding reCAPTCHA

Example validation:
```typescript
const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 2000

function validateContactForm(data: FormData) {
  if (data.name.length > MAX_NAME_LENGTH) {
    throw new Error('Name too long')
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error('Invalid email format')
  }

  if (data.message.length > MAX_MESSAGE_LENGTH) {
    throw new Error('Message too long')
  }

  // Sanitize inputs
  return {
    name: sanitizeHtml(data.name),
    email: sanitizeHtml(data.email),
    message: sanitizeHtml(data.message),
  }
}
```

---

#### M-3: No Rate Limiting Implementation

**Location:** Global
**Risk:** Medium
**Status:** ⚠️ Missing

**Description:**
The application has no rate limiting mechanisms to prevent abuse.

**Impact:**
- Vulnerable to brute force attacks (when form is implemented)
- Potential DoS through excessive requests
- API abuse if backend endpoints are added

**Recommendation:**
Implement rate limiting using middleware or edge functions:

1. For Vercel deployment, use Vercel's built-in rate limiting:
```json
// vercel.json
{
  "functions": {
    "api/**": {
      "maxDuration": 10
    }
  }
}
```

2. Or use a library like `@upstash/ratelimit`:
```typescript
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})
```

---

#### M-4: MDX Content Security Concerns

**Location:**
- app/blog/[slug]/page.tsx:40
- mdx-components.tsx

**Risk:** Medium
**Status:** ⚠️ Limited Impact (Currently Safe)

**Description:**
MDX content is dynamically imported and rendered without sanitization. While this is currently safe (content is author-controlled), it could become a vulnerability if user-generated content is ever allowed.

**Current Code:**
```typescript
// app/blog/[slug]/page.tsx:86
<MDXContent />
```

**Impact:**
If MDX files are ever user-generated or sourced from untrusted locations:
- Arbitrary JavaScript execution
- XSS attacks
- Component injection
- Access to React context and state

**Recommendation:**
1. Maintain strict control over MDX content sources
2. Never allow user-uploaded MDX files
3. If accepting external content, use a sanitization library
4. Document this security assumption clearly
5. Consider using a CMS with built-in security features

**Note:** Current implementation is secure as all MDX content is version-controlled and author-created.

---

### 🔵 Low Severity (2)

#### L-1: Missing rel="noopener noreferrer" on SoundCloud Embed

**Location:** app/projects/music/page.tsx:72
**Risk:** Low
**Status:** ⚠️ Vulnerable

**Description:**
The SoundCloud embed contains links with `target="_blank"` but missing the `rel="noopener noreferrer"` attribute, creating a potential tabnabbing vulnerability.

**Vulnerable Code:**
```typescript
<a href="https://soundcloud.com/..." target="_blank" style={{...}}>
```

**Impact:**
- Opened page can access the original page via `window.opener`
- Potential for reverse tabnabbing attacks
- Minor performance impact

**Recommendation:**
Add `rel="noopener noreferrer"` to the SoundCloud embed links, or better yet, request the embed code from SoundCloud with this attribute included.

**Note:** Other external links in the site properly include this attribute.

---

#### L-2: Hardcoded Localhost URL in Configuration

**Location:** lib/constants.ts:5
**Risk:** Low
**Status:** ⚠️ Configuration Issue

**Description:**
The site URL is hardcoded to localhost instead of the production URL.

```typescript
url: 'https://localhost:3000', // Update with your Cloudflare tunnel URL
```

**Impact:**
- Incorrect Open Graph and SEO metadata
- Broken canonical URLs
- Social media preview issues

**Recommendation:**
Update to use environment variables:

```typescript
export const SITE_CONFIG = {
  // ...
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  // ...
}
```

Then set `NEXT_PUBLIC_SITE_URL` in deployment environment.

---

### ✅ Security Best Practices - PASSING (5)

#### ✅ P-1: No Exposed Secrets or Credentials

**Status:** ✅ PASS

The codebase has been scanned for exposed secrets and credentials:
- No API keys, tokens, or passwords in code
- Proper .gitignore excludes .env files
- No secrets in git history (recent commits)
- Email address is public (appropriate for contact info)

**.gitignore includes:**
```
.env*
*.pem
```

---

#### ✅ P-2: Dependency Security

**Status:** ✅ PASS

All dependencies are up-to-date with no known vulnerabilities.

**npm audit results:**
```
Vulnerabilities: 0
  Critical: 0
  High: 0
  Moderate: 0
  Low: 0
```

**Dependencies:**
- Next.js 16.0.0 (latest)
- React 19.2.0 (latest)
- All other packages are current versions

**Recommendation:** Continue to run `npm audit` regularly and update dependencies.

---

#### ✅ P-3: Docker Security Configuration

**Status:** ✅ PASS

The Dockerfile follows security best practices:

**Strengths:**
- Multi-stage build reduces attack surface
- Runs as non-root user (nextjs:1001)
- Minimal base image (node:18-alpine)
- Telemetry disabled
- Proper file ownership
- Specific port exposure (3000)
- Health check configured in docker-compose.yml

**Dockerfile snippet:**
```dockerfile
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
```

---

#### ✅ P-4: Proper External Link Handling

**Status:** ✅ PASS (with one exception in L-1)

Most external links properly include `rel="noopener noreferrer"` to prevent tabnabbing:

**Examples:**
```typescript
// mdx-components.tsx:29-30
target="_blank"
rel="noopener noreferrer"

// components/sections/Contact.tsx:120-121
target="_blank"
rel="noopener noreferrer"
```

**Exception:** SoundCloud embed (see L-1)

---

#### ✅ P-5: TypeScript Type Safety

**Status:** ✅ PASS

The project uses TypeScript with strict mode enabled, providing type safety:

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "strict": true,
    // ... other strict options
  }
}
```

**Benefits:**
- Prevents type-related bugs
- Catches errors at compile time
- Improves code maintainability
- Reduces runtime errors

---

## Additional Observations

### Authentication & Authorization
**Status:** N/A - Not Required

This is a static portfolio site with no user authentication or privileged operations. No authentication framework is needed.

---

### HTTPS/TLS
**Status:** Deployment Dependent

HTTPS implementation depends on the deployment platform:
- **Vercel:** Automatic HTTPS with certificates
- **Cloudflare:** Automatic HTTPS and DDoS protection
- **Self-hosted:** Requires manual configuration

**Recommendation:** Ensure production deployment uses HTTPS and add HSTS header (see H-1).

---

### Logging & Monitoring
**Status:** Basic

Current logging:
- Console.log for form submission (development)
- Next.js built-in error logging
- Docker health checks

**Recommendation:**
For production, consider adding:
- Error monitoring (Sentry, LogRocket)
- Performance monitoring (Vercel Analytics)
- Security event logging

---

## Remediation Priority

### Immediate (Before Production Deploy)
1. **H-1:** Implement security headers via middleware
2. **L-2:** Update site URL configuration with environment variable
3. **M-1:** Add slug validation to prevent path traversal

### Before Phase 4 (Form Implementation)
1. **M-2:** Design secure form submission with validation
2. **M-3:** Implement rate limiting
3. Add CSRF protection for form

### Future Enhancements
1. **L-1:** Fix SoundCloud embed rel attribute
2. **M-4:** Document MDX content security policy
3. Add Content Security Policy reporting
4. Implement logging and monitoring

---

## Testing Recommendations

### Security Testing to Perform:

1. **Input Validation Testing**
   - Test form inputs with XSS payloads (when implemented)
   - Test SQL injection attempts (if database added)
   - Test path traversal in blog slugs

2. **Header Testing**
   - Use securityheaders.com after deploying
   - Verify CSP is not blocking legitimate resources
   - Test HSTS implementation

3. **Dependency Scanning**
   - Run `npm audit` regularly
   - Use Snyk or Dependabot for automated scanning
   - Monitor for security advisories

4. **Penetration Testing**
   - Manual testing of all user inputs
   - Automated scanning with OWASP ZAP
   - Test for common OWASP Top 10 vulnerabilities

---

## Conclusion

The portfolio-site codebase demonstrates good foundational security practices but requires hardening before production deployment. The most critical issue is the missing security headers (H-1), which should be addressed immediately.

The codebase shows security awareness in several areas:
- Proper dependency management
- Secure Docker configuration
- No exposed secrets
- Type safety with TypeScript

Key areas for improvement:
- Implement security headers
- Add input validation
- Configure rate limiting
- Prepare secure form handling for Phase 4

**Overall Risk Rating:** MEDIUM

With the recommended fixes implemented, the risk rating would improve to LOW.

---

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)

---

**Report Generated:** 2025-11-08
**Next Review Recommended:** After implementing security headers and before Phase 4 deployment
