export const SITE_CONFIG = {
  name: 'Tim',
  title: 'Tim',
  description: 'Personal portfolio showcasing my homelab projects and music production.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  author: {
    name: 'Tim',
    email: 'tim@heybubitstim.com',
    github: 'simpletim76',
    twitter: '@simpletim76',
  },
}

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]
