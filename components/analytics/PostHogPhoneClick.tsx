'use client'

import { usePostHog } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function normalizePhoneFromHref(href: string): string {
  return href.replace(/^tel:/i, '').trim()
}

export function PostHogPhoneClick() {
  const posthog = usePostHog()
  const pathname = usePathname()

  useEffect(() => {
    if (!posthog || typeof document === 'undefined' || typeof window === 'undefined') return

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const phoneNumber = normalizePhoneFromHref(href)
      const location = anchor.getAttribute('data-phone-location') || 'unknown'

      // send_instantly helps preserve event delivery before dialer handoff/navigation.
      posthog.capture(
        'phone_cta_clicked',
        {
          phone_number: phoneNumber,
          href,
          location,
          page_path: pathname || window.location.pathname,
          page_url: window.location.href,
          link_text: (anchor.textContent || '').trim().slice(0, 120),
        },
        { send_instantly: true }
      )
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [posthog, pathname])

  return null
}

