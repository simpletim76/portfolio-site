'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export function HomelabProject() {
  return (
    <Section id="project-homelab" className="bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-950/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-6xl mb-6 block">🏠</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Homelab Infrastructure</h2>
          <p className="text-xl text-[var(--color-apple-gray)]">
            Building and maintaining a complete home server infrastructure
          </p>
        </motion.div>

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
  )
}

export function MusicProject() {
  return (
    <Section id="project-music" className="bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-6xl mb-6 block">🎵</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Music Production</h2>
          <p className="text-xl text-[var(--color-apple-gray)]">
            Creating music and exploring sound design
          </p>
        </motion.div>

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
  )
}

export function WoodworkingProject() {
  return (
    <Section id="project-woodworking" className="bg-gradient-to-b from-transparent via-amber-50/30 to-transparent dark:via-amber-950/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-6xl mb-6 block">🪵</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Woodworking</h2>
          <p className="text-xl text-[var(--color-apple-gray)]">
            Crafting with wood using traditional and modern techniques
          </p>
        </motion.div>

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
      </div>
    </Section>
  )
}
