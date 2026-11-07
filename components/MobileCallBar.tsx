import { Phone } from 'lucide-react'

/**
 * Fixed bottom call bar for phones (hidden from md up).
 * Families often arrive on a phone in an urgent situation: the primary number
 * must be one tap away on every page, without scrolling back to the hero.
 * Clicks are captured by PostHogPhoneClick via data-phone-location.
 */
export default function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/25 bg-black/95 px-3 pt-2 shadow-2xl backdrop-blur md:hidden"
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href="tel:+48602274661"
        data-phone-location="sticky_mobile_bar"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-base font-semibold text-black"
      >
        <Phone className="h-5 w-5" aria-hidden />
        <span>Zadzwoń 24/7: 602 274 661</span>
      </a>
      <p className="mt-1 text-center text-[11px] text-gray-400">Odbieramy całą dobę · pogrzeb bez zaliczki</p>
    </div>
  )
}
