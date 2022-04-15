import { Text, Button } from "@mantine/core";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CTAProps {
    icon: ReactNode;
    message: string;
    onClick?(): void;
    label?: string;
}

export default function CTA({ icon, message, label, onClick }: CTAProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>{icon}</div>
            <Text size="xl" align="center">
                {message}
            </Text>
            {label && <Button onClick={onClick}>{label}</Button>}
        </div>
    );
}
