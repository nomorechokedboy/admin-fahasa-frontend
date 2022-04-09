export default interface Product {
    _id: string;
    name: string;
    author: string;
    genres: string;
    description: string;
    price: number;
    productSupplier: string;
    publishingCompany: string;
    publicYear: number;
    amount: number;
    image: any;
}

export type FormProps = Partial<Product>;
