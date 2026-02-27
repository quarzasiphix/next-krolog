import { ReactNode } from 'react'
import PathBreadcrumbSchema from '@/components/structured-data/PathBreadcrumbSchema'

export default function CmentarzeLodzLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PathBreadcrumbSchema sectionRootPath="/cmentarze-lodz" sectionRootName="Cmentarze w Łodzi" />
      {children}
    </>
  )
}
