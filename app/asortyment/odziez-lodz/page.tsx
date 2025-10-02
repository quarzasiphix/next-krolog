import { Metadata } from 'next'
import ServiceLayout from '@/components/ServiceLayout'
import { IMAGES } from '@/assets/images'

export const metadata: Metadata = {
  title: 'Odzież Pogrzebowa Łódź',
  description: 'Elegancka odzież dla zmarłych dostępna w naszym zakładzie pogrzebowym w Łodzi.',
  keywords: ['odzież pogrzebowa łódź', 'ubrania dla zmarłych', 'garnitur do trumny'],
}

export default function OdziezPage() {
  return (
    <ServiceLayout
      title="Odzież Pogrzebowa"
      description="Oferujemy szeroki wybór eleganckiej odzieży dla zmarłych, aby zapewnić godny wygląd na ostatniej drodze."
      backgroundImage={IMAGES.subpages.odziez}
    >
      {/* Add content here */}
    </ServiceLayout>
  )
}
