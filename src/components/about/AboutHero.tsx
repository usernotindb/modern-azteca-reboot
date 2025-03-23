
import FadeIn from '@/components/ui/FadeIn';

const AboutHero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-50 text-accent-600 text-sm font-medium">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aztec-900">
          About Aztecas
        </h1>
        <p className="text-aztec-600 text-lg mb-8 max-w-2xl mx-auto">
          Our journey of excellence and innovation has made us who we are today.
        </p>
      </FadeIn>
    </div>
  );
};

export default AboutHero;
