
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
    image: "/lovable-uploads/0cc76fb6-7912-43fd-9e88-c94137d92a37.png"
  },
  {
    id: 2,
    name: "Servers",
    description: "Operate reliably, manage easily, and scale your business. Ideal for growing businesses with remote offices focused on collaboration and file sharing.",
    image: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png"
  },
  {
    id: 3,
    name: "Work Stations",
    description: "Fully customizable Workstation-class performance and affordability in a new, small form factor design. Featuring optional next generation graphics and Intel® processors.",
    image: "/lovable-uploads/628857d0-dac0-42fc-b3e9-4528eee9ef00.png"
  }
];
