import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'

type Project = {
  slug: string
  category: string
  title: string
  role: string
  period: string
  context: string
  approach: string[]
  tools: string[]
  result: string[]
  lessons: string
}

const projectsData: Project[] = [
  {
    slug: 'sample-project',
    category: 'Web Development',
    title: 'Sample Project',
    role: 'Full Stack Developer',
    period: '2024',
    context:
      'This project focused on building a modern portfolio and product showcase experience that communicates value clearly while remaining easy to maintain.',
    approach: [
      'Mapped the product requirements into a clear user journey and content structure.',
      'Built the interface around reusable components and a consistent design system.',
      'Validated the implementation through focused polish and responsive testing.',
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    result: [
      'Delivered a polished portfolio experience with cleaner presentation of work.',
      'Improved maintainability by structuring content in a dedicated data model.',
      'Created a consistent experience across desktop and mobile layouts.',
    ],
    lessons: 'Strong product storytelling and maintainable structure matter as much as the visual design itself.',
  },
]

export async function generateStaticParams() {
  return projectsData.map((p: Project) => ({
    slug: p.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p: Project) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 mb-8">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Selected Projects
      </Link>

      <div className="space-y-3 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{project.category}</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
          <span><strong>Role:</strong> {project.role}</span>
          <span>•</span>
          <span><strong>Period:</strong> {project.period}</span>
        </div>
      </div>

      <div className="py-8 space-y-10 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Context & Challenge</h2>
          <p>{project.context}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Approach & Methodology</h2>
          <ul className="space-y-2">
            {project.approach.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Tools & Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <span key={tool} className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200">
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50">
          <h2 className="text-lg font-bold text-brand-900 dark:text-brand-300 mb-3">Key Results & Deliverables</h2>
          <ul className="space-y-2">
            {project.result.map((res: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-brand-900 dark:text-brand-200">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Key Takeaway</h2>
          <p className="italic text-slate-600 dark:text-slate-400">{project.lessons}</p>
        </section>
      </div>
    </article>
  )
}