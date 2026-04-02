import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EmergencyContactRail from '@/components/international/EmergencyContactRail'
import { DocumentsChecklist, FAQSection, InternationalContactBox, LocalizedHero, ProcedureSteps, RelatedRoutes, RouteCoverageSection, TransportModesSection, TrustSection, UrgentContactBar } from '@/components/international/section-components'
import StickyContactBar from '@/components/international/StickyContactBar'
import { StructuredData } from '@/components/international/StructuredData'
import { POLAND_LABELS, buildLocalizedPath, buildRouteSlug, getAllIntlParams, getDocumentRequirements, getFaqEntries, getFeaturedRoutes, getPagePath, getRelatedRoutes, internationalContactChannels, isSupportedLocale, localeInfo, resolveIntlPage, serviceCatalog, type Locale, type ResolvedIntlPage } from '@/lib/international/content'
import { copyPack } from '@/lib/international/localization-copy'
import { buildIntlMetadata } from '@/lib/international/seo'
import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

function text(locale: Locale, values: Record<Locale, string>) {
  return values[locale]
}

function getRouteCopyKey(page: ResolvedIntlPage) {
  if (page.kind !== 'route') return null
  if (page.city.code === 'munich') return 'munichRoute'
  if (page.city.code === 'berlin') return 'berlinRoute'
  if (page.city.code === 'paris') return 'parisRoute'
  if (page.city.code === 'amsterdam') return 'amsterdamRoute'
  if (page.city.code === 'london') return 'londonRoute'
  return null
}

function getManualCopy(page: ResolvedIntlPage) {
  if (page.kind === 'service' && page.service.key === 'international-transport') {
    return copyPack.internationalTransportPage?.[page.locale]
  }
  const routeKey = getRouteCopyKey(page)
  return routeKey ? copyPack[routeKey]?.[page.locale] : null
}

function displayTitle(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'route') return page.city.seoTitleTemplate[locale]
  if (page.kind === 'city') {
    return text(locale, {
      pl: `Odbior i organizacja transportu z ${page.city.namesPerLocale.pl}`,
      en: `Collection and organisation from ${page.city.namesPerLocale.en}`,
      de: `Abholung und Organisation aus ${page.city.namesPerLocale.de}`,
      fr: `Prise en charge et organisation depuis ${page.city.namesPerLocale.fr}`,
      nl: `Ophaling en organisatie vanuit ${page.city.namesPerLocale.nl}`,
      it: `Presa in carico e organizzazione da ${page.city.namesPerLocale.it}`,
    })
  }
  if (page.kind === 'country') {
    return text(locale, {
      pl: `Transport zwlok z ${page.country.namesPerLocale.pl} do Polski`,
      en: `Repatriation from ${page.country.namesPerLocale.en} to Poland`,
      de: `Uberfuhrung aus ${page.country.namesPerLocale.de} nach Polen`,
      fr: `Rapatriement depuis ${page.country.namesPerLocale.fr} vers la Pologne`,
      nl: `Vervoer van overledenen vanuit ${page.country.namesPerLocale.nl} naar Polen`,
      it: `Rimpatrio da ${page.country.namesPerLocale.it} verso la Polonia`,
    })
  }
  if (page.kind === 'service') return page.service.namePerLocale[locale]
  return pageTitle(page)
}

function pageTitle(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'service') {
    if (page.service.key === 'international-transport') {
      return text(locale, {
        pl: 'Miedzynarodowy transport zwlok do Polski | Kontakt 24/7 i formalnosci',
        en: 'International transport of remains to Poland | 24/7 contact and paperwork',
        de: 'Internationale Uberfuhrung nach Polen | 24/7 Kontakt und Formalitaten',
        fr: 'Transport funeraire international vers la Pologne | Contact 24/7 et demarches',
        nl: 'Internationaal vervoer van overledenen naar Polen | 24/7 contact en formaliteiten',
        it: 'Trasporto internazionale della salma verso la Polonia | Contatto 24/7 e formalita',
      })
    }
    if (page.service.key === 'repatriation-to-poland') {
      return text(locale, {
        pl: 'Sprowadzenie zmarlego do Polski | Pomoc 24/7 i spokojna organizacja',
        en: 'Bringing the deceased to Poland | Calm 24/7 support',
        de: 'Uberfuhrung nach Polen | Ruhige Organisation und Hilfe 24/7',
        fr: 'Rapatriement vers la Pologne | Accompagnement calme 24/7',
        nl: 'Overbrenging naar Polen | Rustige hulp 24/7',
        it: 'Rimpatrio verso la Polonia | Assistenza serena 24/7',
      })
    }
    if (page.service.key === 'air-transport') {
      return text(locale, {
        pl: 'Transport lotniczy zmarlych do Polski | Kiedy ma sens i jak wyglada',
        en: 'Air transport of remains to Poland | When it is needed and how it works',
        de: 'Lufttransport Verstorbener nach Polen | Wann er sinnvoll ist und wie er ablauft',
        fr: 'Transport aerien du defunt vers la Pologne | Quand il est utile et comment il fonctionne',
        nl: 'Luchtvervoer van overledenen naar Polen | Wanneer het nodig is en hoe het werkt',
        it: 'Trasporto aereo della salma verso la Polonia | Quando serve e come funziona',
      })
    }
    return page.service.namePerLocale[locale]
  }
  if (page.kind === 'country') {
    return text(locale, {
      pl: `Transport zwlok z ${page.country.namesPerLocale.pl} do Polski | Formalnosci i kontakt 24/7`,
      en: `Repatriation from ${page.country.namesPerLocale.en} to Poland | 24/7 support`,
      de: `Uberfuhrung aus ${page.country.namesPerLocale.de} nach Polen | 24/7 Kontakt`,
      fr: `Rapatriement depuis ${page.country.namesPerLocale.fr} vers la Pologne | Contact 24/7`,
      nl: `Vervoer van overledenen vanuit ${page.country.namesPerLocale.nl} naar Polen | 24/7 contact`,
      it: `Rimpatrio da ${page.country.namesPerLocale.it} verso la Polonia | Contatto 24/7`,
    })
  }
  if (page.kind === 'city' || page.kind === 'route') {
    return text(locale, {
      pl: `${page.city.seoTitleTemplate.pl} | Odbior, dokumenty i kontakt 24/7`,
      en: `${page.city.seoTitleTemplate.en} | Collection, paperwork and 24/7 contact`,
      de: `${page.city.seoTitleTemplate.de} | Abholung, Unterlagen und Kontakt 24/7`,
      fr: `${page.city.seoTitleTemplate.fr} | Prise en charge, documents et contact 24/7`,
      nl: `${page.city.seoTitleTemplate.nl} | Ophalen, documenten en 24/7 contact`,
      it: `${page.city.seoTitleTemplate.it} | Ritiro, documenti e contatto 24/7`,
    })
  }
  if (page.kind === 'services') {
    return text(locale, {
      pl: 'Uslugi miedzynarodowe i trasy do Polski',
      en: 'International services and routes to Poland',
      de: 'Internationale Leistungen und Routen nach Polen',
      fr: 'Services internationaux et itineraires vers la Pologne',
      nl: 'Internationale diensten en routes naar Polen',
      it: 'Servizi internazionali e rotte verso la Polonia',
    })
  }
  if (page.kind === 'formalities') return localeInfo[locale].nav.formalities
  if (page.kind === 'contact') return localeInfo[locale].nav.contact
  return localeInfo[locale].nav.faq
}

