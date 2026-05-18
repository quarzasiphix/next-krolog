'use client'

import { usePathname } from 'next/navigation'
import BreadcrumbSchema from '@/components/structured-data/BreadcrumbSchema'
import { getBreadcrumbItems, getRouteLabel, normalizePath } from '@/lib/site-navigation'

interface PathBreadcrumbSchemaProps {
  sectionRootPath: string
  sectionRootName: string
}

export default function PathBreadcrumbSchema({ sectionRootPath, sectionRootName }: PathBreadcrumbSchemaProps) {
  const pathname = usePathname() || '/'
  const normalizedPath = normalizePath(pathname)
  const normalizedSectionRoot = normalizePath(sectionRootPath)

  if (!normalizedPath.startsWith(normalizedSectionRoot)) {
    return null
  }

  const currentLabel = normalizedPath === normalizedSectionRoot ? sectionRootName : getRouteLabel(normalizedPath)
  const items = getBreadcrumbItems(normalizedPath, currentLabel)

  if (items.length > 1) {
    items[1] = { name: sectionRootName, url: normalizedSectionRoot }
  }

  return <BreadcrumbSchema items={items} />
}
