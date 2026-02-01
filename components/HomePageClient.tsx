import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import ServicesCta from '@/components/ServicesCta';
import ServicesTable from '@/components/ServicesTable';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';

const HomePageClient = () => {
  return (
    <>
      <Hero />
      <Services />
      <Reviews />
      <ServicesCta />
      <ServicesTable />
      <FAQ />
      <About />
      <Contact />

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
