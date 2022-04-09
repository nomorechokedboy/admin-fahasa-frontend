import clx from "classnames";
import styles from "./styles.module.scss";

interface TextProps {
    children: string;
    size?: "sm" | "lg";
    font?: "medium" | "bold";
}

const Text = ({ children, font, size }: TextProps) => {
    return (
        <div
            className={clx(styles.container, {
                [styles.sm]: size === "sm",
                [styles.lg]: size === "lg",
                [styles.fontMedium]: font === "medium",
                [styles.fontBold]: font === "bold",
            })}
        >
            {children}
        </div>
    );
};

export default Text;
