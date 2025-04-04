
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

const TeamMember = ({ name, role, image, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-aztec-900">{name}</h3>
      <p className="text-aztec-600">{role}</p>
    </motion.div>
  );
};

export default TeamMember;
