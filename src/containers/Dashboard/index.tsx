import { Grid, SimpleGrid } from "@mantine/core";
import TotalBox from "./components/TotalBox";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { getAllProduct } from "@/api/product";
import styles from "./styles.module.scss";
import useSWR from "swr";
import ListPageLayout from "@/layout/SubPageLayout";
import { DASHBOARD } from "@/configs";
import Chart from "./components/Chart";
import ListOrder from "./components/ListOrder";

export default function Dashboard() {
    const { data: product, isValidating } = useSWR("/product", getAllProduct, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
        suspense: true,
    });

    return (
        <ListPageLayout rootDir={DASHBOARD} title="Dashboard">
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
                <TotalBox
                    title="Total Sales"
                    amount={300000}
                    unit="vnd"
                    loading={false}
                    icon={
                        <AiIcons.AiFillDollarCircle
                            className={styles.totalSalesIcon}
                        />
                    }
                />
                <TotalBox
                    title="Total Orders"
                    amount={300000}
                    loading={false}
                    icon={
                        <FaIcons.FaTruckMoving
                            className={styles.totalOrdersIcon}
                        />
                    }
                />
                <TotalBox
                    title="Total Products"
                    loading={isValidating}
                    amount={product?.length}
                    icon={
                        <FaIcons.FaShoppingBag
                            className={styles.totalProductsIcon}
                        />
                    }
                />
            </SimpleGrid>
            <Grid gutter="md">
                <Grid.Col md={6} lg={8}>
                    <Chart data={product} loading={isValidating} />
                </Grid.Col>
                <Grid.Col md={6} lg={4}>
                    <Chart data={product} loading={isValidating} />
                </Grid.Col>
            </Grid>
            <ListOrder
                data={[...Array(7).keys()].map(() => ({
                    id: "2323",
                    name: "Devon Lane",
                    email: "devon@example.com",
                    totalPayment: 77835,
                    orderState: "Delivered",
                    date: "07.05.2020",
                }))}
            />
        </ListPageLayout>
    );
}
