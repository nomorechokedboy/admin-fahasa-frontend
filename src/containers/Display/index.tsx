import { Pagination, SimpleGrid, Stack } from "@mantine/core";
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
    const loading = data ? false : true;

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
                {loading
                    ? [...Array(8).keys()].map((value: number) => (
                          <Product key={value} loading={loading} />
                      ))
                    : data.map((product: any, index: any) => (
                          <Product
                              loading={loading}
                              key={index}
                              name={product.name}
                              price={product.price}
                              imageSrc={product.image}
                          />
                      ))}
            </SimpleGrid>
            <div className={styles.pagination}>
                <Pagination total={5} />
            </div>
        </Stack>
    );
}
