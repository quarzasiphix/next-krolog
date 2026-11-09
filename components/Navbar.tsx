'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Clock, ChevronDown, ChevronRight, Globe2 } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'

const servicesItems = [
  { name: 'Usługi Pogrzebowe Łódź', path: '/uslugi-pogrzebowe-lodz' },
  { name: 'Klepsydra online', path: '/klepsydra' },
  { name: 'Organizacja pogrzebów Łódź', path: '/uslugi/organizacja-pogrzebow-lodz' },
  { name: 'Transport zmarłych Łódź', path: '/uslugi/transport-zmarlych-lodz' },
  { name: 'Krematorium Łódź', path: '/uslugi/krematorium-lodz' },
  { name: 'Ekshumacja zwłok Łódź', path: '/uslugi/ekshumacja-lodz' },
  { name: 'Oprawa muzyczna pogrzebu Łódź', path: '/uslugi/oprawa-muzyczna-lodz' },
  { name: 'Międzynarodowy transport zwłok', path: '/uslugi/sprowadzenie-zwlok-z-zagranicy' },
  { name: 'Dla zakładów pogrzebowych', path: '/dla-zakladow-pogrzebowych' },
  { name: 'Niemcy – Polska', path: '/uslugi/sprowadzenie-zwlok-z-niemiec' },
  { name: 'UK – Polska', path: '/uslugi/sprowadzenie-zwlok-z-uk' },
  { name: 'Holandia – Polska', path: '/uslugi/sprowadzenie-zwlok-z-holandii' },
  { name: 'Kontakt 24/7 dla rodzin z zagranicy', path: '/kontakt' },
]

const productsItems = [
  { name: 'Asortyment', path: '/asortyment' },
  { name: 'Trumny Łódź', path: '/asortyment/trumny-lodz' },
  { name: 'Urny Łódź', path: '/asortyment/urny-lodz' },
  { name: 'Wiązanki pogrzebowe Łódź', path: '/asortyment/wiazanki-lodz' },
  { name: 'Wieńce pogrzebowe Łódź', path: '/asortyment/wience-lodz' },
  { name: 'Odzież pogrzebowa Łódź', path: '/asortyment/odziez-lodz' },
]

const poradnikItems = [
  { name: 'Poradnik', path: '/poradnik' },
  { name: 'Pogrzeb Łódź – koszty i organizacja', path: '/pogrzeb-lodz' },
  { name: 'Nekrologi Łódź', path: '/nekrologi-lodz' },
  { name: 'Klepsydra online', path: '/klepsydra' },
  { name: 'Pogrzeb bez zaliczki', path: '/pogrzeb-bez-zaliczki' },
  { name: 'USC Łódź i akt zgonu', path: '/urzad-stanu-cywilnego-lodz' },
  { name: 'ZUS i zasiłek pogrzebowy', path: '/zus-zasilek-pogrzebowy-lodz' },
  { name: 'Przewóz zwłok', path: '/poradnik/przewoz-zwlok' },
  { name: 'Transport z zagranicy', path: '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy' },
  { name: 'Cmentarze w Łodzi', path: '/cmentarze-lodz' },
]

