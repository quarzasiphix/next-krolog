'use client'

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
  return (
    <a
      href="tel:+48602274661"
      className={className}
      data-phone-location={location}
    >
      {showIcon && <Phone className="h-5 w-5 hidden md:inline" aria-hidden />}
      {children || <span>+48 602 274 661</span>}
    </a>
  )
}
