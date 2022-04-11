import ProductForm from "@/components/ProductForm";
import Title from "@/components/Title";
import { FormProps } from "@/types";
import styles from "./styles.module.scss";

interface ProductFormHOCProps extends FormProps {
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
