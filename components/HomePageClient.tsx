import Hero from '@/components/Hero';
import NoUpfrontCosts from '@/components/NoUpfrontCosts';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import ServicesCta from '@/components/ServicesCta';
import ServicesTable from '@/components/ServicesTable';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Link from 'next/link';

const HomePageClient = () => {
  return (
    <>
      <Hero />
      <NoUpfrontCosts />
      <Services />
      <Reviews />
      <ServicesCta />
      <ServicesTable />
      <FAQ />
      <About />
      <Contact />

      <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair text-white text-center mb-8">Najważniejsze Strony</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/zaklad-pogrzebowy-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Zakład Pogrzebowy Łódź</Link>
              <Link href="/nekrolog-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Nekrolog Łódź</Link>
              <Link href="/uslugi-pogrzebowe-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Usługi Pogrzebowe Łódź</Link>
              <Link href="/cmentarze-lodz" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Cmentarze w Łodzi</Link>
              <Link href="/poradnik" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Poradnik Pogrzebowy</Link>
              <Link href="/pogrzeb-bez-zaliczki" className="bg-black/40 border border-white/10 rounded-lg p-4 text-gray-200 hover:border-primary/40 hover:text-white transition-colors">Pogrzeb bez zaliczki</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Potrzebujesz pomocy?</h2>
          <p className="text-lg mb-6 text-gray-300">Jesteśmy dostępni 24/7, aby Ci pomóc w trudnych chwilach.</p>
          <a
            href="tel:+48602274661"
            className="text-2xl font-bold text-primary hover:underline"
          >
            Zadzwoń: +48 602 274 661
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePageClient;
