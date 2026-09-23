import productGrid from "@/assets/products-grid.jpg";
import redDress from "@/assets/product-red-dress.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  mrp?: number;
  image: string;
  position?: string;
  colors: string[];
  badge?: string;
  fit: "Regular" | "Relaxed" | "Tailored";
  fabric: "Cotton" | "Linen" | "Denim" | "Knit";
  occasion: "Everyday" | "Work" | "Evening";
  collection: "September Edit" | "City Colour" | "Core Wardrobe";
  sizes: Array<{ label: string; available: boolean }>;
};

const standardSizes = ["XS", "S", "M", "L", "XL"].map((label, index) => ({ label, available: index !== 4 }));

export const featuredProduct: Product = { slug: "sienna-structured-midi", name: "Sienna Structured Midi", category: "Dresses", price: 3290, mrp: 3990, image: redDress, colors: ["brick", "ink"], badge: "NEW", fit: "Tailored", fabric: "Cotton", occasion: "Evening", collection: "September Edit", sizes: standardSizes };

export const products: Product[] = [
  featuredProduct,
  { slug: "air-linen-shirt", name: "Air Linen Shirt", category: "Shirts", price: 1890, image: productGrid, position: "50% 15%", colors: ["ivory", "sky"], fit: "Relaxed", fabric: "Linen", occasion: "Work", collection: "Core Wardrobe", sizes: standardSizes },
  { slug: "noir-tailored-set", name: "Noir Tailored Co-ord", category: "Co-ords", price: 4490, mrp: 5290, image: productGrid, position: "88% 15%", colors: ["ink"], badge: "BESTSELLER", fit: "Tailored", fabric: "Cotton", occasion: "Work", collection: "City Colour", sizes: standardSizes },
  { slug: "cobalt-knit-polo", name: "Cobalt Knit Polo", category: "Tops", price: 1790, image: productGrid, position: "14% 86%", colors: ["cobalt", "ivory"], fit: "Regular", fabric: "Knit", occasion: "Everyday", collection: "City Colour", sizes: standardSizes },
  { slug: "everyday-denim-set", name: "Everyday Denim Set", category: "Denim", price: 3890, image: productGrid, position: "50% 86%", colors: ["denim", "ink"], fit: "Relaxed", fabric: "Denim", occasion: "Everyday", collection: "Core Wardrobe", sizes: standardSizes },
  { slug: "emerald-wrap-jumpsuit", name: "Emerald Wrap Jumpsuit", category: "Jumpsuits", price: 3490, image: productGrid, position: "87% 86%", colors: ["emerald", "ink"], fit: "Regular", fabric: "Cotton", occasion: "Evening", collection: "September Edit", sizes: standardSizes },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;
