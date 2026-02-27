'use client'

import { usePathname } from 'next/navigation'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'

interface PathBreadcrumbSchemaProps {
  sectionRootPath: string
  sectionRootName: string
}

const formatSegment = (segment: string) =>
  segment
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export default function PathBreadcrumbSchema({ sectionRootPath, sectionRootName }: PathBreadcrumbSchemaProps) {
  const pathname = usePathname()
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const segments = normalizedPath.split('/').filter(Boolean)

  const items: Array<{ name: string; url?: string }> = [{ name: 'Strona Główna', url: '/' }]

  if (!segments.length) {
    return <BreadcrumbSchema items={items} />
  }

  items.push({ name: sectionRootName, url: sectionRootPath })

  if (normalizedPath === sectionRootPath) {
    return <BreadcrumbSchema items={items} />
  }

  const sectionSegments = sectionRootPath.split('/').filter(Boolean).length
  const remaining = segments.slice(sectionSegments)

  remaining.forEach((segment, index) => {
    const isLast = index === remaining.length - 1
    const url = `/${segments.slice(0, sectionSegments + index + 1).join('/')}`

    items.push({
      name: formatSegment(segment),
      ...(isLast ? {} : { url }),
    })
  })

  return <BreadcrumbSchema items={items} />
}
