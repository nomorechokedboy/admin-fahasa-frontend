import ProductFile from "@/types/customs/file";

export const generateUploadMessage = (
    name: string | undefined,
    productImage: ProductFile | undefined,
) => {
    let message = `Please ${name ? "" : "input product name"} ${
        name || productImage ? "" : "and"
    } ${productImage ? "" : "upload image"}!`;

    if (name && productImage) message = "Click to upload!";

    return message;
};
