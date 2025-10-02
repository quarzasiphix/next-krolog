import { Metadata } from 'next'
import Services from '@/components/Services' // Assuming you have a component to show assortment

export const metadata: Metadata = {
  title: 'Asortyment Pogrzebowy Łódź',
  description: 'Szeroki wybór trumien, urn, odzieży pogrzebowej, wiązanek i wieńców w Łodzi.',
  keywords: ['asortyment pogrzebowy łódź', 'trumny łódź', 'urny łódź', 'wience pogrzebowe'],
}

export default function AsortymentPage() {
  return <Services /> // Replace with a proper assortment component
}
