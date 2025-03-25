
import FadeIn from '@/components/ui/FadeIn';

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "300%", text: "Businesses are more likely to be burglarized without security systems" },
            { number: "60%", text: "Of cyber attacks target small to mid-sized businesses" },
            { number: "94%", text: "Reduction in theft with proper security camera systems" },
            { number: "24/7", text: "Continuous protection with our security solutions" }
          ].map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-6 rounded-xl shadow-md text-center h-full">
                <div className="text-3xl md:text-4xl font-bold text-purple-800 mb-3">{stat.number}</div>
                <p className="text-slate-600">{stat.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
