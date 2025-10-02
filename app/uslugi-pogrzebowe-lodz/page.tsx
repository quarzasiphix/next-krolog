import { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Usługi Pogrzebowe Łódź',
  description: 'Kompleksowe usługi pogrzebowe w Łodzi. Organizacja ceremonii, kremacja, transport i więcej.',
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', 'dom pogrzebowy łódź'],
}

export default function UslugiPogrzebowePage() {
  return <Services />
}
