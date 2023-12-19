export interface ProductCharacteristic {
  name: string;
  value: string;
}

export interface ProductReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductModel {
  _id: string;
  categories: string[];
  tags: string[];
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  characteristics: ProductCharacteristic[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: ProductReview[];
  reviewCount: number;
  reviewAvg?: number;
}
