import { CREATE } from "@/configs";
import { Button, Stack } from "@mantine/core";
import { ReactNode } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface ListPageLayoutProps {
    children: ReactNode;
    title: string;
    rootDir: string;
}

export default function ListPageLayout({
    children,
    title,
    rootDir,
}: ListPageLayoutProps) {
    return (
        <Stack className={styles.container}>
            <div className={styles.contentHeader}>
                <h2>{title}</h2>
                <Button leftIcon={<HiOutlinePlus />} color="blue">
                    <Link to={`${rootDir}/${CREATE}`}>Create new</Link>
                </Button>
            </div>
            {children}
        </Stack>
    );
}
