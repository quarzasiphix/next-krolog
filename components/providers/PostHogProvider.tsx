'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [posthogClient, setPosthogClient] = useState<any>(null)

  useEffect(() => {
    let posthogInstance = null
    try {
      if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          capture_pageview: false,
          capture_performance: true,
        })
        posthogInstance = posthog
      }
    } catch (error) {
      console.error('PostHog: Failed to initialize:', error)
      posthogInstance = null
    }

    setPosthogClient(posthogInstance)

    return () => {
      if (posthogInstance) {
        posthogInstance.reset()
      }
    }
  }, [])

  if (!posthogClient) {
    return <>{children}</>
  }

  return <PHProvider client={posthogClient}>{children}</PHProvider>
}
