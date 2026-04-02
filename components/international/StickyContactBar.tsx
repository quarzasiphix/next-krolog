'use client'

import type { InternationalPageType } from '@/components/international/UrgentTransportForm'

export default function StickyContactBar({
  phoneHref,
  callLabel,
  whatsappLabel,
  whatsappUrl,
  locale,
  pageType,
  routeSlug,
  formLabel,
}: {
  phoneHref: string
  callLabel: string
  whatsappLabel: string
  whatsappUrl: string
  locale: string
  pageType: InternationalPageType
  routeSlug?: string
  formLabel: string
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/20 bg-black/95 p-3 shadow-2xl md:hidden">
      <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3">
        <a
          href={phoneHref}
          data-phone-location="intl_sticky_mobile"
          data-intl-event="intl_sticky_call_click"
          data-intl-locale={locale}
          data-intl-page-type={pageType}
          data-intl-route-slug={routeSlug || ''}
          data-intl-location="sticky_bar"
          className="flex-1 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-black"
        >
          {callLabel}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-intl-event="intl_sticky_whatsapp_click"
          data-intl-locale={locale}
          data-intl-page-type={pageType}
          data-intl-route-slug={routeSlug || ''}
          data-intl-location="sticky_bar"
          className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          {whatsappLabel}
        </a>
        <a
          href="#international-form"
          data-intl-event="intl_form_anchor_click"
          data-intl-locale={locale}
          data-intl-page-type={pageType}
          data-intl-route-slug={routeSlug || ''}
          data-intl-location="sticky_bar"
          className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          {formLabel}
        </a>
      </div>
    </div>
  )
}
