import { PostHog } from 'posthog-js'

export function captureEvent(posthog: PostHog | null, eventName: string, properties?: Record<string, any>) {
  if (posthog) {
    posthog.capture(eventName, properties)
  }
}

export function identifyUser(posthog: PostHog | null, userId: string, properties?: Record<string, any>) {
  if (posthog) {
    posthog.identify(userId, properties)
  }
}

export function resetUser(posthog: PostHog | null) {
  if (posthog) {
    posthog.reset()
  }
}
