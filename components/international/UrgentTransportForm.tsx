'use client'

import { useMemo, useState } from 'react'
import { usePostHog } from 'posthog-js/react'
import { CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react'

type FormCopy = {
  from: string
  to: string
  name: string
  phone: string
  email: string
  note: string
  submit: string
  urgentHint: string
  whatsapp: string
  call: string
  emailDraft: string
  thankYouTitle: string
  thankYouBody: string
  thankYouHint: string
  originPlaceholder: string
  destinationPlaceholder: string
  namePlaceholder: string
  phonePlaceholder: string
  emailPlaceholder: string
  notePlaceholder: string
}

const COPY: Record<string, FormCopy> = {
  pl: {
    from: 'Skąd',
    to: 'Dokąd',
    name: 'Imię',
    phone: 'Telefon',
    email: 'Email',
    note: 'Krótki opis',
    submit: 'Wyślij pilne zgłoszenie',
    urgentHint: 'Jeśli sprawa jest pilna, zadzwoń od razu na numer międzynarodowy 24/7.',
    whatsapp: 'Wyślij na WhatsApp',
    call: 'Zadzwoń teraz',
    emailDraft: 'Otwórz szkic emaila',
    thankYouTitle: 'Dziękujemy. Zajmujemy się zgłoszeniem.',
    thankYouBody: 'Zgłoszenie zostało przygotowane. Jeśli sprawa jest pilna, zadzwoń teraz lub wyślij szczegóły na WhatsApp.',
    thankYouHint: 'Oddzwonimy tak szybko, jak to możliwe, jeśli wybierzesz kontakt telefoniczny.',
    originPlaceholder: 'np. Monachium, szpital',
    destinationPlaceholder: 'np. Łódź lub inne miasto w Polsce',
    namePlaceholder: 'Twoje imię',
    phonePlaceholder: 'Numer do oddzwonienia',
    emailPlaceholder: 'Adres email',
    notePlaceholder: 'Co już wiesz: kraj, miasto, miejsce odbioru, pilność sprawy',
  },
  en: {
    from: 'From',
    to: 'To',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    note: 'Short description',
    submit: 'Send urgent request',
    urgentHint: 'If the case is urgent, call the international 24/7 number immediately.',
    whatsapp: 'Send on WhatsApp',
    call: 'Call now',
    emailDraft: 'Open email draft',
    thankYouTitle: 'Thank you. We are reviewing your request.',
    thankYouBody: 'Your request is ready. If the situation is urgent, please call now or send the details on WhatsApp.',
    thankYouHint: 'We will call back as quickly as possible if phone contact is preferred.',
    originPlaceholder: 'e.g. Munich, hospital',
    destinationPlaceholder: 'e.g. Lodz or another city in Poland',
    namePlaceholder: 'Your name',
    phonePlaceholder: 'Best callback number',
    emailPlaceholder: 'Email address',
    notePlaceholder: 'What you know so far: country, city, pickup place, urgency',
  },
  de: {
    from: 'Von',
    to: 'Nach',
    name: 'Name',
    phone: 'Telefon',
    email: 'E-Mail',
    note: 'Kurze Beschreibung',
    submit: 'Dringende Anfrage senden',
    urgentHint: 'Wenn der Fall dringend ist, rufen Sie bitte sofort die internationale 24/7 Nummer an.',
    whatsapp: 'Per WhatsApp senden',
    call: 'Jetzt anrufen',
    emailDraft: 'E-Mail-Entwurf öffnen',
    thankYouTitle: 'Danke. Wir prüfen Ihre Anfrage.',
    thankYouBody: 'Ihre Anfrage ist vorbereitet. Wenn der Fall dringend ist, rufen Sie jetzt an oder senden Sie die Details per WhatsApp.',
    thankYouHint: 'Wir rufen so schnell wie möglich zurück, wenn Telefonkontakt gewünscht ist.',
    originPlaceholder: 'z. B. München, Krankenhaus',
    destinationPlaceholder: 'z. B. Łódź oder andere Stadt in Polen',
    namePlaceholder: 'Ihr Name',
    phonePlaceholder: 'Rufnummer für Rückruf',
    emailPlaceholder: 'E-Mail-Adresse',
    notePlaceholder: 'Was Sie bereits wissen: Land, Stadt, Abholort, Dringlichkeit',
  },
  fr: {
    from: 'Départ',
    to: 'Destination',
    name: 'Prénom',
    phone: 'Téléphone',
    email: 'Email',
    note: 'Brève description',
    submit: 'Envoyer la demande urgente',
    urgentHint: 'Si la situation est urgente, appelez tout de suite le numéro international 24/7.',
    whatsapp: 'Envoyer sur WhatsApp',
    call: 'Appeler maintenant',
    emailDraft: 'Ouvrir le brouillon email',
    thankYouTitle: 'Merci. Nous traitons votre demande.',
    thankYouBody: 'Votre demande est prête. Si la situation est urgente, appelez maintenant ou envoyez les détails sur WhatsApp.',
    thankYouHint: 'Nous rappellerons dès que possible si vous préférez un contact téléphonique.',
    originPlaceholder: 'ex. Munich, hôpital',
    destinationPlaceholder: 'ex. Łódź ou autre ville en Pologne',
    namePlaceholder: 'Votre prénom',
    phonePlaceholder: 'Numéro de rappel',
    emailPlaceholder: 'Adresse email',
    notePlaceholder: 'Ce que vous savez déjà : pays, ville, lieu de prise en charge, urgence',
  },
  nl: {
    from: 'Van',
    to: 'Naar',
    name: 'Naam',
    phone: 'Telefoon',
    email: 'E-mail',
    note: 'Korte omschrijving',
    submit: 'Dringende aanvraag versturen',
    urgentHint: 'Als de situatie urgent is, bel dan direct het internationale 24/7 nummer.',
    whatsapp: 'Verstuur via WhatsApp',
    call: 'Bel nu',
    emailDraft: 'Open e-mailconcept',
    thankYouTitle: 'Dank u. Wij bekijken uw aanvraag.',
    thankYouBody: 'Uw aanvraag is voorbereid. Is de situatie urgent, bel dan nu of stuur de details via WhatsApp.',
    thankYouHint: 'Wij bellen zo snel mogelijk terug als telefonisch contact gewenst is.',
    originPlaceholder: 'bijv. München, ziekenhuis',
    destinationPlaceholder: 'bijv. Łódź of andere stad in Polen',
    namePlaceholder: 'Uw naam',
    phonePlaceholder: 'Beste terugbelnummer',
    emailPlaceholder: 'E-mailadres',
    notePlaceholder: 'Wat u al weet: land, stad, ophaalplaats, urgentie',
  },
  it: {
    from: 'Da',
    to: 'A',
    name: 'Nome',
    phone: 'Telefono',
    email: 'Email',
    note: 'Breve descrizione',
    submit: 'Invia richiesta urgente',
    urgentHint: 'Se il caso è urgente, chiama subito il numero internazionale 24/7.',
    whatsapp: 'Invia su WhatsApp',
    call: 'Chiama ora',
    emailDraft: 'Apri bozza email',
    thankYouTitle: 'Grazie. Stiamo esaminando la richiesta.',
    thankYouBody: 'La richiesta è pronta. Se la situazione è urgente, chiama ora o invia i dettagli su WhatsApp.',
    thankYouHint: 'Richiameremo il prima possibile se preferisci il contatto telefonico.',
    originPlaceholder: 'es. Monaco, ospedale',
    destinationPlaceholder: 'es. Łódź o altra città in Polonia',
    namePlaceholder: 'Il tuo nome',
    phonePlaceholder: 'Numero per richiamarti',
    emailPlaceholder: 'Indirizzo email',
    notePlaceholder: 'Cosa sai già: Paese, città, luogo di ritiro, urgenza',
  },
}

export type InternationalPageType =
  | 'home'
  | 'services'
  | 'service'
  | 'country'
  | 'city'
  | 'route'
  | 'contact'
  | 'faq'
  | 'formalities'

function submissionFeedback(locale: string) {
  const messages = {
    pl: {
      title: 'Szkic wiadomosci jest gotowy.',
      body: 'Otworzylismy szkic emaila z danymi z formularza. Jesli sytuacja jest pilna, telefon albo WhatsApp beda szybsze.',
      hint: 'Jesli program pocztowy sie nie uruchomil, skorzystaj z numeru 24/7 lub wyslij szczegoly przez WhatsApp.',
    },
    en: {
      title: 'Your draft message is ready.',
      body: 'We opened an email draft with the form details. If the case is urgent, calling or using WhatsApp will be faster.',
      hint: 'If your email app did not open, please use the 24/7 phone number or send the details on WhatsApp.',
    },
    de: {
      title: 'Der Nachrichtenentwurf ist bereit.',
      body: 'Wir haben einen E-Mail-Entwurf mit den Formulardaten geoffnet. Wenn der Fall dringend ist, sind Telefon oder WhatsApp schneller.',
      hint: 'Falls sich Ihr E-Mail-Programm nicht geoffnet hat, nutzen Sie bitte die 24/7 Nummer oder WhatsApp.',
    },
    fr: {
      title: 'Le brouillon du message est pret.',
      body: 'Nous avons ouvert un brouillon email avec les informations du formulaire. Si la situation est urgente, le telephone ou WhatsApp seront plus rapides.',
      hint: 'Si votre messagerie ne s est pas ouverte, utilisez le numero 24/7 ou WhatsApp.',
    },
    nl: {
      title: 'Uw conceptbericht is klaar.',
      body: 'We hebben een e-mailconcept geopend met de gegevens uit het formulier. Is de situatie urgent, dan zijn bellen of WhatsApp sneller.',
      hint: 'Als uw e-mailapp niet is geopend, gebruik dan het 24/7 nummer of WhatsApp.',
    },
    it: {
      title: 'La bozza del messaggio e pronta.',
      body: 'Abbiamo aperto una bozza email con i dati del modulo. Se la situazione e urgente, telefono o WhatsApp saranno piu rapidi.',
      hint: 'Se il programma di posta non si e aperto, usa il numero 24/7 o WhatsApp.',
    },
  } as const

  return messages[locale as keyof typeof messages] || messages.en
}

function track(posthog: ReturnType<typeof usePostHog>, event: string, properties: Record<string, unknown>) {
  if (posthog) {
    posthog.capture(event, properties, { send_instantly: true })
  }
}

export default function UrgentTransportForm({
  title,
  summary,
  locale,
  pageType,
  routeSlug,
  originDefault = '',
  destinationDefault = 'Poland',
  whatsappUrl,
  internationalPhone,
}: {
  title: string
  summary: string
  locale: string
  pageType: InternationalPageType
  routeSlug?: string
  originDefault?: string
  destinationDefault?: string
  whatsappUrl: string
  internationalPhone: string
}) {
  const posthog = usePostHog()
  const labels = COPY[locale] || COPY.en
  const submittedCopy = submissionFeedback(locale)
  const [hasStarted, setHasStarted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [form, setForm] = useState({
    from: originDefault,
    to: destinationDefault,
    name: '',
    phone: '',
    email: '',
    note: '',
  })

  const payload = useMemo(
    () =>
      [
        `${labels.from}: ${form.from}`,
        `${labels.to}: ${form.to}`,
        `${labels.name}: ${form.name}`,
        `${labels.phone}: ${form.phone}`,
        `${labels.email}: ${form.email}`,
        `${labels.note}: ${form.note}`,
        `locale: ${locale}`,
        `page_type: ${pageType}`,
        `route_slug: ${routeSlug || ''}`,
      ].join('\n'),
    [form, labels, locale, pageType, routeSlug],
  )

  const encodedSubject = encodeURIComponent(title)
  const encodedBody = encodeURIComponent(payload)
  const emailHref = `mailto:kontakt@nekrolog-lodz.com?subject=${encodedSubject}&body=${encodedBody}`
  const whatsappHref = `${whatsappUrl}${whatsappUrl.includes('?') ? '&' : '?'}text=${encodedBody}`

  function handleStart(field: string) {
    if (hasStarted) return
    setHasStarted(true)
    track(posthog, 'intl_form_start', {
      locale,
      page_type: pageType,
      route_slug: routeSlug || null,
      field,
    })
  }

  function updateField(field: keyof typeof form, value: string) {
    handleStart(field)
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    track(posthog, 'intl_form_submit', {
      locale,
      page_type: pageType,
      route_slug: routeSlug || null,
      source_location: form.from,
      destination_location: form.to,
      preferred_contact_method: 'email_draft',
    })
    window.location.href = emailHref
    setIsSubmitted(true)
    track(posthog, 'intl_form_submit_success', {
      locale,
      page_type: pageType,
      route_slug: routeSlug || null,
      source_location: form.from,
      destination_location: form.to,
      delivery_mode: 'mailto',
    })
  }

  if (isSubmitted) {
    return (
      <div id="international-form" className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-500/10 p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-6 w-6 text-emerald-300" />
          <div>
            <h3 className="text-2xl font-playfair text-white">{submittedCopy.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-200">{submittedCopy.body}</p>
            <p className="mt-2 text-sm leading-7 text-stone-300">{submittedCopy.hint}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${internationalPhone.replace(/\s+/g, '')}`}
            data-phone-location={`${pageType}_thank_you`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-950"
          >
            <Phone className="h-4 w-4" />
            {labels.call}
          </a>
          <a href={emailHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white">
            <Mail className="h-4 w-4" />
            {labels.emailDraft}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-intl-event="intl_whatsapp_click"
            data-intl-location="thank_you"
            data-intl-locale={locale}
            data-intl-page-type={pageType}
            data-intl-route-slug={routeSlug || ''}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle className="h-4 w-4" />
            {labels.whatsapp}
          </a>
        </div>
      </div>
    )
  }

  return (
    <form id="international-form" onSubmit={handleSubmit} className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="space-y-3">
        <h3 className="text-2xl font-playfair text-white">{title}</h3>
        <p className="text-sm leading-7 text-stone-300">{summary}</p>
      </div>

      <div className="mt-6 grid gap-4">
        <input value={form.from} onChange={(event) => updateField('from', event.target.value)} placeholder={labels.originPlaceholder} aria-label={labels.from} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
        <input value={form.to} onChange={(event) => updateField('to', event.target.value)} placeholder={labels.destinationPlaceholder} aria-label={labels.to} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
        <input value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder={labels.namePlaceholder} aria-label={labels.name} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
        <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder={labels.phonePlaceholder} aria-label={labels.phone} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
        <input value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder={labels.emailPlaceholder} aria-label={labels.email} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
        <textarea value={form.note} onChange={(event) => updateField('note', event.target.value)} placeholder={labels.notePlaceholder} aria-label={labels.note} className="min-h-28 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-amber-300/50" />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-950">
          <Mail className="h-4 w-4" />
          {labels.submit}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-intl-event="intl_whatsapp_click"
          data-intl-location="form"
          data-intl-locale={locale}
          data-intl-page-type={pageType}
          data-intl-route-slug={routeSlug || ''}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          {labels.whatsapp}
        </a>
      </div>

      <p className="mt-4 text-sm leading-7 text-stone-400">{labels.urgentHint}</p>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="page_type" value={pageType} />
      <input type="hidden" name="route_slug" value={routeSlug || ''} />
    </form>
  )
}
