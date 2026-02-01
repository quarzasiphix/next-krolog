'use client'

import { usePostHog } from 'posthog-js/react'
import { Phone } from 'lucide-react'

interface TrackedPhoneLinkProps {
  location: string
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

export function TrackedPhoneLink({ 
  location, 
  className = "button-primary flex items-center justify-center gap-3",
  showIcon = true,
  children 
}: TrackedPhoneLinkProps) {
  const posthog = usePostHog()

  const handleClick = () => {
    if (posthog) {
      posthog.capture('phone_cta_clicked', {
        location,
        phone_number: '+48602274661',
        timestamp: new Date().toISOString(),
      })
      console.log(`PostHog: Phone CTA clicked from ${location}`)
    }
  }

  return (
    <a
      href="tel:+48602274661"
      className={className}
      onClick={handleClick}
    >
      {showIcon && <Phone className="h-5 w-5 hidden md:inline" aria-hidden />}
      {children || <span>+48 602 274 661</span>}
    </a>
  )
}