function pageDescription(page: ResolvedIntlPage) {
  const locale = page.locale
  const manualCopy = getManualCopy(page)
  if (manualCopy) return manualCopy.hero.subheadline
  if (page.kind === 'service') return page.service.summaryPerLocale[locale]
  if (page.kind === 'country') {
    return text(locale, {
      pl: `Organizujemy sprowadzenie zmarlego z ${page.country.namesPerLocale.pl} do Polski. Odbior z placowki, dokumenty, transport drogowy lub lotniczy i wsparcie rodziny 24/7 bez kosztow z gory.`,
      en: `We organise repatriation from ${page.country.namesPerLocale.en} to Poland, including collection, paperwork, road or air transport and calm family support 24/7.`,
      de: `Wir organisieren die Uberfuhrung aus ${page.country.namesPerLocale.de} nach Polen mit Abholung, Unterlagen, Strassen- oder Lufttransport und ruhiger Hilfe fur die Familie 24/7.`,
      fr: `Nous organisons le rapatriement depuis ${page.country.namesPerLocale.fr} vers la Pologne avec prise en charge, documents, transport routier ou aerien et accompagnement 24/7.`,
      nl: `Wij organiseren repatriering vanuit ${page.country.namesPerLocale.nl} naar Polen met ophaling, documenten, weg- of luchtvervoer en rustige steun voor de familie 24/7.`,
      it: `Organizziamo il rimpatrio da ${page.country.namesPerLocale.it} verso la Polonia con ritiro, documenti, trasporto su strada o aereo e assistenza serena 24/7.`,
    })
  }
  if (page.kind === 'city' || page.kind === 'route') {
    return text(locale, {
      pl: `Pomagamy w organizacji transportu z ${page.city.namesPerLocale.pl} do Polski: odbior z placowki, dokumenty, wybor transportu i przekazanie w Polsce.`,
      en: `We help organise transport from ${page.city.namesPerLocale.en} to Poland, including collection, paperwork, transport planning and handover in Poland.`,
      de: `Wir helfen bei der Organisation der Uberfuhrung von ${page.city.namesPerLocale.de} nach Polen: Abholung, Unterlagen, Transportplanung und Ubergabe in Polen.`,
      fr: `Nous aidons a organiser le rapatriement de ${page.city.namesPerLocale.fr} vers la Pologne: prise en charge, documents, choix du transport et remise en Pologne.`,
      nl: `Wij helpen bij de organisatie van het vervoer van ${page.city.namesPerLocale.nl} naar Polen: ophaling, documenten, keuze van transport en overdracht in Polen.`,
      it: `Aiutiamo a organizzare il rimpatrio da ${page.city.namesPerLocale.it} verso la Polonia: ritiro, documenti, scelta del trasporto e consegna in Polonia.`,
    })
  }
  return localeInfo[page.locale].homeDescription
}

function pageEyebrow(page: ResolvedIntlPage) {
  if (page.kind === 'route') return `${page.city.namesPerLocale[page.locale]} -> ${POLAND_LABELS[page.locale]}`
  if (page.kind === 'country') {
    return text(page.locale, {
      pl: `${page.country.namesPerLocale.pl} -> Polska`,
      en: `${page.country.namesPerLocale.en} -> Poland`,
      de: `${page.country.namesPerLocale.de} -> Polen`,
      fr: `${page.country.namesPerLocale.fr} -> Pologne`,
      nl: `${page.country.namesPerLocale.nl} -> Polen`,
      it: `${page.country.namesPerLocale.it} -> Polonia`,
    })
  }
  return displayTitle(page)
}

