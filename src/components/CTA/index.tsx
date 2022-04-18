import { Text, Button } from "@mantine/core";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface CTAProps {
    icon: ReactNode;
    message: string;
    onClick?(): void;
    label?: string;
    title?: string;
}

export default function CTA({
    icon,
    message,
    label,
    onClick,
    title,
}: CTAProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>{icon}</div>
            {title && <Text size="xl">{title}</Text>}
            <Text size="lg" align="center">
                {message}
            </Text>
            {label && <Button onClick={onClick}>{label}</Button>}
        </div>
    );
}
