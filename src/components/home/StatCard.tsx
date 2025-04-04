
import React from 'react';
import FadeIn from '../ui/FadeIn';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => (
  <FadeIn 
    direction="up" 
    className="text-center p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-aztec-600">{label}</div>
  </FadeIn>
);

export default StatCard;
