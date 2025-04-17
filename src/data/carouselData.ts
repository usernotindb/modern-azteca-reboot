
import { getImagePath } from "@/config/images";

export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  keyPoints: string[];
  iconIds: string[];
}

export const carouselItems: CarouselItem[] = [
  {
    id: "ats-software",
    title: "ATS Software",
    image: getImagePath("icon-software"),
    keyPoints: [
      "Professional tax preparation",
      "High-volume processing",
      "Secure client data management",
      "Automated compliance checks"
    ],
    iconIds: ['Calculator', 'FileText', 'Lock', 'CheckSquare']
  },
  {
    id: "premium-hardware",
    title: "Premium Hardware",
    image: getImagePath("laptop-business-pro"),
    keyPoints: [
      "High-performance workstations",
      "Business-grade laptops",
      "Enterprise servers",
      "Custom configurations"
    ],
    iconIds: ['Laptop', 'Server', 'HardDrive', 'Settings']
  },
  {
    id: "it-support",
    title: "IT Support",
    image: getImagePath("icon-support"),
    keyPoints: [
      "24/7 technical assistance",
      "Remote troubleshooting",
      "Network maintenance",
      "System optimization"
    ],
    iconIds: ['Headset', 'Wrench', 'Network', 'Activity']
  },
  {
    id: "ip-security-cameras",
    title: "IP Security Cameras",
    image: getImagePath("icon-security"),
    keyPoints: [
      "HD surveillance systems",
      "Remote monitoring",
      "Motion detection",
      "Cloud storage options"
    ],
    iconIds: ['Camera', 'Wifi', 'Cloud', 'Shield']
  },
  {
    id: "office-essentials",
    title: "Office Essentials",
    image: getImagePath("icon-software"),
    keyPoints: [
      "Productivity software suites",
      "Document management",
      "Collaboration tools",
      "Business communication systems"
    ],
    iconIds: ['Briefcase', 'FileText', 'Users', 'MessageSquare']
  }
];
