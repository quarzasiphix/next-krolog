'use client'

import { usePostHog } from 'posthog-js/react'
import { useEffect } from 'react'

// metadata must be in a separate layout or handled via robots.txt (this page is disallowed in robots.ts)

export default function TestPostHogPage() {
  const posthog = usePostHog()

  useEffect(() => {
    if (posthog) {
      console.log('PostHog is available:', posthog)
      
      // Test event
      posthog.capture('test_event', {
        message: 'PostHog is working!',
        timestamp: new Date().toISOString(),
      })
      
      console.log('Test event sent to PostHog')
    } else {
      console.log('PostHog is not available')
    }
  }, [posthog])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">PostHog Test Page</h1>
      <p className="mb-4">Check the browser console for PostHog status.</p>
      <p className="text-gray-400">
        If PostHog is working, you should see "PostHog is available" and "Test event sent to PostHog" in the console.
      </p>
    </div>
  )
}
