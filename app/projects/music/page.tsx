'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function MusicPage() {
  return (
    <main className="min-h-screen pt-24">
      <Section className="bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10">
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
            <span className="text-6xl mb-6 block">🎵</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Music Production</h1>
            <p className="text-xl text-[var(--color-apple-gray)]">
              Creating music and exploring sound design
            </p>
          </motion.div>

          {/* SoundCloud Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <Card delay={0} hover={false}>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1162093066&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}>
                <a href="https://soundcloud.com/t0futim" title="the BADGUY BRIGADE" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>the BADGUY BRIGADE</a> · <a href="https://soundcloud.com/t0futim/alien-death-ray-second-version" title="Alien Death Ray (second version)" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Alien Death Ray (second version)</a>
              </div>
            </Card>
          </motion.div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card delay={0.1} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Tools & Software</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Digital Audio Workstations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  VST plugins & synthesizers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Audio interfaces & equipment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  MIDI controllers
                </li>
              </ul>
            </Card>

            <Card delay={0.2} hover={false}>
              <h3 className="text-xl font-semibold mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-[var(--color-apple-gray)]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Music composition
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Sound design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Mixing & mastering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                  Audio engineering
                </li>
              </ul>
            </Card>
          </div>

          <Card delay={0.3} hover={false}>
            <p className="text-lg text-[var(--color-apple-gray)] leading-relaxed">
              Music production combines technical knowledge with creative expression. I explore various
              genres and techniques, from electronic music to acoustic recordings, always learning
              new ways to shape sound.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  )
}
