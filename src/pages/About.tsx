import { motion } from 'framer-motion';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import { Clock, Users, Award, Target } from 'lucide-react';
import ValueCard from '@/components/about/ValueCard';
const About = () => {
  const values = [{
    icon: <Clock size={24} />,
    title: "Responsiveness",
    description: "We understand that time is critical in IT. Our team responds quickly to ensure minimal disruption to your business."
  }, {
    icon: <Users size={24} />,
    title: "Client Partnership",
    description: "We view our clients as partners, working together to achieve shared goals and success."
  }, {
    icon: <Award size={24} />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from the solutions we provide to the service we deliver."
  }, {
    icon: <Target size={24} />,
    title: "Results-Driven",
    description: "We focus on delivering measurable results that positively impact your business."
  }];
  return <PageLayout title="About Azteca Technology" subtitle="Our journey of excellence and innovation has made us who we are today.">
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.img initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} alt="Azteca Technology Team" src="/lovable-uploads/a3b3e7cb-c333-48c9-9fdb-30fbed3fdc30.png" className="w-full h-auto rounded-lg shadow-lg mb-6 bg-black object-contain" />
            <div className="grid grid-cols-2 gap-4">
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} alt="IT Services" src="/lovable-uploads/6a008340-e33c-4dfa-b7d5-1354c89963d1.png" className="w-full h-auto rounded-lg shadow-md object-contain" />
              <motion.img initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} alt="Team Collaboration" src="/lovable-uploads/224fe3d7-821a-4862-a5bb-5bd8595267fc.png" className="w-full h-auto rounded-lg shadow-md bg-black object-contain" />
            </div>
          </div>
          
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
              <h2 className="text-3xl font-bold mb-4 text-aztec-900">Our Mission</h2>
              <p className="text-aztec-600">
                At Azteca Technology, our mission is to empower businesses through technology. We believe that the right IT solutions can transform the way you work, enhance productivity, and drive growth.
              </p>
              <p className="text-aztec-600">
                We are committed to providing reliable, innovative, and cost-effective IT services that help our clients achieve their business objectives. Our team of experts works tirelessly to ensure that your technology infrastructure supports your business goals and gives you a competitive edge.
              </p>
              
              <h2 className="text-3xl font-bold mb-4 text-aztec-900 pt-6">Our Story</h2>
              <p className="text-aztec-600">
                Founded in 2005, Azteca Technology began with a simple idea: to provide businesses with IT solutions that actually work. Over the years, we've grown from a small team of passionate technologists to a comprehensive IT service provider serving clients across various industries.
              </p>
              <p className="text-aztec-600">
                Our journey has been marked by continuous learning, innovation, and a relentless focus on client satisfaction. As technology has evolved, so have we, constantly expanding our expertise and refining our services to meet the changing needs of our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      
      <Section background="light" title="Our Values" label="What We Stand For" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <ValueCard key={value.title} title={value.title} icon={value.icon} description={value.description} index={index} />)}
        </div>
      </Section>
      
      <Section background="gradient" centered>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8">
            Partner with Azteca Technology for innovative solutions that drive your business forward.
          </p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-800 hover:bg-yellow-400 transition-colors px-8 py-3 rounded-lg font-medium">
              Get Started Today
            </a>
            <a href="tel:+17143630006" className="border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors px-8 py-3 rounded-lg font-medium text-white">
              Call 714-363-0006
            </a>
          </motion.div>
        </div>
      </Section>
    </PageLayout>;
};
export default About;