'use client'

import { usePostHog } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function PostHogPageView() {
  const posthog = usePostHog()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log('PostHogPageView: pathname changed to:', pathname)
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams?.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      console.log('PostHogPageView: capturing pageview for:', url)
      posthog.capture('$pageview', {
        $current_url: url,
      })
      console.log('PostHogPageView: pageview event sent')
    } else {
      console.log('PostHogPageView: posthog not available or pathname missing')
    }
  }, [pathname, searchParams, posthog])

  return null
}
