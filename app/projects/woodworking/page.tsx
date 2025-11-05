'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function WoodworkingPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section className="bg-gradient-to-b from-transparent via-amber-50/30 to-transparent dark:via-amber-950/10">
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
            <span className="text-6xl mb-6 block">🪵</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Woodworking</h1>
            <p className="text-xl text-[var(--color-apple-gray)]">
              Crafting with wood using traditional and modern techniques
            </p>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card delay={0.1} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Projects</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Custom furniture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Home improvements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Woodturning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Small crafts
                </li>
              </ul>
            </Card>

            <Card delay={0.2} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Techniques</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Traditional joinery
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Hand tool work
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Power tool operations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Finishing & refinishing
                </li>
              </ul>
            </Card>
          </div>

          <Card delay={0.3} hover={false}>
            <p className="text-lg text-[var(--color-apple-gray)] leading-relaxed">
              Working with wood offers a tangible connection to craftsmanship. Each project teaches
              patience, precision, and problem-solving while creating functional pieces that last.
            </p>
          </Card>

          {/* Photo Album */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/20 dark:to-amber-800/20 border border-[var(--border-color)] hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <span className="text-4xl mb-2 block">🪵</span>
                      <p className="text-sm text-[var(--color-apple-gray)] group-hover:text-[var(--color-apple-blue)] transition-colors">
                        Project Photo {index}
                      </p>
                      <p className="text-xs text-[var(--color-apple-gray)] mt-2 opacity-70">
                        Add your photo here
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  )
}
