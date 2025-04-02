
import { getImagePath } from '@/config/images';

export interface Product {
  id: number;
  name: string;
  description: string;
  imageId: string;
  link: string;
}

export const productsList: Product[] = [
  {
    id: 1,
    name: "Laptops",
    description: "Get everything done faster, from booting up to accessing your data, with a 256GB solid state hard drive.",
    imageId: "laptop-business-pro",
    link: "/products/laptops"
  },
  {
    id: 2,
    name: "Servers",
    description: "Operate reliably, manage easily, and scale your business. Ideal for growing businesses with remote offices focused on collaboration and file sharing.",
    imageId: "icon-apps",
    link: "/products/servers"
  },
  {
    id: 3,
    name: "Work Stations",
    description: "Fully customizable Workstation-class performance and affordability in a new, small form factor design. Featuring optional next generation graphics and Intel® processors.",
    imageId: "icon-hardware",
    link: "/products/workstations"
  }
];
