import { IMAGES } from '../assets/images';
import { Cross } from 'lucide-react';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] w-full overflow-hidden flex flex-col items-center justify-center py-12"
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

      <div className="relative z-10 mb-12 flex items-center justify-center">
        <img
          src="/lovable-uploads/cross.png"
          alt="Nekrolog Łódź"
          className="h-28 mx-auto hero-logo opacity-90"
        />
      </div>

      <HeroContent />

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-10">
        <Cross className="h-10 w-10 text-primary/40" />
      </div>
    </section>
  );
};

export default Hero;
