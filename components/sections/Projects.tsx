'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'

const projects = [
  {
    title: 'Homelab Infrastructure',
    slug: 'homelab',
    description:
      'Self-hosted services, network configuration, and infrastructure automation for a complete home server setup.',
    icon: '🏠',
    tags: ['Self-Hosted', 'Networking', 'Automation'],
  },
  {
    title: 'Music Production',
    slug: 'music',
    description:
      'Audio engineering, music composition, and creative sound design projects.',
    icon: '🎵',
    tags: ['Music', 'Audio', 'Creative'],
  },
  {
    title: 'Woodworking',
    slug: 'woodworking',
    description:
      'Handcrafted furniture, custom builds, and traditional woodworking techniques.',
    icon: '🪵',
    tags: ['Crafts', 'DIY', 'Design'],
  },
]

export default function Projects() {
  return (
    <Section id="projects" className="bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-[var(--color-apple-gray)] max-w-2xl mx-auto">
          Exploring technology through hands-on projects and creative endeavors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="block"
          >
            <Card delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-[var(--color-apple-gray)] mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  )
}
