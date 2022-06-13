export default interface Product {
  _id: string;
  sku: string;
  name: string;
  author: string;
  genres: string[];
  description: string;
  price: number;
  productSupplier: string;
  publishingCompany: string;
  publicYear: number;
  amount: number;
  image: any;
}

export type PartialProduct = Partial<Product>;

export interface ProductResponse {
  _id: string;
  sku: string;
  description: string;
  name: string;
  image: string;
  amount: number;
  pubicYear: number;
  productSupplier: {
    name: string;
  };
  publishingCompany: {
    name: string;
  };
  slug: string;
  price: { priceInText: string; amount: number }[];
  deleted: boolean;
}
