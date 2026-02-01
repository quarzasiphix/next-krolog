export async function register() {
  // PostHog is handled client-side through PostHogProvider and PostHogPageView
  // Server-side instrumentation not needed for basic pageview tracking
  console.log('PostHog: Client-side analytics enabled')
}
