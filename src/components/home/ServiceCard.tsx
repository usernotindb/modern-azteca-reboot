
import React from 'react';
import FadeIn from '../ui/FadeIn';
import AnimatedButton from '../ui/AnimatedButton';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => (
  <FadeIn 
    direction="up" 
    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-blue-900/30 z-10"></div>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
    />
    
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100 mb-4">{description}</p>
      <div className="flex justify-center">
        <AnimatedButton 
          href={link} 
          variant="outline" 
          className="border-blue-300 bg-blue-600 text-black hover:bg-blue-500 font-medium shadow-md w-full justify-center" 
          withArrow
        >
          Learn More
        </AnimatedButton>
      </div>
    </div>
  </FadeIn>
);

export default ServiceCard;
