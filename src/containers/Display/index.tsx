import { Pagination, SimpleGrid, Stack } from "@mantine/core";
import { getAllProduct } from "../../lib/api";
import Product from "./components/Product";
import styles from "./styles.module.scss";
import useSwr from "swr";

export default function Display() {
    const { data } = useSwr("/product", getAllProduct);

    return (
        <Stack>
            <SimpleGrid cols={4}>
                {data.map((product: any, index: any) => {
                    return (
                        <Product
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    );
                })}
            </SimpleGrid>
            <div className={styles.pagination}>
                <Pagination total={5} />
            </div>
        </Stack>
    );
}
