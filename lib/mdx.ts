import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags?: string[]
  coverImage?: string
  readingTime: string
  content: string
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = files
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const filePath = path.join(blogDir, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
        tags: data.tags || [],
        coverImage: data.coverImage,
        readingTime: stats.text,
        content,
      } as BlogPost
    })
    .sort((a, b) => {
      if (new Date(a.date) > new Date(b.date)) {
        return -1
      }
      return 1
    })

  return posts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  const blogDir = path.join(contentDirectory, 'blog')
  const filePath = path.join(blogDir, `${slug}.mdx`)
  const altFilePath = path.join(blogDir, `${slug}.md`)

  let fileContents: string

  if (fs.existsSync(filePath)) {
    fileContents = fs.readFileSync(filePath, 'utf8')
  } else if (fs.existsSync(altFilePath)) {
    fileContents = fs.readFileSync(altFilePath, 'utf8')
  } else {
    return undefined
  }

  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
    tags: data.tags || [],
    coverImage: data.coverImage,
    readingTime: stats.text,
    content,
  }
}
