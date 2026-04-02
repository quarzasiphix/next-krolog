# International Localization Copy System

This document defines the multilingual copy system for international funeral repatriation / transport of remains to Poland.

## Goals

- sound natural and trustworthy in all launch languages
- support families under stress with clear next steps
- avoid machine-translated phrasing
- keep the brand calm, professional and dignified

## Launch languages

- `pl`
- `en`
- `de`
- `fr`
- `nl`
- `it`

## Core brand tone

- calm
- precise
- respectful
- service-led
- non-clickbait

## Language notes

### Polish

- concrete and dignified
- short practical sentences
- avoid inflated marketing

### English

- plain English first
- no legal jargon unless required
- make the next step obvious

### German

- premium and professional
- precise wording
- slightly formal, never casual

### French

- formal and calm
- orderly structure
- avoid aggressive CTA style

### Dutch

- practical and clear
- respectful, not emotional
- avoid fluffy language

### Italian

- composed and accessible
- professional, warm but controlled
- avoid dramatic wording

## Mandatory business messages

- 24/7 contact
- support with paperwork
- family-run company
- more than 30 years of experience
- fair and competitive pricing
- no upfront family payment where applicable

## Forbidden patterns

- cheapest-on-the-market claims
- urgency manipulation
- clickbait
- tabloid wording around death
- literal machine-translated funeral jargon

## Source of truth

Use:

- [localization-copy.ts](/C:/Users/Administrator/Documents/projects/next-krolog/lib/international/localization-copy.ts)

This file contains:

- tone of voice profiles
- glossary
- banned phrases
- preferred wording by locale
- CTA library
- trust statement library
- FAQ answer rules
- emergency microcopy
- form copy
- translation memory starter set
- reusable copy blocks
- copy packs for key pages

## Manual-first pages

These pages should be written or heavily edited by a human first:

- homepage hero
- main international transport page
- Munich -> Poland
- Berlin -> Poland
- Paris -> Poland
- Amsterdam -> Poland
- London -> Poland
- contact page
- main FAQ page

## Workflow recommendation

1. Start from `copyPack` in `localization-copy.ts`.
2. Write the full Polish version first for top-priority pages.
3. Use the locale skeletons as editorial direction, not final copy.
4. Review DE/FR/EN manually before publishing.
5. Reuse trusted blocks from the translation memory and CTA libraries.
6. Keep route-specific facts unique: pickup logic, documents, road vs air, family support.
