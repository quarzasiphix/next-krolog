import { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Kontakt - Zakład Pogrzebowy Nekrolog Łódź',
  description: 'Skontaktuj się z nami. Jesteśmy dostępni 24/7. Adres, telefon, formularz kontaktowy.',
  keywords: ['kontakt', 'zakład pogrzebowy kontakt', 'telefon alarmowy'],
}

export default function KontaktPage() {
  return <Contact />
}
