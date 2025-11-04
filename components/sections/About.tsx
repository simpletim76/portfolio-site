'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-2xl text-[var(--color-apple-gray)]">
            I'm just some guy making stuff.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
