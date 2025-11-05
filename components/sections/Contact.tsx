'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { SITE_CONFIG } from '@/lib/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission in Phase 4
    console.log('Form submitted:', formData)
    alert('Form submission will be implemented in Phase 4!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Say hey!</h2>
        <p className="text-xl text-[var(--color-apple-gray)] max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-white/50 dark:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-apple-blue)] transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-white/50 dark:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-apple-blue)] transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-white/50 dark:bg-black/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-apple-blue)] transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--color-apple-gray)] mb-4">Or reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${SITE_CONFIG.author.email}`}
              className="text-[var(--color-apple-blue)] hover:underline"
            >
              Email
            </a>
            <a
              href={`https://github.com/${SITE_CONFIG.author.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-apple-blue)] hover:underline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
