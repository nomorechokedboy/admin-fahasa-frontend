import ProductFormHOC from "@/HOC/ProductFormHOC";
import { createProduct } from "@/lib/api";
import axios from "axios";
import styles from "./styles.module.scss";

const AddForm = () => {
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
            <ProductFormHOC title="Add product" onSubmit={handleSubmit} />
        </div>
    );
};

export default AddForm;
