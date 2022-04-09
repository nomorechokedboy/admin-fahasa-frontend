import ProductForm from "@/components/ProductForm";
import Title from "@/components/Title";
import { FormProps } from "@/types";
import { memo } from "react";
import styles from "./styles.module.scss";

interface ProductFormHOCProps extends FormProps {
    onSubmit: () => void;
    title: string;
}

const ProductFormHOC = memo<ProductFormHOCProps>(
    ({ onSubmit, title, ...product }) => {
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <Title>{title}</Title>
                </div>
                <ProductForm {...product} onSubmit={onSubmit} />
            </div>
        );
    },
    (prev, next) => prev.onSubmit !== next.onSubmit,
);

export default ProductFormHOC;
