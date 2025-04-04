
import ContentCard from '../ui/ContentCard';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ValueCard = ({ title, description, icon, index }: ValueCardProps) => {
  return (
    <ContentCard 
      title={title} 
      icon={icon}
      delay={0.1 * index}
    >
      <p>{description}</p>
    </ContentCard>
  );
};

export default ValueCard;
