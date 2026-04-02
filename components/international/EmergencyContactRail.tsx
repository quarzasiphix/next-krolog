import UrgentTransportForm, { type InternationalPageType } from '@/components/international/UrgentTransportForm'
import { POLAND_LABELS, type Locale } from '@/lib/international/content'

const railCopy: Record<Locale, { label: string; bullets: string[] }> = {
  pl: {
    label: 'Kontakt miedzynarodowy 24/7',
    bullets: [
      'Osobna sciezka kontaktu dla transportu z zagranicy',
      'Widoczna na telefonie i desktopie przez cala strone',
      'Telefon, WhatsApp albo formularz bez szukania kolejnego kroku',
    ],
  },
  en: {
    label: 'International 24/7',
    bullets: [
      'Separate contact path for transport from abroad',
      'Visible on mobile and desktop across the whole page',
      'Call, WhatsApp or form without searching for the next step',
    ],
  },
  de: {
    label: 'International 24/7',
    bullets: [
      'Separater Kontaktweg fuer Transporte aus dem Ausland',
      'Auf Mobilgeraeten und Desktop ueber die ganze Seite sichtbar',
      'Anruf, WhatsApp oder Formular ohne nach dem naechsten Schritt zu suchen',
    ],
  },
  fr: {
    label: 'International 24/7',
    bullets: [
      'Parcours de contact distinct pour un transport depuis l etranger',
      'Visible sur mobile et desktop tout au long de la page',
      'Appel, WhatsApp ou formulaire sans chercher la prochaine action',
    ],
  },
  nl: {
    label: 'Internationaal 24/7',
    bullets: [
      'Aparte contactroute voor vervoer vanuit het buitenland',
      'Zichtbaar op mobiel en desktop op de hele pagina',
      'Bellen, WhatsApp of formulier zonder naar de volgende stap te zoeken',
    ],
  },
  it: {
    label: 'Internazionale 24/7',
    bullets: [
      'Percorso di contatto separato per il trasporto dall estero',
      'Visibile su mobile e desktop lungo tutta la pagina',
      'Chiamata, WhatsApp o modulo senza cercare il passo successivo',
    ],
  },
}

export default function EmergencyContactRail({
  title,
  summary,
  locale,
  pageType,
  routeSlug,
  fromLabel,
  internationalPhone,
  whatsappUrl,
}: {
  title: string
  summary: string
  locale: Locale
  pageType: InternationalPageType
  routeSlug?: string
  fromLabel?: string
  internationalPhone: string
  whatsappUrl: string
}) {
  const copy = railCopy[locale]

  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="rounded-[1.75rem] border border-amber-300/20 bg-amber-300/10 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">{copy.label}</p>
        <h3 className="mt-3 text-2xl font-playfair text-white">{internationalPhone}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-300">{summary}</p>
        <div className="mt-4 grid gap-2 text-sm text-stone-200">
          {copy.bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              {bullet}
            </div>
          ))}
        </div>
      </div>
      <UrgentTransportForm
        title={title}
        summary={summary}
        locale={locale}
        pageType={pageType}
        routeSlug={routeSlug}
        originDefault={fromLabel || ''}
        destinationDefault={POLAND_LABELS[locale]}
        whatsappUrl={whatsappUrl}
        internationalPhone={internationalPhone}
      />
    </aside>
  )
}
