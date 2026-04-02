import Link from 'next/link'
import type { InternationalLocale } from '@/lib/international-seo'

export default function LanguageSwitcher({
  currentLocale,
  alternates,
}: {
  currentLocale: InternationalLocale
  alternates: Record<InternationalLocale, string>
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(Object.keys(alternates) as InternationalLocale[]).map((locale) => (
        <Link
          key={locale}
          href={alternates[locale]}
          className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] transition ${
            locale === currentLocale
              ? 'border-primary bg-primary/15 text-primary'
              : 'border-white/10 bg-white/5 text-gray-300 hover:border-primary/40 hover:text-white'
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  )
}
