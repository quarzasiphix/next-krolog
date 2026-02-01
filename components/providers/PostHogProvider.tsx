'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [posthogClient, setPosthogClient] = useState<any>(null)

  useEffect(() => {
    console.log('PostHog: Initializing with key:', process.env.NEXT_PUBLIC_POSTHOG_KEY ? '✓ Key found' : '✗ No key')
    console.log('PostHog: Host:', process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com')
    
    let posthogInstance = null
    try {
      // Standard PostHog initialization
      if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          capture_pageview: false, // We'll capture pageviews manually
          capture_performance: true,
        })
        posthogInstance = posthog
        console.log('PostHog: Successfully initialized')
      }
    } catch (error) {
      console.error('PostHog: Failed to initialize:', error)
      posthogInstance = null
    }

    console.log('PostHog: Instance created:', posthogInstance)
    setPosthogClient(posthogInstance)

    return () => {
      console.log('PostHog: Cleaning up instance')
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
