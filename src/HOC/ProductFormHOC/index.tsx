import ProductForm from "@/components/ProductForm";
import Title from "@/components/Title";
import { PartialProduct } from "@/types";
import styles from "./styles.module.scss";

interface ProductFormHOCProps extends PartialProduct {
    onSubmit: (data: FormData) => void;
    title: string;
}

const ProductFormHOC = ({
    onSubmit,
    title,
    ...product
}: ProductFormHOCProps) => {
    return (
        <>
            <div className={styles.title}>
                <Title>{title}</Title>
            </div>
            <ProductForm {...product} onSubmit={onSubmit} />
        </>
    );
};

export default ProductFormHOC;
