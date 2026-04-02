'use client'

import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogInternationalConversion() {
  const posthog = usePostHog()

  useEffect(() => {
    if (!posthog || typeof document === 'undefined') return

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      const element = target.closest('[data-intl-event]') as HTMLElement | null
      if (!element) return

      const eventName = element.getAttribute('data-intl-event')
      if (!eventName) return

      posthog.capture(
        eventName,
        {
          locale: element.getAttribute('data-intl-locale'),
          page_type: element.getAttribute('data-intl-page-type'),
          route_slug: element.getAttribute('data-intl-route-slug'),
          cta_location: element.getAttribute('data-intl-location'),
          href: element.getAttribute('href'),
          label: (element.textContent || '').trim().slice(0, 100),
        },
        { send_instantly: true },
      )
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [posthog])

  return null
}
