import { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'O Nas - Zakład Pogrzebowy Nekrolog Łódź',
  description: 'Dowiedz się więcej o naszej firmie, misji i wartościach. Jesteśmy tu, aby pomagać w trudnych chwilach.',
  keywords: ['o nas', 'zakład pogrzebowy nekrolog', 'historia firmy'],
}

export default function ONasPage() {
  return <About />
}
