'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function HomelabPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section className="bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-950/10">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-[var(--color-apple-blue)] hover:text-[var(--color-apple-blue-dark)] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-6xl mb-6 block">🏠</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Homelab Infrastructure</h1>
            <p className="text-xl text-[var(--color-apple-gray)]">
              Building and maintaining a complete home server infrastructure
            </p>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card delay={0.1} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#E57000"/>
                  </svg>
                  Proxmox virtualization platform
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V8.76a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 1-.18-.18V6.27a.18.18 0 0 1 .18-.18h2.12a.19.19 0 0 0 .19-.19V3.77a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 1-.18-.18V1.28a.19.19 0 0 0-.19-.19H11.5a.19.19 0 0 0-.19.19V3.4a.18.18 0 0 1-.18.18H9.01a.19.19 0 0 0-.19.19V5.9c0 .1.08.18.19.18h2.12a.18.18 0 0 1 .18.18v2.12a.18.18 0 0 1-.18.18H9.01a.19.19 0 0 0-.19.19v2.13c0 .1.08.19.19.19h2.12a.18.18 0 0 1 .18.18v2.12a.18.18 0 0 1-.18.18H9.01a.19.19 0 0 0-.19.19v2.13c0 .1.08.19.19.19h2.12a.18.18 0 0 1 .18.18v2.12a.18.18 0 0 1-.18.18H9.01a.19.19 0 0 0-.19.19v2.13c0 .1.08.19.19.19h2.12a.18.18 0 0 1 .18.18v2.12c0 .1.09.19.19.19h2.12a.19.19 0 0 0 .19-.19v-2.12a.18.18 0 0 1 .18-.18h2.12a.19.19 0 0 0 .19-.19v-2.13a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 1-.18-.18v-2.12a.18.18 0 0 1 .18-.18h2.12a.19.19 0 0 0 .19-.19v-2.13a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 1-.18-.18v-2.12a.18.18 0 0 1 .18-.18z" fill="#2496ED"/>
                  </svg>
                  Docker containerization
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                  </svg>
                  Network storage (NAS)
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Media server (Plex/Jellyfin)
                </li>
              </ul>
            </Card>

            <Card delay={0.2} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Automated backups
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  VPN & remote access
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Network monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Custom DNS & ad-blocking
                </li>
              </ul>
            </Card>
          </div>

          <Card delay={0.3} hover={false}>
            <p className="text-lg text-[var(--color-apple-gray)] leading-relaxed">
              My homelab serves as a learning platform and production environment for self-hosted services.
              From virtualization to network configuration, it's a hands-on approach to understanding
              infrastructure and system administration.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  )
}