function pageOverview(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'route') {
    return {
      title: text(locale, {
        pl: 'Co obejmuje ta konkretna trasa',
        en: 'What this exact route includes',
        de: 'Was diese konkrete Route umfasst',
        fr: 'Ce que couvre cet itineraire precis',
        nl: 'Wat deze concrete route omvat',
        it: 'Cosa comprende questa rotta specifica',
      }),
      description: text(locale, {
        pl: 'Ta strona jest przygotowana dla rodzin, ktore potrzebuja realnej pomocy na trasie z konkretnego miasta do Polski. Pokazujemy, jak wyglada odbior, dokumenty, wybor transportu i przekazanie po stronie polskiej.',
        en: 'This page is built for families who need practical help on a specific route to Poland. We explain collection, paperwork, transport choice and handover on the Polish side.',
        de: 'Diese Seite ist fur Familien gedacht, die konkrete Hilfe auf einer bestimmten Route nach Polen brauchen. Wir erklaren Abholung, Unterlagen, Transportwahl und Ubergabe in Polen.',
        fr: 'Cette page est concue pour les familles qui ont besoin d une aide concrete sur un itineraire precis vers la Pologne. Nous expliquons la prise en charge, les documents, le choix du transport et la remise en Pologne.',
        nl: 'Deze pagina is bedoeld voor families die praktische hulp nodig hebben op een specifieke route naar Polen. We leggen ophaling, documenten, vervoerskeuze en overdracht in Polen uit.',
        it: 'Questa pagina e pensata per le famiglie che hanno bisogno di aiuto concreto su una rotta specifica verso la Polonia. Spieghiamo ritiro, documenti, scelta del trasporto e consegna in Polonia.',
      }),
    }
  }
  if (page.kind === 'country') {
    return {
      title: text(locale, {
        pl: 'Jak zwykle wyglada organizacja z tego kraju',
        en: 'How the process usually works from this country',
        de: 'Wie die Organisation aus diesem Land meist ablauft',
        fr: 'Comment l organisation se deroule generalement depuis ce pays',
        nl: 'Hoe de organisatie vanuit dit land meestal verloopt',
        it: 'Come di solito si organizza il trasferimento da questo Paese',
      }),
      description: text(locale, {
        pl: `Pokazujemy typowe formalnosci, dokumenty i logistyczne decyzje przy sprowadzaniu zmarlego z ${page.country.namesPerLocale.pl} do Polski. Zakres zalezy od miejsca zgonu, placowki i wybranego trybu przewozu.`,
        en: `We explain the usual paperwork, documents and logistics when bringing a deceased person from ${page.country.namesPerLocale.en} to Poland. The exact scope depends on the place of death, the facility and the transport mode.`,
        de: `Wir erklaren die ublichen Unterlagen, Formalitaten und logistischen Entscheidungen bei einer Uberfuhrung aus ${page.country.namesPerLocale.de} nach Polen. Der genaue Umfang hangt vom Sterbeort, der Einrichtung und der Transportart ab.`,
        fr: `Nous expliquons les documents, les demarches et les choix logistiques habituels pour un rapatriement depuis ${page.country.namesPerLocale.fr} vers la Pologne. L etendue exacte depend du lieu du deces, de la structure et du mode de transport.`,
        nl: `We leggen de gebruikelijke documenten, formaliteiten en logistieke keuzes uit bij een repatriering vanuit ${page.country.namesPerLocale.nl} naar Polen. De precieze omvang hangt af van de plaats van overlijden, de instelling en de vervoerswijze.`,
        it: `Spieghiamo i documenti, le formalita e le scelte logistiche piu comuni per un rimpatrio da ${page.country.namesPerLocale.it} verso la Polonia. La portata esatta dipende dal luogo del decesso, dalla struttura e dal tipo di trasporto.`,
      }),
    }
  }
  return {
    title: text(locale, {
      pl: 'Kolejne kroki i wersje jezykowe',
      en: 'Next steps and language versions',
      de: 'Nachste Schritte und Sprachversionen',
      fr: 'Prochaines etapes et versions linguistiques',
      nl: 'Volgende stappen en taalversies',
      it: 'Prossimi passi e versioni linguistiche',
    }),
    description: pageDescription(page),
  }
}

function getOverviewBullets(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'route') {
    return [
      text(locale, {
        pl: `Odbior z placowki w ${page.city.namesPerLocale.pl}`,
        en: `Collection from a facility in ${page.city.namesPerLocale.en}`,
        de: `Abholung aus einer Einrichtung in ${page.city.namesPerLocale.de}`,
        fr: `Prise en charge dans une structure a ${page.city.namesPerLocale.fr}`,
        nl: `Ophaling bij een instelling in ${page.city.namesPerLocale.nl}`,
        it: `Presa in carico da una struttura a ${page.city.namesPerLocale.it}`,
      }),
      text(locale, {
        pl: 'Sprawdzenie dokumentow i decyzja: droga czy lot',
        en: 'Document review and a decision between road and air',
        de: 'Prufung der Unterlagen und Entscheidung zwischen Strasse und Luft',
        fr: 'Verification des documents et choix entre route et aerien',
        nl: 'Controle van documenten en keuze tussen weg en lucht',
        it: 'Verifica dei documenti e scelta tra strada e aereo',
      }),
      text(locale, {
        pl: 'Przekazanie w Polsce do dalszej organizacji',
        en: 'Handover in Poland for the next funeral steps',
        de: 'Ubergabe in Polen fur die weiteren Schritte',
        fr: 'Remise en Pologne pour la suite de l organisation',
        nl: 'Overdracht in Polen voor de volgende stappen',
        it: 'Consegna in Polonia per i passaggi successivi',
      }),
    ]
  }

  if (page.kind === 'country') {
    return [
      text(locale, {
        pl: `Typowe dokumenty i formalnosci w ${page.country.namesPerLocale.pl}`,
        en: `Typical documents and paperwork in ${page.country.namesPerLocale.en}`,
        de: `Typische Unterlagen und Formalitaten in ${page.country.namesPerLocale.de}`,
        fr: `Documents et demarches habituels en ${page.country.namesPerLocale.fr}`,
        nl: `Typische documenten en formaliteiten in ${page.country.namesPerLocale.nl}`,
        it: `Documenti e formalita tipici in ${page.country.namesPerLocale.it}`,
      }),
      text(locale, {
        pl: 'Pomoc rodzinie zdalnie i bez chaosu',
        en: 'Remote support for the family without confusion',
        de: 'Unterstutzung der Familie aus der Ferne ohne Chaos',
        fr: 'Accompagnement a distance, sans confusion',
        nl: 'Ondersteuning op afstand zonder chaos',
        it: 'Supporto a distanza senza caos',
      }),
      text(locale, {
        pl: 'Transport do Polski i dalsza organizacja po stronie polskiej',
        en: 'Transfer to Poland and the next steps on the Polish side',
        de: 'Uberfuhrung nach Polen und weitere Organisation in Polen',
        fr: 'Transfert vers la Pologne et organisation cote polonais',
        nl: 'Overbrenging naar Polen en vervolgstappen aan Poolse zijde',
        it: 'Trasferimento in Polonia e passaggi successivi sul lato polacco',
      }),
    ]
  }

  return [
    text(locale, {
      pl: 'Przejmujemy kontakt, formalnosci i logistyke od pierwszego telefonu',
      en: 'We take over contact, paperwork and logistics from the first call',
      de: 'Wir ubernehmen Kontakt, Formalitaten und Logistik ab dem ersten Anruf',
      fr: 'Nous prenons en charge contacts, demarches et logistique des le premier appel',
      nl: 'Wij nemen contact, documenten en logistiek over vanaf het eerste gesprek',
      it: 'Prendiamo in carico contatti, documenti e logistica fin dalla prima chiamata',
    }),
  ]
}

