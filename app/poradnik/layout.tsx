import { ReactNode } from 'react'
import PathBreadcrumbSchema from '@/components/structured-data/PathBreadcrumbSchema'
import PoradnikArticleSchema from '@/components/structured-data/PoradnikArticleSchema'

export default function PoradnikLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PathBreadcrumbSchema sectionRootPath="/poradnik" sectionRootName="Poradnik" />
      <PoradnikArticleSchema />
      {children}
    </>
  )
}
