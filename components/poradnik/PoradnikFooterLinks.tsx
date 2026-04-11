'use client'

import { usePathname } from 'next/navigation'
import RelatedLinks from '@/components/RelatedLinks'

const PoradnikFooterLinks = () => {
  const pathname = usePathname() || '/poradnik'

  return (
    <div className="container mx-auto px-4 pb-16">
      <RelatedLinks
        pathname={pathname}
        heading={pathname === '/poradnik' ? 'Powiązane usługi i kolejne kroki' : 'Powiązane usługi, poradniki i kontakt'}
        intro={
          pathname === '/poradnik'
            ? 'Poradnik odpowiada na pytania, ale rodzina zwykle potrzebuje też szybkiego przejścia do usługi, kontaktu albo strony o rozliczeniu bez zaliczki.'
            : 'Po przeczytaniu poradnika rodzina może od razu przejść do usługi, formalności albo kontaktu z zakładem pogrzebowym.'
        }
      />
    </div>
  )
}

export default PoradnikFooterLinks
