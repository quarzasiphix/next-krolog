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
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'

const servicesItems = [
  { name: 'Uslugi Pogrzebowe Lodz', path: '/uslugi-pogrzebowe-lodz' },
  { name: 'Organizacja pogrzebow Lodz', path: '/uslugi/organizacja-pogrzebow-lodz' },
  { name: 'Transport zmarlych Lodz', path: '/uslugi/transport-zmarlych-lodz' },
  { name: 'Krematorium Lodz', path: '/uslugi/krematorium-lodz' },
  { name: 'Ekshumacja zwlok Lodz', path: '/uslugi/ekshumacja-lodz' },
  { name: 'Oprawa muzyczna pogrzebu Lodz', path: '/uslugi/oprawa-muzyczna-lodz' },
  { name: 'Miedzynarodowy transport zwlok', path: '/pl/uslugi/miedzynarodowy-transport-zwlok' },
  { name: 'Sprowadzenie zmarlego do Polski', path: '/pl/uslugi/sprowadzenie-zmarlego-do-polski' },
  { name: 'Niemcy -> Polska', path: '/pl/kraje/niemcy' },
  { name: 'UK -> Polska', path: '/pl/kraje/wielka-brytania' },
  { name: 'Holandia -> Polska', path: '/pl/kraje/holandia' },
  { name: 'Kontakt 24/7 dla rodzin z zagranicy', path: '/pl/kontakt' },
]

const productsItems = [
  { name: 'Asortyment', path: '/asortyment' },
  { name: 'Trumny Lodz', path: '/asortyment/trumny-lodz' },
  { name: 'Urny Lodz', path: '/asortyment/urny-lodz' },
  { name: 'Wiazanki pogrzebowe Lodz', path: '/asortyment/wiazanki-lodz' },
  { name: 'Wience pogrzebowe Lodz', path: '/asortyment/wience-lodz' },
  { name: 'Odziez pogrzebowa Lodz', path: '/asortyment/odziez-lodz' },
]

const poradnikItems = [
  { name: 'Poradnik', path: '/poradnik' },
  { name: 'Pogrzeb bez zaliczki', path: '/pogrzeb-bez-zaliczki' },
  { name: 'Przewoz zwlok', path: '/poradnik/przewoz-zwlok' },
  { name: 'Transport z zagranicy', path: '/poradnik/jak-przetransportowac-cialo-zmarlego-z-zagranicy' },
  { name: 'Cmentarze w Lodzi', path: '/cmentarze-lodz' },
]

const aboutItems = [
  { name: 'Nekrolog Lodz', path: '/nekrolog-lodz' },
  { name: 'O nas', path: '/o-nas' },
  { name: 'Kontakt', path: '/kontakt' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSubmenu = (menu: string) => setActiveSubmenu(activeSubmenu === menu ? null : menu)

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
      setActiveSubmenu(null)
    }
  }, [isMobile])

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
    <div className="border-b border-white/10">
      <button onClick={() => toggleSubmenu(key)} className="flex items-center justify-between text-white hover:text-primary transition-colors text-xl py-3 w-full">
        <span>{title}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${activeSubmenu === key ? 'rotate-180' : ''}`} />
      </button>

      {activeSubmenu === key && (
        <div className="pl-4 pb-2 space-y-2 max-h-[320px] overflow-y-auto">
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
            <h1 className="text-xl md:text-2xl font-playfair font-bold text-white">
              <span className="text-primary">Nekrolog</span> Lodz
            </h1>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary transition-colors py-2">
            Strona glowna
          </button>

          <Link href="/pl/uslugi/miedzynarodowy-transport-zwlok" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/15">
            <Globe2 className="h-4 w-4" />
            Transport 24/7 Polska
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:text-primary hover:text-primary/90 hover:bg-transparent focus:bg-transparent px-3 py-2">
                  Uslugi pogrzebowe
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
            <span>Dostepni 24/7</span>
          </div>
        </div>

        <button className="md:hidden text-white p-2" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 top-16 bg-black z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-2">
          <div className="border-b border-primary/30 pb-4 text-center">
            <h2 className="text-xl font-playfair text-white mb-1">Nekrolog Lodz</h2>
            <p className="text-gray-300 text-sm">Pogrzeby, krajowy i miedzynarodowy transport zwlok</p>
            <p className="text-gray-400 text-xs mt-1">dostepne 24 godziny na dobe</p>
          </div>

          <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary transition-colors text-xl py-3 border-b border-white/10 w-full text-left">
            Strona glowna
          </button>

          <Link
            href="/pl/uslugi/miedzynarodowy-transport-zwlok"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-4 text-center text-primary"
          >
            <Globe2 className="h-5 w-5" />
            <span className="font-semibold">Transport miedzynarodowy 24/7</span>
          </Link>

          {renderMenuBlock('Uslugi pogrzebowe', 'services', servicesItems)}
          {renderMenuBlock('Asortyment', 'products', productsItems)}
          {renderMenuBlock('Poradnik', 'poradnik', poradnikItems)}
          {renderMenuBlock('O nas', 'about', aboutItems)}

          <a href="tel:+48602274661" data-phone-location="navbar_mobile_primary" className="flex items-center justify-center text-primary mt-6 py-3 border border-primary rounded-md w-full">
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">+48 602 274 661</span>
          </a>
          <a href="tel:+48602270050" data-phone-location="navbar_mobile_international" className="flex items-center justify-center text-gray-300 mt-2 py-3 border border-white/20 rounded-md w-full text-sm">
            <Phone className="w-4 h-4 mr-2" />
            <span className="font-medium">+48 602 270 050</span>
          </a>

          <div className="mt-8 glass-card p-4 rounded-lg text-center">
            <h3 className="text-primary font-medium mb-1">Zaklad pogrzebowy i transport w centrum Lodzi</h3>
            <address className="not-italic text-gray-300 text-sm">Legionow 48, 90-702 Lodz, Polska</address>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

