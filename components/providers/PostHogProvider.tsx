'use client'

import { PostHog } from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [posthog, setPosthog] = useState<PostHog | null>(null)

  useEffect(() => {
    const posthogInstance = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      capture_pageview: false, // We'll capture pageviews manually
      capture_performance_events: true,
    })

    setPosthog(posthogInstance)

    return () => {
      posthogInstance.reset()
    }
  }, [])

  if (!posthog) {
    return <>{children}</>
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}
