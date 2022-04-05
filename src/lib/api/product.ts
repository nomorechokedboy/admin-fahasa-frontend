import axiosClient from "../axiosClient";

export async function getAllProduct(url: string) {
    const res = await axiosClient.get(url);

    return res.data;
}
