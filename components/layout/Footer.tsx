import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-[var(--color-apple-gray)]">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--color-apple-gray)] hover:text-[var(--color-apple-blue)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[var(--color-apple-gray)] hover:text-[var(--color-apple-blue)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sm text-[var(--color-apple-gray)] hover:text-[var(--color-apple-blue)] transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://github.com/${SITE_CONFIG.author.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-apple-gray)] hover:text-[var(--color-apple-blue)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.author.email}`}
                  className="text-sm text-[var(--color-apple-gray)] hover:text-[var(--color-apple-blue)] transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <p className="text-center text-sm text-[var(--color-apple-gray)]">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
