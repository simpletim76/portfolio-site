import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import Section from '@/components/ui/Section'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Tim`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Dynamically import the MDX file
  let MDXContent
  try {
    const mdxModule = await import(`@/content/blog/${slug}.mdx`)
    MDXContent = mdxModule.default
  } catch (error) {
    console.error('Error loading MDX:', error)
    notFound()
  }

  return (
    <Section className="pt-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-[var(--color-apple-blue)] hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-[var(--color-apple-gray)] mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXContent />
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
          <Link
            href="/blog"
            className="inline-flex items-center text-[var(--color-apple-blue)] hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </Section>
  )
}
