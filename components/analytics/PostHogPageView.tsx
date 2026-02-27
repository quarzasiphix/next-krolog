'use client'

import { usePostHog } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PostHogPageView() {
  const posthog = usePostHog()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && posthog && typeof window !== 'undefined') {
      const url = window.origin + pathname
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, posthog])

  return null
}