function getProcedureSteps(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'route') {
    return [
      {
        title: text(locale, {
          pl: `Potwierdzamy odbior w ${page.city.namesPerLocale.pl}`,
          en: `We confirm collection in ${page.city.namesPerLocale.en}`,
          de: `Wir bestatigen die Abholung in ${page.city.namesPerLocale.de}`,
          fr: `Nous confirmons la prise en charge a ${page.city.namesPerLocale.fr}`,
          nl: `Wij bevestigen de ophaling in ${page.city.namesPerLocale.nl}`,
          it: `Confermiamo il ritiro a ${page.city.namesPerLocale.it}`,
        }),
        description: text(locale, {
          pl: 'Ustalamy szpital, prosektorium, dom pogrzebowy albo inna placowke i przejmujemy pierwszy kontakt organizacyjny.',
          en: 'We identify the hospital, mortuary, funeral home or another facility and take over the first operational contact.',
          de: 'Wir klaren Krankenhaus, Leichenhalle, Bestatter oder eine andere Einrichtung und ubernehmen den ersten organisatorischen Kontakt.',
          fr: 'Nous identifions l hopital, la morgue, l operateur funeraire ou une autre structure et prenons le premier contact.',
          nl: 'Wij bepalen het ziekenhuis, mortuarium, uitvaartbedrijf of een andere instelling en nemen het eerste organisatorische contact over.',
          it: 'Individuiamo ospedale, obitorio, impresa funebre o altra struttura e prendiamo in carico il primo contatto operativo.',
        }),
      },
      {
        title: text(locale, {
          pl: 'Sprawdzamy dokumenty i decyzje transportowe',
          en: 'We review documents and transport decisions',
          de: 'Wir prufen Unterlagen und Transportentscheidungen',
          fr: 'Nous verifions les documents et le choix du transport',
          nl: 'Wij controleren de documenten en de transportkeuze',
          it: 'Verifichiamo documenti e scelta del trasporto',
        }),
        description: text(locale, {
          pl: 'Pomagamy ustalic, czego brakuje, czy lepszy bedzie transport drogowy czy lotniczy i jakie zgody trzeba jeszcze uzyskac.',
          en: 'We clarify what is missing, whether road or air transport is more suitable and which approvals may still be required.',
          de: 'Wir klaren, was noch fehlt, ob Strassen- oder Lufttransport sinnvoller ist und welche Genehmigungen noch erforderlich sein konnen.',
          fr: 'Nous precisons ce qui manque, si le transport routier ou aerien est plus adapte et quelles autorisations peuvent encore etre necessaires.',
          nl: 'We brengen in kaart wat nog ontbreekt, of weg- of luchtvervoer beter past en welke toestemmingen nog nodig kunnen zijn.',
          it: 'Chiariamo cosa manca ancora, se e piu adatto il trasporto su strada o aereo e quali autorizzazioni possono essere ancora necessarie.',
        }),
      },
      {
        title: text(locale, {
          pl: 'Przewoz i przekazanie w Polsce',
          en: 'Transfer and handover in Poland',
          de: 'Transport und Ubergabe in Polen',
          fr: 'Transport et remise en Pologne',
          nl: 'Vervoer en overdracht in Polen',
          it: 'Trasferimento e consegna in Polonia',
        }),
        description: text(locale, {
          pl: 'Koordynujemy trase, odbior w Polsce i dalsze przygotowanie do pochowku albo przekazania do innego zakladu.',
          en: 'We coordinate the route, reception in Poland and the next step toward burial preparation or transfer to another funeral home.',
          de: 'Wir koordinieren die Route, die Ubernahme in Polen und den nachsten Schritt zur Bestattungsvorbereitung oder zur Ubergabe an ein anderes Bestattungsunternehmen.',
          fr: 'Nous coordonnons l itineraire, la prise en charge en Pologne et l etape suivante vers la preparation des obseques ou la remise a un autre operateur.',
          nl: 'Wij coordineren de route, de ontvangst in Polen en de vervolgstap richting uitvaartvoorbereiding of overdracht aan een andere uitvaartondernemer.',
          it: 'Coordiniamo il percorso, la presa in carico in Polonia e il passaggio successivo verso la preparazione delle esequie o la consegna a un altra impresa.',
        }),
      },
    ]
  }

  return [
    {
      title: text(locale, {
        pl: 'Potwierdzamy miejsce odbioru',
        en: 'We confirm the collection point',
        de: 'Wir bestatigen den Abholort',
        fr: 'Nous confirmons le lieu de prise en charge',
        nl: 'Wij bevestigen de ophaallocatie',
        it: 'Confermiamo il luogo di ritiro',
      }),
      description: text(locale, {
        pl: 'Ustalamy szpital, prosektorium, dom pogrzebowy albo inna placowke i przejmujemy pierwszy kontakt.',
        en: 'We establish the hospital, mortuary, funeral home or another facility and take over the first contact.',
        de: 'Wir klaren Krankenhaus, Leichenhalle, Bestattungsinstitut oder eine andere Einrichtung und ubernehmen den ersten Kontakt.',
        fr: 'Nous identifions l hopital, la morgue, l operateur funeraire ou une autre structure et nous prenons le premier contact.',
        nl: 'Wij bepalen het ziekenhuis, mortuarium, uitvaartbedrijf of een andere instelling en nemen het eerste contact over.',
        it: 'Definiamo ospedale, obitorio, impresa funebre o altra struttura e prendiamo in carico il primo contatto.',
      }),
    },
    {
      title: text(locale, {
        pl: 'Sprawdzamy dokumenty',
        en: 'We review the documents',
        de: 'Wir prufen die Unterlagen',
        fr: 'Nous verifions les documents',
        nl: 'Wij controleren de documenten',
        it: 'Verifichiamo i documenti',
      }),
      description: text(locale, {
        pl: 'Pomagamy ustalic, co jest juz gotowe i co trzeba jeszcze uzyskac przed przewozem do Polski.',
        en: 'We help determine what is ready and what still needs to be obtained before transport to Poland.',
        de: 'Wir helfen zu bestimmen, was bereits vorliegt und was vor dem Transport nach Polen noch fehlt.',
        fr: 'Nous aidons a determiner ce qui est pret et ce qu il faut encore obtenir avant le transport vers la Pologne.',
        nl: 'Wij helpen bepalen wat al klaar is en wat nog nodig is voor vervoer naar Polen.',
        it: 'Aiutiamo a capire cosa e gia pronto e cosa va ancora ottenuto prima del trasporto verso la Polonia.',
      }),
    },
    {
      title: text(locale, {
        pl: 'Organizujemy przewoz do Polski',
        en: 'We organise the transfer to Poland',
        de: 'Wir organisieren die Uberfuhrung nach Polen',
        fr: 'Nous organisons le transport vers la Pologne',
        nl: 'Wij organiseren het vervoer naar Polen',
        it: 'Organizziamo il trasferimento verso la Polonia',
      }),
      description: text(locale, {
        pl: 'Koordynujemy droge lub lot, przekazanie w Polsce i dalsze kroki do przygotowania pochowku.',
        en: 'We coordinate road or air transport, handover in Poland and the next steps through to funeral preparation.',
        de: 'Wir koordinieren Strasse oder Flug, die Ubergabe in Polen und die weiteren Schritte bis zur Bestattungsvorbereitung.',
        fr: 'Nous coordonnons la route ou l avion, la remise en Pologne et les etapes suivantes jusqu a la preparation des obseques.',
        nl: 'Wij coordineren weg of lucht, overdracht in Polen en de vervolgstappen tot aan de voorbereiding van de uitvaart.',
        it: 'Coordiniamo strada o aereo, consegna in Polonia e i passaggi successivi fino alla preparazione delle esequie.',
      }),
    },
  ]
}

