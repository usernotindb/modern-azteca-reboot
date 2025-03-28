
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const productsList: Product[] = [
  {
    id: 1,
    name: "Laptops",
    description: "Get everything done faster, from booting up to accessing your data, with a 256GB solid state hard drive.",
    image: "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png"
  },
  {
    id: 2,
    name: "Servers",
    description: "Operate reliably, manage easily, and scale your business. Ideal for growing businesses with remote offices focused on collaboration and file sharing.",
    image: "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png"
  },
  {
    id: 3,
    name: "Work Stations",
    description: "Fully customizable Workstation-class performance and affordability in a new, small form factor design. Featuring optional next generation graphics and Intel® processors.",
    image: "/lovable-uploads/fd6981e3-b5e5-4a03-9cd8-38fac8167126.png"
  }
];
