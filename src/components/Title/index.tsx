import clx from "classnames";
import styles from "./styles.module.scss";

interface TitleProps {
    lg?: boolean;
    sm?: boolean;
    fontMedium?: boolean;
    children: string;
}

const Title = ({ children, fontMedium, lg, sm }: TitleProps) => {
    return (
        <div
            className={clx(styles.title, {
                [styles.lg]: lg,
                [styles.sm]: sm,
                [styles.fontMedium]: fontMedium,
            })}
        >
            {children}
        </div>
    );
};

export default Title;