const aboutItems = [
  { name: 'Nekrolog Łódź', path: '/nekrolog-lodz' },
  { name: 'Klepsydra online', path: '/klepsydra' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Obszar działania', path: '/obszar-dzialania' },
  { name: 'Kontakt', path: '/kontakt' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleMenuOpenChange = (open: boolean) => {
    setIsMenuOpen(open)

    if (!open) {
      setActiveSubmenu(null)
    }
  }

  const toggleSubmenu = (menu: string) => setActiveSubmenu(activeSubmenu === menu ? null : menu)

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
      setActiveSubmenu(null)
    }
  }, [isMobile])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveSubmenu(null)
  }, [pathname])

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      window.location.href = '/#' + id
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setIsMenuOpen(false)
      setActiveSubmenu(null)
    }
  }

  const renderMenuBlock = (title: string, key: string, items: Array<{ name: string; path: string }>) => (
    <div className="rounded-lg border border-white/10 bg-black px-4">
      <button
        type="button"
        onClick={() => toggleSubmenu(key)}
        className="flex w-full items-center justify-between py-4 text-left text-xl text-white transition-colors hover:text-primary"
      >
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${activeSubmenu === key ? 'rotate-180' : ''}`} />
      </button>

      {activeSubmenu === key && (
        <div className="space-y-2 border-t border-white/10 pb-4 pt-3 max-h-[320px] overflow-y-auto bg-black">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => {
                setIsMenuOpen(false)
                setActiveSubmenu(null)
              }}
              className="text-gray-300 hover:text-primary transition-colors text-lg py-2 w-full text-left flex items-center"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4 md:py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="block text-xl md:text-2xl font-playfair font-bold text-white">
              <span className="text-primary">Nekrolog</span> Łódź
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary transition-colors py-2">
            Strona główna
          </button>

          <Link href="/uslugi/sprowadzenie-zwlok-z-zagranicy" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/15">
            <Globe2 className="h-4 w-4" />
            Transport 24/7 Polska
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Usługi pogrzebowe
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[360px] gap-1 p-2">
                    {servicesItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link href={item.path} className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary">
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Asortyment
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[300px] gap-1 p-2">
                    {productsItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link href={item.path} className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary">
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Poradnik
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[280px] gap-1 p-2 max-h-[400px] overflow-y-auto">
                    {poradnikItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link href={item.path} className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary">
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  O nas
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black border border-primary/20">
                  <ul className="grid w-[160px] gap-1 p-2">
                    {aboutItems.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link href={item.path} className="w-full text-left block select-none space-y-1 rounded-md p-3 text-white hover:bg-primary/10 hover:text-primary">
                            <div>{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex flex-col items-end">
          <a href="tel:+48602274661" data-phone-location="navbar_desktop_primary" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium text-lg">+48 602 274 661</span>
          </a>
          <a href="tel:+48602270050" data-phone-location="navbar_desktop_international" className="flex items-center text-gray-300 hover:text-primary/80 transition-colors text-sm mt-1">
            <Phone className="w-4 h-4 mr-2" />
            <span className="font-medium">+48 602 270 050</span>
          </a>
          <div className="flex items-center text-gray-400 text-xs mt-1">
            <Clock className="w-3 h-3 mr-1" />
            <span>Dostępni 24/7</span>
          </div>
        </div>

        <a
          href="tel:+48602274661"
          data-phone-location="navbar_mobile_header"
          aria-label="Zadzwoń 24/7: +48 602 274 661"
          className="ml-auto mr-1 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-black md:hidden"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span>Zadzwoń</span>
        </a>

        <Sheet open={isMenuOpen} onOpenChange={handleMenuOpenChange}>
          <SheetTrigger asChild>
            <button type="button" aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'} className="md:hidden p-2 text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full border-l border-white/10 bg-black px-0 pb-0 pt-0 text-white sm:max-w-md"
          >
            <SheetTitle className="sr-only">Menu mobilne</SheetTitle>

            <div className="flex h-full flex-col overflow-hidden pt-16">
              <div className="h-full overflow-y-auto overscroll-contain px-6 pb-10 pt-6">
                <div className="border-b border-primary/30 pb-4 text-center">
                  <h2 className="mb-1 text-xl font-playfair text-white">Nekrolog Łódź</h2>
                  <p className="text-sm text-gray-300">Pogrzeby, krajowy i międzynarodowy transport zwłok</p>
                  <p className="mt-1 text-xs text-gray-400">dostepne 24 godziny na dobe</p>
                </div>

                <div className="mt-4 flex flex-col space-y-3">
                  <button
                    type="button"
                    onClick={() => scrollToSection('home')}
                    className="rounded-lg border border-white/10 bg-black px-4 py-4 text-left text-xl text-white transition-colors hover:text-primary"
                  >
                    Strona główna
                  </button>

                  <Link
                    href="/uslugi/sprowadzenie-zwlok-z-zagranicy"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-4 text-center text-primary"
                  >
                    <Globe2 className="h-5 w-5" />
                    <span className="font-semibold">Transport międzynarodowy 24/7</span>
                  </Link>

                  {renderMenuBlock('Usługi pogrzebowe', 'services', servicesItems)}
                  {renderMenuBlock('Asortyment', 'products', productsItems)}
                  {renderMenuBlock('Poradnik', 'poradnik', poradnikItems)}
                  {renderMenuBlock('O nas', 'about', aboutItems)}

                  <a href="tel:+48602274661" data-phone-location="navbar_mobile_primary" className="mt-3 flex w-full items-center justify-center rounded-md border border-primary bg-black py-3 text-primary">
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="font-medium">+48 602 274 661</span>
                  </a>
                  <a href="tel:+48602270050" data-phone-location="navbar_mobile_international" className="mt-2 flex w-full items-center justify-center rounded-md border border-white/20 bg-black py-3 text-sm text-gray-300">
                    <Phone className="mr-2 h-4 w-4" />
                    <span className="font-medium">+48 602 270 050</span>
                  </a>

                  <div className="mt-5 rounded-lg border border-white/10 bg-black p-4 text-center">
                    <h3 className="mb-1 font-medium text-primary">Zakład pogrzebowy i transport w centrum Łodzi</h3>
                    <address className="not-italic text-sm text-gray-300">Legionów 48, 90-702 Łódź, Polska</address>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar

