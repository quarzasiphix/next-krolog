import { IMAGES } from '../assets/images';
import { Cross } from 'lucide-react';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-background"
        style={{
          backgroundImage: `url(${IMAGES.church})`,
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay hero-overlay"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      />

      <div className="relative z-10 mb-8 flex items-center justify-center">
        <img
          src="/lovable-uploads/cross.png"
          alt="Nekrolog Łódź"
          className="h-32 mx-auto hero-logo"
        />
      </div>

      <HeroContent />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="flex items-center justify-center mx-3">
          <Cross className="h-14 w-14 text-primary cross-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
