import { Metadata } from 'next'
import HomePageClient from '@/components/HomePageClient'

export const metadata: Metadata = {
  title: 'Nekrolog Łódź - Usługi Pogrzebowe Jolanta Kostowska | Całodobowo',
  description: 'Profesjonalny zakład pogrzebowy Nekrolog Łódź Jolanta Kostowska. Kompleksowe usługi pogrzebowe, organizacja ceremonii, kremacja, transport. Dostępni całodobowo. Tel: +48 602 274 661.',
  keywords: ['usługi pogrzebowe łódź', 'zakład pogrzebowy łódź', 'dom pogrzebowy łódź', 'nekrolog łódź', 'jolanta kostowska', 'pogrzeby łódź', 'kremacja łódź', 'transport zwłok łódź', 'całodobowy zakład pogrzebowy'],
}

export default function HomePage() {
  return (
    <HomePageClient />
  )
}
