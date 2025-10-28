import Link from 'next/link'
import { getBlogPosts } from '@/lib/mdx'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Blog - Tim',
  description: 'Technical articles, project updates, and insights.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <Section className="pt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-xl text-[var(--color-apple-gray)] mb-12 text-center">
          Technical articles, project updates, and insights from my journey.
        </p>

        {posts.length === 0 ? (
          <Card>
            <p className="text-center text-[var(--color-apple-gray)]">
              No blog posts yet. Check back soon!
            </p>
          </Card>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold mb-2 hover:text-[var(--color-apple-blue)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[var(--color-apple-gray)] mb-3">{post.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-[var(--color-apple-gray)]">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
