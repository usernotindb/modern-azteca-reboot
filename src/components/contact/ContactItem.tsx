
import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactItem = ({ icon, title, content, href }: ContactItemProps) => {
  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-start group"
    >
      <div className="h-10 w-10 rounded-full bg-accent-50 flex items-center justify-center mr-4 text-accent-600 group-hover:bg-accent-100 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-aztec-900 font-medium mb-1">{title}</h4>
        <p className="text-aztec-600 group-hover:text-accent-600 transition-colors">{content}</p>
      </div>
    </a>
  );
};

export default ContactItem;
