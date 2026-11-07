'use client'

import { usePostHog } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const BUSINESS_NUMBERS = ['602274661', '602270050']

function normalizePhoneFromHref(href: string): string {
  return href.replace(/^tel:/i, '').trim()
}

/** Nearest section heading, so unlabeled links can still be compared by placement. */
function sectionHeading(el: Element): string {
  const section = el.closest('section, header, footer, aside, [role="dialog"]')
  if (!section) return ''
  const tag = section.tagName.toLowerCase()
  if (tag === 'header' || tag === 'footer') return tag
  const heading = section.querySelector('h1, h2, h3')
  return (heading?.textContent || tag).trim().slice(0, 80)
}

function scrollDepthPercent(): number {
  const doc = document.documentElement
  const max = Math.max(doc.scrollHeight - window.innerHeight, 1)
  return Math.min(100, Math.round((window.scrollY / max) * 100))
}

/**
 * Captures contact-intent clicks. NOTE: `phone_cta_clicked` measures a tap on a
 * tel: link (call intent), not a connected call — connected calls need a call
 * tracking number or the Google Business Profile call report.
 */
export function PostHogPhoneClick() {
  const posthog = usePostHog()
  const pathname = usePathname()

  useEffect(() => {
    if (!posthog || typeof document === 'undefined' || typeof window === 'undefined') return

    const context = (anchor: Element) => ({
      page_path: pathname || window.location.pathname,
      page_url: window.location.href,
      section_heading: sectionHeading(anchor),
      scroll_depth_pct: scrollDepthPercent(),
      viewport: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
      link_text: (anchor.textContent || '').trim().slice(0, 120),
    })

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const tel = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (tel) {
        const href = tel.getAttribute('href') || ''
        const digits = href.replace(/\D/g, '')
        // Only the business numbers count as call intent. Cemetery office numbers etc. are
        // tracked separately so they never inflate phone_cta_clicked.
        const isBusinessNumber = BUSINESS_NUMBERS.some((n) => digits.endsWith(n))
        // send_instantly helps preserve event delivery before dialer handoff/navigation.
        posthog.capture(
          isBusinessNumber ? 'phone_cta_clicked' : 'third_party_phone_clicked',
          {
            phone_number: normalizePhoneFromHref(href),
            href,
            location: tel.getAttribute('data-phone-location') || 'unlabeled',
            ...context(tel),
          },
          { send_instantly: true }
        )
        return
      }

      const wa = target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]') as HTMLAnchorElement | null
      if (wa) {
        posthog.capture(
          'whatsapp_cta_clicked',
          { href: wa.getAttribute('href') || '', location: wa.getAttribute('data-cta-location') || 'unlabeled', ...context(wa) },
          { send_instantly: true }
        )
        return
      }

      const mail = target.closest('a[href^="mailto:"]') as HTMLAnchorElement | null
      if (mail) {
        posthog.capture(
          'email_cta_clicked',
          { location: mail.getAttribute('data-cta-location') || 'unlabeled', ...context(mail) },
          { send_instantly: true }
        )
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [posthog, pathname])

  return null
}