function getTransportModes(page: ResolvedIntlPage) {
  const locale = page.locale
  return page.kind === 'country' || page.kind === 'city' || page.kind === 'route'
    ? page.country.transportModes.map((mode) => ({
        type: mode,
        title:
          mode === 'road'
            ? text(locale, {
                pl: 'Transport drogowy',
                en: 'Road transport',
                de: 'Strassentransport',
                fr: 'Transport routier',
                nl: 'Wegtransport',
                it: 'Trasporto su strada',
              })
            : text(locale, {
                pl: 'Transport lotniczy',
                en: 'Air transport',
                de: 'Lufttransport',
                fr: 'Transport aerien',
                nl: 'Luchtvervoer',
                it: 'Trasporto aereo',
              }),
        description:
          mode === 'road'
            ? text(locale, {
                pl: 'W wielu trasach europejskich jest to rozwiazanie sprawne, przewidywalne i pozwalajace utrzymac ciaglosc organizacji po obu stronach granicy.',
                en: 'On many European routes this is an efficient and predictable option that supports smooth coordination on both sides of the border.',
                de: 'Auf vielen europaischen Routen ist dies eine effiziente und gut planbare Losung, ktora eine ruhige Abstimmung auf beiden Seiten der Grenze ermoglicht.',
                fr: 'Sur de nombreux itineraires europeens, c est une solution efficace et previsible qui permet une coordination fluide des deux cotes de la frontiere.',
                nl: 'Op veel Europese routes is dit een efficiente en voorspelbare oplossing die een soepele coordinatie aan beide kanten van de grens ondersteunt.',
                it: 'Su molte rotte europee e una soluzione efficiente e prevedibile che consente un coordinamento fluido su entrambi i lati della frontiera.',
              })
            : text(locale, {
                pl: 'Rozwazamy go wtedy, gdy wymaga tego odleglosc, czas, logistyka kraju albo decyzje placowki i przewoznika.',
                en: 'We consider it when distance, timing, local logistics or carrier requirements make it the better option.',
                de: 'Wir ziehen ihn in Betracht, wenn Entfernung, Zeit, lokale Logistik oder Vorgaben des Beforderers dafur sprechen.',
                fr: 'Nous le considerons lorsque la distance, les delais, la logistique locale ou les contraintes du transporteur le justifient.',
                nl: 'We overwegen dit wanneer afstand, timing, lokale logistiek of eisen van de vervoerder dit tot de betere optie maken.',
                it: 'Lo valutiamo quando distanza, tempi, logistica locale o requisiti del vettore lo rendono la scelta migliore.',
              }),
      }))
    : []
}

