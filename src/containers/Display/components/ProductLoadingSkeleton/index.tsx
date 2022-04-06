import { SimpleGrid } from "@mantine/core";
import Product from "../Product";

export default function ProductLoadingSekeletons() {
    return (
        <SimpleGrid cols={4}>
            {[...Array(8).keys()].map((value: number) => (
                <Product key={value} loading />
            ))}
        </SimpleGrid>
    );
}
