'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { useBreadcrumbContext } from '@/components/breadcrumb-context'
import { getBreadcrumbItems, getRouteLabel } from '@/lib/site-navigation'

const Breadcrumb = ({ pathname }: { pathname?: string } = {}) => {
  const pathnameFromRouter = usePathname()
  const { overrides, hide } = useBreadcrumbContext()

  const currentPath = pathname || pathnameFromRouter || '/'

  if (hide || currentPath === '/') {
    return null
  }

  const resolveLabel = (href: string, fallbackSegment?: string) => {
    const overrideByHref = overrides.find((item) => item.href === href)
    if (overrideByHref?.label) return overrideByHref.label

    const overrideBySegment = overrides.find((item) => item.segment === fallbackSegment)
    if (overrideBySegment?.label) return overrideBySegment.label

    return getRouteLabel(href)
  }

  const crumbs = getBreadcrumbItems(currentPath).map((item) => {
    const fallbackSegment = item.url?.split('/').filter(Boolean).pop()
    return {
      href: item.url,
      label: item.url ? resolveLabel(item.url, fallbackSegment) : item.name,
    }
  })
  const visibleCrumbs = crumbs.slice(1)

  return (
    <nav className="container mx-auto px-4 py-4 text-sm mt-20" aria-label="Nawigacja okruszkowa">
      <ol className="flex flex-wrap items-center text-muted-foreground">
        <li className="flex items-center">
          <Link href="/" className="text-primary hover:underline">
            Strona główna
          </Link>
          {visibleCrumbs.length > 0 ? <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" /> : null}
        </li>
        {visibleCrumbs.map((crumb, index) => {
          const last = index === visibleCrumbs.length - 1

          return (
            <li key={`${crumb.href || crumb.label}-${index}`} className="flex items-center">
              {last ? (
                <span className="text-foreground">{crumb.label}</span>
              ) : (
                <>
                  <Link href={crumb.href || '/'} className="text-primary hover:underline">
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