function getCoverage(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'country') {
    return {
      title: text(locale, {
        pl: 'Najczesciej obslugiwane miasta w tym kraju',
        en: 'Most frequently handled cities in this country',
        de: 'Am haufigsten betreute Stadte in diesem Land',
        fr: 'Villes les plus souvent prises en charge dans ce pays',
        nl: 'Meest behandelde steden in dit land',
        it: 'Citta gestite piu spesso in questo Paese',
      }),
      description: text(locale, {
        pl: 'Te kierunki sa dla rodzin najczesciej punktem wyjscia do transportu do Polski. Kazda trasa ma wlasna logike odbioru i dokumentow.',
        en: 'These directions are the most common starting points for transport to Poland. Each route has its own pickup and document logic.',
        de: 'Diese Orte sind fur Familien die haufigsten Ausgangspunkte fur eine Uberfuhrung nach Polen. Jede Route hat ihre eigene Logik bei Abholung und Unterlagen.',
        fr: 'Ces villes sont les points de depart les plus frequents pour un transport vers la Pologne. Chaque itineraire a sa propre logique de prise en charge et de documents.',
        nl: 'Dit zijn de meest voorkomende vertrekpunten voor vervoer naar Polen. Elke route heeft zijn eigen logica voor ophaling en documenten.',
        it: 'Queste citta sono i punti di partenza piu frequenti per il trasporto verso la Polonia. Ogni rotta ha una propria logica di ritiro e documenti.',
      }),
      items: page.country.featuredCities.map((code) => {
        const related = getFeaturedRoutes(locale, 40).find((item) => item.city.code === code)
        return related ? `${related.city.namesPerLocale[locale]} -> ${POLAND_LABELS[locale]}` : code
      }),
    }
  }
  if (page.kind === 'route') {
    return {
      title: text(locale, {
        pl: 'Co zwykle obejmujemy na tej trasie',
        en: 'What we usually cover on this route',
        de: 'Was wir auf dieser Route normalerweise ubernehmen',
        fr: 'Ce que nous prenons habituellement en charge sur cet itineraire',
        nl: 'Wat wij op deze route meestal verzorgen',
        it: 'Cosa prendiamo abitualmente in carico su questa rotta',
      }),
      description: text(locale, {
        pl: 'Zakres moze sie roznic w zaleznosci od placowki i dokumentow, ale rodzina od razu wie, za co odpowiadamy po naszej stronie.',
        en: 'The exact scope can vary by facility and paperwork, but the family can immediately see what we take care of on our side.',
        de: 'Der genaue Umfang kann je nach Einrichtung und Unterlagen variieren, aber die Familie sieht sofort, was wir auf unserer Seite ubernehmen.',
        fr: 'L etendue exacte peut varier selon la structure et les documents, mais la famille voit immediatement ce que nous prenons en charge.',
        nl: 'De precieze omvang kan per instelling en documentatie verschillen, maar de familie ziet meteen wat wij verzorgen.',
        it: 'La portata esatta puo variare in base alla struttura e ai documenti, ma la famiglia vede subito di cosa ci occupiamo noi.',
      }),
      items: [
        text(locale, { pl: 'Pierwszy kontakt z placowka', en: 'First contact with the facility', de: 'Erster Kontakt mit der Einrichtung', fr: 'Premier contact avec la structure', nl: 'Eerste contact met de instelling', it: 'Primo contatto con la struttura' }),
        text(locale, { pl: 'Weryfikacja dokumentow', en: 'Document review', de: 'Prufung der Unterlagen', fr: 'Verification des documents', nl: 'Controle van de documenten', it: 'Verifica dei documenti' }),
        text(locale, { pl: 'Koordynacja przewozu do Polski', en: 'Coordination of transport to Poland', de: 'Koordination der Uberfuhrung nach Polen', fr: 'Coordination du transport vers la Pologne', nl: 'Coordinatie van vervoer naar Polen', it: 'Coordinamento del trasporto verso la Polonia' }),
        text(locale, { pl: 'Przekazanie po stronie polskiej', en: 'Handover in Poland', de: 'Ubergabe in Polen', fr: 'Remise en Pologne', nl: 'Overdracht in Polen', it: 'Presa in carico in Polonia' }),
      ],
    }
  }
  return null
}

function pageLinks(page: ResolvedIntlPage) {
  const locale = page.locale
  if (page.kind === 'services') {
    return serviceCatalog.map((service) => ({
      href: buildLocalizedPath(locale, 'service', service.slugPerLocale[locale]),
      label: service.namePerLocale[locale],
      description: service.summaryPerLocale[locale],
    }))
  }
  if (page.kind === 'country') {
    return page.country.featuredCities
      .map((code) => getFeaturedRoutes(locale, 40).find((item) => item.city.code === code))
      .filter(Boolean)
      .map((item) => ({
        href: buildLocalizedPath(locale, 'route', item!.slug),
        label: `${item!.city.namesPerLocale[locale]} -> ${POLAND_LABELS[locale]}`,
        description: `${item!.country.namesPerLocale[locale]} | ${item!.city.airportNearby}`,
      }))
  }
  if (page.kind === 'city' || page.kind === 'route') {
    return [
      {
        href: buildLocalizedPath(locale, 'country', page.country.slugPerLocale[locale]),
        label: page.country.namesPerLocale[locale],
        description: page.country.legalNotes[locale],
      },
      {
        href: buildLocalizedPath(locale, 'service', serviceCatalog[0].slugPerLocale[locale]),
        label: serviceCatalog[0].namePerLocale[locale],
        description: serviceCatalog[0].summaryPerLocale[locale],
      },
      ...getRelatedRoutes(locale, page.city.code, 2).map((item) => ({
        href: buildLocalizedPath(locale, 'route', item.slug),
        label: `${item.city.namesPerLocale[locale]} -> ${POLAND_LABELS[locale]}`,
        description: `${item.country.namesPerLocale[locale]} | ${item.city.airportNearby}`,
      })),
    ]
  }
  return getFeaturedRoutes(locale, 5).map((item) => ({
    href: buildLocalizedPath(locale, 'route', item.slug),
    label: `${item.city.namesPerLocale[locale]} -> ${POLAND_LABELS[locale]}`,
    description: `${item.country.namesPerLocale[locale]} | ${item.city.airportNearby}`,
  }))
}

function pageType(page: ResolvedIntlPage) {
  if (page.kind === 'route') return 'route' as const
  if (page.kind === 'country' || page.kind === 'city') return 'city' as const
  if (page.kind === 'service') return 'service' as const
  return 'home' as const
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllIntlParams().filter(
    (entry): entry is { locale: Locale; slug: string[] } => Array.isArray(entry.slug) && entry.slug.length > 0
  )
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isSupportedLocale(locale)) return {}
  const page = resolveIntlPage(locale, slug)
  if (!page) return {}
  return buildIntlMetadata(page, {
    title: pageTitle(page),
    description: pageDescription(page),
    path: getPagePath(page, locale),
  })
}

