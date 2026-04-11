import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { ResolvedRelatedGroup } from '@/lib/site-navigation'
import { getRelatedGroups } from '@/lib/site-navigation'

type RelatedLinksProps = {
  pathname: string
  heading?: string
  intro?: string
  groups?: ResolvedRelatedGroup[]
  className?: string
}

const RelatedLinks = ({
  pathname,
  heading = 'Powiązane strony',
  intro = 'Przejdź dalej do usług, poradników i kontaktu, które pomagają rodzinie wykonać następny krok.',
  groups,
  className = '',
}: RelatedLinksProps) => {
  const resolvedGroups = groups || getRelatedGroups(pathname)

  if (!resolvedGroups.length) {
    return null
  }

  return (
    <section className={`mt-16 rounded-[1.75rem] border border-white/10 bg-black/30 p-6 md:p-8 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-playfair text-white">{heading}</h2>
          <p className="mt-3 text-sm leading-7 text-gray-300">{intro}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {resolvedGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-xl font-playfair text-white">{group.title}</h3>
              {group.description ? <p className="mt-2 text-sm leading-6 text-gray-400">{group.description}</p> : null}
              <div className="mt-5 grid gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-xl border border-white/10 bg-black/50 px-4 py-4 transition hover:border-primary/40 hover:bg-black/70"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-base font-medium text-white">{link.label}</p>
                        <p className="mt-1 text-sm leading-6 text-gray-400">{link.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary transition group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedLinks
