import { ReactNode } from 'react'
import PathBreadcrumbSchema from '@/components/structured-data/PathBreadcrumbSchema'

export default function PoradnikLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PathBreadcrumbSchema sectionRootPath="/poradnik" sectionRootName="Poradnik" />
      {children}
    </>
  )
}
