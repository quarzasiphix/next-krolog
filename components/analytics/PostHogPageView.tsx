'use client'

import { usePostHog } from 'posthog-js/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PostHogPageView() {
  const posthog = usePostHog()
  const pathname = usePathname()

  useEffect(() => {
    console.log('PostHogPageView: pathname changed to:', pathname)
    if (pathname && posthog) {
      const url = window.origin + pathname
      console.log('PostHogPageView: capturing pageview for:', url)
      posthog.capture('$pageview', {
        $current_url: url,
      })
      console.log('PostHogPageView: pageview event sent')
    } else {
      console.log('PostHogPageView: posthog not available or pathname missing')
    }
  }, [pathname, posthog])

  return null
}
