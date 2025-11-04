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
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Proxmox virtualization platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Docker containerization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Network storage (NAS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
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
