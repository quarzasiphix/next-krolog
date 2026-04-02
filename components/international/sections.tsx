import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, Mail, MessageCircle, Phone, Plane, ShieldCheck, Truck } from 'lucide-react'
import { type ContactChannel, type FAQEntry, type Locale, localeInfo } from '@/lib/international/content'
import type { InternationalPageType } from '@/components/international/UrgentTransportForm'

const sectionUiCopy: Record<Locale, { open: string; step: string }> = {
  pl: { open: 'Otworz', step: 'Krok' },
  en: { open: 'Open', step: 'Step' },
  de: { open: 'Offnen', step: 'Schritt' },
  fr: { open: 'Ouvrir', step: 'Etape' },
  nl: { open: 'Openen', step: 'Stap' },
  it: { open: 'Apri', step: 'Passo' },
}

export function LocalizedHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  badges,
  locale,
  pageType,
  routeSlug,
}: {
  eyebrow: string
  title: string
  description: string
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string; eventName?: string }
  badges: readonly string[]
  locale: Locale
  pageType: InternationalPageType
  routeSlug?: string
}) {
  return <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(199,152,63,0.18),_transparent_35%),linear-gradient(135deg,#101010,_#1a1a1a_45%,_#111111)]"><div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-32 lg:grid-cols-[1.2fr_0.8fr]"><div className="space-y-6"><p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-300/80">{eyebrow}</p><h1 className="max-w-4xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">{title}</h1><p className="max-w-3xl text-lg leading-8 text-stone-300 md:text-xl">{description}</p><div className="flex flex-col gap-3 sm:flex-row"><a href={primaryCta.href} data-phone-location="intl_hero" className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200">{primaryCta.label}</a>{secondaryCta ? <a href={secondaryCta.href} data-intl-event={secondaryCta.eventName} data-intl-location={secondaryCta.eventName ? 'hero' : undefined} data-intl-locale={secondaryCta.eventName ? locale : undefined} data-intl-page-type={secondaryCta.eventName ? pageType : undefined} data-intl-route-slug={secondaryCta.eventName ? routeSlug || '' : undefined} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/40 hover:bg-white/5">{secondaryCta.label}</a> : null}</div></div><div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">{badges.map((badge) => <div key={badge} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-stone-200"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" /><span>{badge}</span></div>)}</div></div></section>
}

export function UrgentContactBar({
  title,
  description,
  primaryPhone,
  whatsapp,
  locale,
  pageType,
  routeSlug,
}: {
  title: string
  description: string
  primaryPhone: ContactChannel
  whatsapp?: ContactChannel
  locale: Locale
  pageType: InternationalPageType
  routeSlug?: string
}) {
  return <section className="border-b border-amber-300/15 bg-amber-300/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">{title}</p><p className="mt-1 text-sm text-stone-200">{description}</p></div><div className="flex flex-col gap-2 sm:flex-row"><a href={primaryPhone.href} data-phone-location="intl_urgent_bar" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950"><Phone className="h-4 w-4" />{primaryPhone.value}</a>{whatsapp ? <a href={whatsapp.href} data-intl-event="intl_whatsapp_click" data-intl-location="urgent_bar" data-intl-locale={locale} data-intl-page-type={pageType} data-intl-route-slug={routeSlug || ''} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" />WhatsApp</a> : null}</div></div></section>
}

