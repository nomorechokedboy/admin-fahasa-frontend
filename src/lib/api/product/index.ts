import axiosClient from "../../axiosClient";

export async function getAllProduct(url: string) {
    const res = await axiosClient.get(url);

    return res.data;
}

export const createProduct = (url: string, newProduct: FormData) =>
    axiosClient.post(url, newProduct);
