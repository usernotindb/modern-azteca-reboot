
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/ui/FadeIn';

const About = () => {
  return (
    <Layout>
      <div className="mt-16 lg:mt-24">
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

        <div className="bg-aztec-50 py-16 md:py-24 mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeIn direction="up">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-aztec-900">
                  Our Mission & Vision
                </h2>
                <div className="prose prose-lg text-aztec-700">
                  <p>
                    This is where your about page content would go. Describe your company history, 
                    mission, vision and values. Tell the story of how you started, your milestones, 
                    and what makes your company unique.
                  </p>
                  <p>
                    Explain your commitment to quality, innovation, and customer satisfaction. 
                    Highlight any special manufacturing processes, materials, or techniques that 
                    set your products apart from competitors.
                  </p>
                  <p>
                    Share your company culture and the people behind your brand. Introduce key team 
                    members and their expertise. This adds a human element to your brand and helps 
                    build trust with potential customers.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
