import CTA from "@/components/CTA";
import NotificationDialog from "@/components/NotificationDiaglog";
import { TO_PRODUCTS } from "@/configs";
import ListPageLayout from "@/layout/SubPageLayout";
import { Pagination } from "@mantine/core";
import { Key, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import useSWR from "swr/immutable";
import { getAllProduct } from "../../api";
import Product from "./components/Product";
import Products from "./components/Products";
import styles from "./styles.module.scss";

export default function ProductList() {
    const { data, error, isValidating, mutate } = useSWR(
        "/product",
        getAllProduct,
    );
    const [notiOpened, setNotiOpended] = useState<boolean>(!!error);
    const hasData = data && data.length;

    const handleCloseNotification = () => {
        setNotiOpended(false);
    };

    const handleReloadClick = () => {
        mutate("/product");
    };

    return (
        <ListPageLayout rootDir={TO_PRODUCTS} title="Products List">
            {error ? (
                <>
                    <CTA
                        icon={<FiIcons.FiMeh />}
                        message={error.message}
                        label="Reload the page"
                        onClick={handleReloadClick}
                    />
                    {notiOpened && (
                        <div className={styles.dialogContainer}>
                            <NotificationDialog
                                onClose={handleCloseNotification}
                                icon={<AiIcons.AiOutlineClose />}
                                title="Fetching error"
                                message={error.message}
                                color="red"
                            />
                        </div>
                    )}
                </>
            ) : isValidating ? (
                <Products>
                    {[...Array(8).keys()].map((value: number) => (
                        <Product key={value} loading />
                    ))}
                </Products>
            ) : !hasData ? (
                <CTA
                    icon={<BsIcons.BsCartX />}
                    message="There is no current product, please add new product!"
                />
            ) : (
                <>
                    <Products>
                        {data.map((product: any, index: Key) => (
                            <Product
                                key={index}
                                loading={isValidating}
                                {...product}
                            />
                        ))}
                    </Products>
                    <div className={styles.pagination}>
                        <Pagination total={5} />
                    </div>
                </>
            )}
        </ListPageLayout>
    );
}