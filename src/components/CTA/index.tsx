import { Text, Button } from "@mantine/core";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type CTAProps = {
    icon: ReactNode;
    message: string;
    onClick?(): void;
    label?: string;
    withButton?: boolean;
};

export default function CTA({
    icon,
    message,
    label,
    onClick,
    withButton,
}: CTAProps) {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>{icon}</div>
            <Text size="xl" align="center">
                {message}
            </Text>
            {withButton && <Button onClick={onClick}>{label}</Button>}
        </div>
    );
}
