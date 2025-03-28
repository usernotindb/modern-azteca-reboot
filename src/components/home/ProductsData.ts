
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
    image: "/lovable-uploads/78f56f78-5618-46cc-87a1-bbb19df328bb.png"
  },
  {
    id: 2,
    name: "Servers",
    description: "Operate reliably, manage easily, and scale your business. Ideal for growing businesses with remote offices focused on collaboration and file sharing.",
    image: "/lovable-uploads/9f952ca9-69ce-4ab5-8239-0dbdcdae2c6b.png"
  },
  {
    id: 3,
    name: "Work Stations",
    description: "Fully customizable Workstation-class performance and affordability in a new, small form factor design. Featuring optional next generation graphics and Intel® processors.",
    image: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png"
  }
];
