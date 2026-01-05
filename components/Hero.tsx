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

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03] mix-blend-overlay hero-overlay"
        style={{ backgroundImage: `url(${IMAGES.cross})` }}
      />

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />

      <div className="relative z-10 mb-8 flex items-center justify-center">
        <img
          src="/lovable-uploads/cross.png"
          alt="Nekrolog Łódź"
          className="h-32 mx-auto hero-logo"
        />
      </div>

      <HeroContent />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-20">
        <Cross className="h-12 w-12 text-primary/50" />
      </div>
    </section>
  );
};

export default Hero;
