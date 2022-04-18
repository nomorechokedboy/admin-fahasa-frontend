import Product from "@/types/product";
import axiosClient from "../../lib/axiosClient";

export async function getAllProduct(url: string) {
    const res = await axiosClient.get(url);

    return res.data;
}

export const createProduct = (url: string, newProduct: Partial<Product>) =>
    axiosClient.post(url, newProduct).then((res) => res.data);
