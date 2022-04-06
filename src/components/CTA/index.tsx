import { Text, Button } from "@mantine/core";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type CTAProps = {
    icon: ReactNode;
    message: string;
    label: string;
    onClick(): void;
};

export default function CTA({ icon, message, label, onClick }: CTAProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>{icon}</div>
            <Text size="xl">{message}</Text>
            <Button onClick={onClick}>{label}</Button>
        </div>
    );
}
