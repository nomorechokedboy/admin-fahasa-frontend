import { FormProps } from "@/types";
import { UseFormInput } from "@mantine/form/lib/use-form";

export const PublicYearData = Array.from(Array(23)).map((_, i) => ({
    value: `${i + 2000}`,
    label: `${i + 2000}`,
}));

export const defaultProduct: UseFormInput<FormProps> = {
    initialValues: {
        _id: "",
        amount: 1,
        author: "",
        description: "",
        genres: "",
        image: "",
        name: "",
        price: 10000,
        productSupplier: "",
        publicYear: 2022,
        publishingCompany: "",
    },
};

export const genresData = [
    "Shounen",
    "Horor",
    "Funny",
    "Isekai",
    "Children",
    "Romance",
    "One shot",
    "Adventure",
    "Fiction",
];
