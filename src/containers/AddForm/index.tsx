import ProductForm from "@/components/ProductForm";
import Title from "@/components/Title";
import { createProduct } from "@/lib/api";
import axios from "axios";
import { memo } from "react";
import styles from "./styles.module.scss";

const AddForm = memo(() => {
    const handleSubmit = (data: FormData) => {
        createProduct("/product", data)
            .then((res) => {
                console.log({ res });
            })
            .catch((e) => {
                if (axios.isAxiosError(e)) {
                    console.log({ errorMessage: e.response?.data });
                }
            });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title>Add new product</Title>
            </div>
            <ProductForm onSubmit={handleSubmit} />
        </div>
    );
});

export default AddForm;
