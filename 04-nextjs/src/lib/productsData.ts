export interface Product {
  id: number;
  title: string;
  category: string; 
}

export const products: Product[] = [
  { id: 1, title: "React Course", category: "react" },
  { id: 2, title: "React Course 2", category: "react" },
  { id: 3, title: "Next Course", category: "next" },
  { id: 4, title: "Next Course 2", category: "next" },
  { id: 5, title: "Angular Course", category: "angular" },
  { id: 6, title: "Angular Course 2", category: "angular" },
];