export function TrustSection({ title, items }: { title: string; items: ReadonlyArray<{ title: string; description: string }> }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><div className="mb-8 flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-amber-300" /><h2 className="text-3xl text-white">{title}</h2></div><div className="grid gap-5 md:grid-cols-3">{items.map((item) => <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><h3 className="text-xl text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p></article>)}</div></section>
}

export function ProcedureSteps({ title, steps, locale }: { title: string; steps: ReadonlyArray<{ title: string; description: string }>; locale: Locale }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{steps.map((step, index) => <article key={step.title} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{sectionUiCopy[locale].step} {index + 1}</p><h3 className="mt-3 text-xl text-white">{step.title}</h3><p className="mt-3 text-sm leading-7 text-stone-300">{step.description}</p></article>)}</div></section>
}

export function DocumentsChecklist({ title, items }: { title: string; items: ReadonlyArray<{ title: string; note: string }> }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><div className="mt-8 grid gap-4">{items.map((item) => <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5"><div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" /><div><h3 className="text-lg text-white">{item.title}</h3><p className="mt-2 text-sm leading-7 text-stone-300">{item.note}</p></div></div></div>)}</div></section>
}

export function TransportModesSection({ title, modes }: { title: string; modes: ReadonlyArray<{ title: string; description: string; type: 'road' | 'air' }> }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{modes.map((mode) => <article key={mode.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><div className="flex items-center gap-3">{mode.type === 'road' ? <Truck className="h-6 w-6 text-amber-300" /> : <Plane className="h-6 w-6 text-amber-300" />}<h3 className="text-xl text-white">{mode.title}</h3></div><p className="mt-3 text-sm leading-7 text-stone-300">{mode.description}</p></article>)}</div></section>
}

export function RouteCoverageSection({ title, description, items }: { title: string; description: string; items: string[] }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300">{description}</p><div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{items.map((item) => <div key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-stone-200">{item}</div>)}</div></section>
}

export function FAQSection({ title, entries, locale }: { title: string; entries: ReadonlyArray<FAQEntry>; locale: Locale }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><div className="mt-8 grid gap-4">{entries.map((entry) => <article key={entry.id} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5"><h3 className="text-lg text-white">{entry.questionPerLocale[locale]}</h3><p className="mt-3 text-sm leading-7 text-stone-300">{entry.answerPerLocale[locale]}</p></article>)}</div></section>
}

export function RelatedRoutes({ title, links, locale }: { title: string; links: ReadonlyArray<{ href: string; label: string; description: string }>; locale: Locale }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><h2 className="text-3xl text-white">{title}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:border-amber-300/40 hover:bg-white/[0.08]"><h3 className="text-xl text-white">{link.label}</h3><p className="mt-3 text-sm leading-7 text-stone-300">{link.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">{sectionUiCopy[locale].open} <ArrowRight className="h-4 w-4" /></span></Link>)}</div></section>
}

export function LocaleSwitcher({ currentLocale, links }: { currentLocale: Locale; links: Array<{ locale: Locale; href: string }> }) {
  return <div className="flex flex-wrap items-center gap-2">{links.map((link) => <Link key={link.locale} href={link.href} className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${link.locale === currentLocale ? 'border-amber-300 bg-amber-300 text-stone-950' : 'border-white/15 text-stone-200 hover:border-amber-300/40'}`}>{localeInfo[link.locale].label}</Link>)}</div>
}

export function StickyCallCTA({ phone, label }: { phone: string; label: string }) {
  return <a href={`tel:${phone.replace(/\s+/g, '')}`} className="fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-4 text-sm font-semibold text-stone-950 shadow-[0_10px_40px_rgba(0,0,0,0.35)] md:hidden"><Phone className="h-4 w-4" />{label}</a>
}

export function InternationalContactBox({ title, description, channels, locale }: { title: string; description: string; channels: ContactChannel[]; locale: Locale }) {
  return <section className="mx-auto max-w-7xl px-4 py-14 md:px-6"><div className="rounded-[2rem] border border-amber-300/20 bg-[linear-gradient(135deg,rgba(199,152,63,0.12),rgba(255,255,255,0.04))] p-8"><div className="flex items-center gap-3"><Globe2 className="h-6 w-6 text-amber-300" /><h2 className="text-3xl text-white">{title}</h2></div><p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300">{description}</p><div className="mt-8 grid gap-4 md:grid-cols-2">{channels.map((channel) => <a key={channel.id} href={channel.href} className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5 transition hover:border-amber-300/40"><div className="flex items-center gap-3">{channel.type === 'email' ? <Mail className="h-5 w-5 text-amber-300" /> : <Phone className="h-5 w-5 text-amber-300" />}<p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">{channel.labelPerLocale[locale]}</p></div><p className="mt-3 text-lg text-white">{channel.value}</p></a>)}</div></div></section>
}
