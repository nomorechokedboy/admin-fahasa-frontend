import RichTextEditor, { EditorValue, ToolbarConfig } from "react-rte";
import clx from "classnames";
import { useMantineColorScheme } from "@mantine/core";
import styles from "./styles.module.scss";
import { toolbarConfig } from "./configs";
import Text from "../Text";

interface CustomRTEProps {
    placeholder?: string;
    className?: string;
    value: EditorValue;
    onChange?: (inputValue: EditorValue) => void;
    error?: string;
    label?: string;
}

export default function CustomRTE({
    className,
    error,
    label,
    ...props
}: CustomRTEProps) {
    const { colorScheme } = useMantineColorScheme();
    return (
        <div className={clx(styles.container)}>
            {label && (
                <div className={styles.label}>
                    <Text size="sm" font="medium">
                        {label}
                    </Text>
                </div>
            )}
            <RichTextEditor
                className={clx(className, {
                    [styles.dark]: colorScheme === "dark",
                    [styles.rteError]: error,
                })}
                toolbarConfig={toolbarConfig as ToolbarConfig}
                {...props}
            ></RichTextEditor>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
