import Text from "@/components/Text";
import { Children, ReactNode } from "react";
import styles from "./styles.module.scss";

interface FormSectionProps {
    children: ReactNode;
    label: string;
}

export default function FormSection({ children, label }: FormSectionProps) {
    return (
        <div className={styles.row}>
            <div className={styles.colLeft}>
                <Text size="lg" font="bold">
                    {label}
                </Text>
            </div>
            <div className={styles.colRight}>
                {Children.map(children, (child, i) => (
                    <div className={styles.inputWrapper} key={i}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
