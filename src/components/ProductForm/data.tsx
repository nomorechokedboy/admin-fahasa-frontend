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
        price: 1000,
        productSupplier: "",
        publicYear: 2000,
        publishingCompany: "",
    },
};

export const toolbarConfig = {
    display: [
        "INLINE_STYLE_BUTTONS",
        "BLOCK_TYPE_BUTTONS",
        "LINK_BUTTONS",
        "BLOCK_TYPE_DROPDOWN",
    ],
    INLINE_STYLE_BUTTONS: [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_DROPDOWN: [
        { label: "Normal", style: "unstyled" },
        { label: "Heading Large", style: "header-one" },
        { label: "Heading Medium", style: "header-two" },
        { label: "Heading Small", style: "header-three" },
    ],
    BLOCK_TYPE_BUTTONS: [
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
    ],
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
