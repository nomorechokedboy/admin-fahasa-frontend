import { FormProps } from "@/types/product";

export const getFormData = (values: FormProps) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) =>
        formData.append(key, values[key as keyof typeof values]),
    );

    return formData;
};
