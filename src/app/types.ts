export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductCardType = Pick<
  Product,
  "id" | "title" | "images" | "price" | "rating" | "brand"
>;

export type ProductDetails = ProductCardType & {
  description: string;
};
