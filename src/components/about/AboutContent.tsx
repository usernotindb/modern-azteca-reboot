
import FadeIn from '@/components/ui/FadeIn';

const AboutContent = () => {
  return (
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
  );
};

export default AboutContent;
