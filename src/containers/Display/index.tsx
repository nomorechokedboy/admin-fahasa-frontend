import { Pagination, SimpleGrid, Stack } from "@mantine/core";
import NotificationDialog from "@/components/NotificationDiaglog";
import ProductLoadingSekeletons from "./components/ProductLoadingSkeleton";
import Product from "./components/Product";
import CTA from "@/components/CTA";
import styles from "./styles.module.scss";
import useSWR from "swr/immutable";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import { useToggle } from "@mantine/hooks";
import { getAllProduct } from "../../lib/api";
import { Key } from "react";

export default function Display() {
    const { data, error, isValidating, mutate } = useSWR(
        "/product",
        getAllProduct,
    );
    const [notiOpened, notiToggle] = useToggle(true, [false, true]);
    const hasData = data && data.length;

    const handleCloseNotification = () => {
        notiToggle();
    };

    const handleReloadClick = () => {
        mutate("/product");
    };

    return (
        <Stack className={styles.container}>
            {error ? (
                <>
                    <CTA
                        icon={<FiIcons.FiMeh />}
                        label="Reload the page"
                        message={error.message}
                        onClick={handleReloadClick}
                    />
                    <NotificationDialog
                        opened={notiOpened}
                        onClose={handleCloseNotification}
                        icon={<AiIcons.AiOutlineClose />}
                        title="Fetching error"
                        message={error.message}
                        color="red"
                    />
                </>
            ) : isValidating ? (
                <ProductLoadingSekeletons />
            ) : !hasData ? (
                <CTA
                    icon={<BsIcons.BsCartX />}
                    message="There is no current product, please add new product!"
                    label="Add new product"
                    onClick={() => {}}
                />
            ) : (
                <>
                    <SimpleGrid cols={4}>
                        {data.map((product: any, index: Key) => (
                            <Product
                                key={index}
                                loading={isValidating}
                                name={product.name}
                                price={product.price}
                                imageSrc={product.image}
                            />
                        ))}
                    </SimpleGrid>
                    <div className={styles.pagination}>
                        <Pagination total={5} />
                    </div>
                </>
            )}
        </Stack>
    );
}
