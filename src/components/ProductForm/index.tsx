import { PartialProduct } from "@/types/product";
import { Container, useMantineColorScheme } from "@mantine/core";
import Form from "./components/Form";
import styles from "./styles.module.scss";

interface ProductFormProps extends PartialProduct {
    onSubmit: (data: FormData) => void;
}

export default function ProductForm({
    onSubmit,
    ...productProps
}: ProductFormProps) {
    const { colorScheme } = useMantineColorScheme();
    console.log("ProductForm render");

    return (
        <Container
            className={styles.container}
            sx={(theme) => ({
                backgroundColor:
                    colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
            })}
        >
            <Form onSubmit={onSubmit} {...productProps} />
        </Container>
    );
}
