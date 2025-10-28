'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const skills = [
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Linux', 'Networking'] },
  { category: 'Development', items: ['TypeScript', 'Python', 'React', 'Next.js'] },
  { category: 'Creative', items: ['Music Production', 'Audio Engineering'] },
]

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-2xl text-[var(--color-apple-gray)]">
            I'm just some guy making stuff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.category} delay={index * 0.1} hover={false}>
              <h3 className="text-xl font-semibold mb-3 text-center">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--color-apple-gray)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-apple-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
