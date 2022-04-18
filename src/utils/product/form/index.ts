import { PartialProduct } from "@/types/product";

export const getFormData = (values: PartialProduct) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) =>
        formData.append(key, values[key as keyof typeof values]),
    );

    return formData;
};
