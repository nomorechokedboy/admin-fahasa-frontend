import { SimpleGrid } from "@mantine/core";
import { ReactNode } from "react";

type ProductsProps = {
    children: ReactNode;
};

export default function Products({ children }: ProductsProps) {
    return (
        <SimpleGrid
            cols={4}
            breakpoints={[
                { maxWidth: "lg", cols: 3 },
                { maxWidth: "sm", cols: 2 },
                { maxWidth: "xs", cols: 1 },
            ]}
        >
            {children}
        </SimpleGrid>
    );
}
