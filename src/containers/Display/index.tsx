import { Pagination, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import NotificationDialog from "@/components/NotificationDiaglog";
import Product from "./components/Product";
import styles from "./styles.module.scss";
import useSWR from "swr/immutable";
import * as AiIcons from "react-icons/ai";
import { useToggle } from "@mantine/hooks";
import { getAllProduct } from "../../lib/api";

export default function Display() {
    const { data, error } = useSWR("/product", getAllProduct);
    const [notiOpened, notiToggle] = useToggle(true, [false, true]);

    const handleCloseNotification = () => {
        notiToggle();
    };

    return error ? (
        <NotificationDialog
            opened={notiOpened}
            onClose={handleCloseNotification}
            icon={<AiIcons.AiOutlineClose />}
            title="Fetching error"
            color="red"
        />
    ) : (
        <Stack>
            <SimpleGrid cols={4}>
                {!data ? (
                    <Skeleton height={50} mb="xl" />
                ) : (
                    data.map((product: any, index: any) => (
                        <Product
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                )}
            </SimpleGrid>
            <div className={styles.pagination}>
                <Pagination total={5} />
            </div>
        </Stack>
    );
}