export default async function InternationalDynamicPage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale, slug } = await params
  if (!isSupportedLocale(locale)) notFound()
  const page = resolveIntlPage(locale, slug)
  if (!page) notFound()

  const title = pageTitle(page)
  const description = pageDescription(page)
  const phone = internationalContactChannels[0]
  const whatsapp = internationalContactChannels[2]
  const docs = getDocumentRequirements(page.kind === 'country' || page.kind === 'city' || page.kind === 'route' ? page.country.requiredDocuments : ['death-certificate', 'identity', 'authorisation', 'consular'])
  const faqEntries = getFaqEntries(page.kind === 'route' ? [...new Set([...page.city.faqRefs, 'payment'])] : page.kind === 'city' ? page.city.faqRefs : undefined)
  const links = pageLinks(page)
  const routeSlug = page.kind === 'route' ? buildRouteSlug(locale, page.city) : undefined
  const pType = pageType(page)
  const manualCopy = getManualCopy(page)
  const overview = pageOverview(page)
  const visibleTitle = manualCopy?.hero.headline ?? displayTitle(page)
  const overviewBullets = manualCopy?.hero.bodyOutline ?? getOverviewBullets(page)
  const procedureSteps = getProcedureSteps(page)
  const transportModes = getTransportModes(page)
  const coverage = getCoverage(page)

  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: BUSINESS_INFO.legalName,
            url: SITE_URL,
            telephone: BUSINESS_INFO.phone,
            email: BUSINESS_INFO.email,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: title,
            description,
            provider: { '@type': 'Organization', name: BUSINESS_INFO.legalName },
            url: `${SITE_URL}${getPagePath(page, locale)}`,
          },
        ]}
      />

      <LocalizedHero
        eyebrow={pageEyebrow(page)}
        title={visibleTitle}
        description={description}
        primaryCta={{ href: phone.href, label: `${localeInfo[locale].cta.urgent}: ${phone.value}` }}
        secondaryCta={{ href: whatsapp.href, label: localeInfo[locale].cta.whatsapp, eventName: 'intl_whatsapp_click' }}
        badges={[
          text(locale, {
            pl: `${BUSINESS_INFO.ratingValue}/5 na podstawie ${BUSINESS_INFO.reviewCount}+ opinii`,
            en: `${BUSINESS_INFO.ratingValue}/5 based on ${BUSINESS_INFO.reviewCount}+ reviews`,
            de: `${BUSINESS_INFO.ratingValue}/5 aus ${BUSINESS_INFO.reviewCount}+ Bewertungen`,
            fr: `${BUSINESS_INFO.ratingValue}/5 sur la base de ${BUSINESS_INFO.reviewCount}+ avis`,
            nl: `${BUSINESS_INFO.ratingValue}/5 op basis van ${BUSINESS_INFO.reviewCount}+ beoordelingen`,
            it: `${BUSINESS_INFO.ratingValue}/5 sulla base di ${BUSINESS_INFO.reviewCount}+ recensioni`,
          }),
          text(locale, {
            pl: 'Bez zaliczki i bez kosztow z gory dla rodziny',
            en: 'No upfront family payment',
            de: 'Keine Vorauszahlung fur die Familie',
            fr: 'Sans paiement initial pour la famille',
            nl: 'Geen vooruitbetaling voor de familie',
            it: 'Nessun pagamento anticipato per la famiglia',
          }),
          text(locale, {
            pl: `Rodzinna firma od ponad ${BUSINESS_INFO.yearsOfExperience} lat`,
            en: `Family business with over ${BUSINESS_INFO.yearsOfExperience} years of experience`,
            de: `Familienunternehmen mit uber ${BUSINESS_INFO.yearsOfExperience} Jahren Erfahrung`,
            fr: `Entreprise familiale avec plus de ${BUSINESS_INFO.yearsOfExperience} ans d experience`,
            nl: `Familiebedrijf met meer dan ${BUSINESS_INFO.yearsOfExperience} jaar ervaring`,
            it: `Impresa familiare con oltre ${BUSINESS_INFO.yearsOfExperience} anni di esperienza`,
          }),
          text(locale, {
            pl: 'Kontakt i reakcja 24/7',
            en: '24/7 contact and response',
            de: 'Kontakt und Reaktion 24/7',
            fr: 'Contact et reaction 24/7',
            nl: '24/7 contact en reactie',
            it: 'Contatto e risposta 24/7',
          }),
        ]}
        locale={locale}
        pageType={pType}
        routeSlug={routeSlug}
      />

      <UrgentContactBar title={phone.labelPerLocale[locale]} description={description} primaryPhone={phone} whatsapp={whatsapp} locale={locale} pageType={pType} routeSlug={routeSlug} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{visibleTitle}</p>
          <h2 className="text-3xl font-playfair text-white">{overview.title}</h2>
          <p className="text-sm leading-7 text-stone-300">{overview.description}</p>
          <div className="grid gap-3">
            {overviewBullets.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-stone-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <EmergencyContactRail
          title={text(locale, { pl: 'Szybki kontakt miedzynarodowy', en: 'Quick international contact', de: 'Schneller internationaler Kontakt', fr: 'Contact international rapide', nl: 'Snel internationaal contact', it: 'Contatto internazionale rapido' })}
          summary={text(locale, { pl: 'Osobna sciezka dla rodzin potrzebujacych spokojnej i pilnej pomocy z zagranicy.', en: 'A dedicated path for families who need calm and urgent help from abroad.', de: 'Ein eigener Weg fur Familien, die ruhige und dringende Hilfe aus dem Ausland brauchen.', fr: 'Un parcours dedie aux familles qui ont besoin d une aide urgente et rassurante depuis l etranger.', nl: 'Een apart pad voor families die vanuit het buitenland rustige en urgente hulp nodig hebben.', it: 'Un percorso dedicato alle famiglie che hanno bisogno di aiuto urgente e rassicurante dall estero.' })}
          locale={locale}
          pageType={pType}
          routeSlug={routeSlug}
          whatsappUrl={whatsapp.href}
          internationalPhone={phone.value}
        />
      </section>

      <TrustSection
        title={text(locale, { pl: 'Najwazniejsze filary zaufania', en: 'Core trust pillars', de: 'Wichtigste Vertrauenssignale', fr: 'Principaux elements de confiance', nl: 'Belangrijkste vertrouwenspunten', it: 'Principali elementi di fiducia' })}
        items={[
          { title: text(locale, { pl: 'Rodzinna firma z doswiadczeniem', en: 'Experienced family business', de: 'Erfahrenes Familienunternehmen', fr: 'Entreprise familiale experimentee', nl: 'Ervaren familiebedrijf', it: 'Impresa familiare con esperienza' }), description: text(locale, { pl: 'Ponad 30 lat rodzinnego doswiadczenia i spokojnego prowadzenia rodzin w trudnym czasie.', en: 'Over 30 years of family business experience and calm guidance in difficult moments.', de: 'Uber 30 Jahre Familienerfahrung und ruhige Begleitung in einer schwierigen Zeit.', fr: 'Plus de 30 ans d experience familiale et un accompagnement calme dans un moment difficile.', nl: 'Meer dan 30 jaar familie-ervaring en rustige begeleiding in een moeilijke periode.', it: 'Oltre 30 anni di esperienza familiare e accompagnamento sereno in un momento difficile.' }) },
          { title: text(locale, { pl: 'Bez zaliczki', en: 'No upfront payment', de: 'Ohne Vorauszahlung', fr: 'Sans paiement initial', nl: 'Zonder vooruitbetaling', it: 'Senza anticipo' }), description: text(locale, { pl: 'Wyjasniamy mozliwosci rozliczenia bez kosztow z gory i pomagamy rodzinie dzialac od razu.', en: 'We explain no-upfront-payment options so the family can act immediately.', de: 'Wir erklaren Moglichkeiten ohne Vorauszahlung, damit die Familie sofort handeln kann.', fr: 'Nous expliquons les options sans paiement initial pour que la famille puisse agir tout de suite.', nl: 'Wij leggen mogelijkheden zonder vooruitbetaling uit zodat de familie direct kan handelen.', it: 'Spieghiamo le opzioni senza anticipo per permettere alla famiglia di agire subito.' }) },
          { title: text(locale, { pl: 'Dostepnosc 24/7', en: '24/7 availability', de: '24/7 Erreichbarkeit', fr: 'Disponibilite 24/7', nl: '24/7 beschikbaarheid', it: 'Disponibilita 24/7' }), description: text(locale, { pl: 'Telefon, WhatsApp i szybka reakcja non stop dla przypadkow pilnych.', en: 'Phone, WhatsApp and non-stop response for urgent cases.', de: 'Telefon, WhatsApp und schnelle Reaktion rund um die Uhr fur dringende Falle.', fr: 'Telephone, WhatsApp et reaction continue pour les situations urgentes.', nl: 'Telefoon, WhatsApp en continue reactie voor spoedgevallen.', it: 'Telefono, WhatsApp e risposta continua per i casi urgenti.' }) },
        ]}
      />

      <ProcedureSteps
        title={text(locale, { pl: 'Jak wyglada organizacja krok po kroku', en: 'How the process works step by step', de: 'Wie der Ablauf Schritt fur Schritt aussieht', fr: 'Comment l organisation se deroule pas a pas', nl: 'Hoe het proces stap voor stap verloopt', it: 'Come si svolge il processo passo dopo passo' })}
        locale={locale}
        steps={procedureSteps}
      />

      {transportModes.length > 0 ? (
        <TransportModesSection
          title={text(locale, {
            pl: 'Transport drogowy czy lotniczy',
            en: 'Road or air transport',
            de: 'Strassen- oder Lufttransport',
            fr: 'Transport routier ou aerien',
            nl: 'Wegtransport of luchtvervoer',
            it: 'Trasporto su strada o aereo',
          })}
          modes={transportModes}
        />
      ) : null}

      <DocumentsChecklist title={text(locale, { pl: 'Najczesciej potrzebne dokumenty', en: 'Most common documents', de: 'Am haufigsten benotigte Unterlagen', fr: 'Documents le plus souvent necessaires', nl: 'Meest gevraagde documenten', it: 'Documenti richiesti piu spesso' })} items={docs.map((item) => ({ title: item.labelPerLocale[locale], note: item.notePerLocale[locale] }))} />
      {coverage ? <RouteCoverageSection title={coverage.title} description={coverage.description} items={coverage.items} /> : null}
      <FAQSection title={page.kind === 'route' ? text(locale, { pl: `FAQ dla trasy ${page.city.namesPerLocale.pl} -> Polska`, en: `FAQ for the ${page.city.namesPerLocale.en} -> Poland route`, de: `FAQ fur die Route ${page.city.namesPerLocale.de} -> Polen`, fr: `FAQ pour l itineraire ${page.city.namesPerLocale.fr} -> Pologne`, nl: `FAQ voor de route ${page.city.namesPerLocale.nl} -> Polen`, it: `FAQ per la tratta ${page.city.namesPerLocale.it} -> Polonia` }) : localeInfo[locale].nav.faq} entries={faqEntries} locale={locale} />
      <RelatedRoutes title={page.kind === 'country' ? text(locale, { pl: 'Najwazniejsze miasta i trasy', en: 'Key cities and routes', de: 'Wichtige Stadte und Routen', fr: 'Villes et itineraires prioritaires', nl: 'Belangrijkste steden en routes', it: 'Citta e rotte principali' }) : text(locale, { pl: 'Powiazane strony', en: 'Related pages', de: 'Verwandte Seiten', fr: 'Pages associees', nl: 'Gerelateerde paginas', it: 'Pagine correlate' })} links={links} locale={locale} />
      <InternationalContactBox title={phone.labelPerLocale[locale]} description={description} channels={internationalContactChannels} locale={locale} />

      <StickyContactBar
        phoneHref={phone.href}
        callLabel={localeInfo[locale].cta.urgent}
        whatsappLabel={localeInfo[locale].cta.whatsapp}
        whatsappUrl={whatsapp.href}
        locale={locale}
        pageType={pType}
        routeSlug={routeSlug}
        formLabel={text(locale, { pl: 'Formularz', en: 'Form', de: 'Formular', fr: 'Formulaire', nl: 'Formulier', it: 'Modulo' })}
      />
    </>
  )
}
