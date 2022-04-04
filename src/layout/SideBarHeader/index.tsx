import { MouseEventHandler } from "react";
import { Container, Image as MantineImage, Burger } from "@mantine/core";
import clx from "classnames";
import styles from "./styles.module.scss";

type SideBarHeaderProps = {
    onClick?: MouseEventHandler;
    active: boolean;
};

export default function SideBarHeader({ onClick, active }: SideBarHeaderProps) {
    const containerStyle = {
        paddingRight: active ? 0 : "16px",
    };
    return (
        <div
            className={clx(styles.header, {
                [styles.active]: active,
            })}
        >
            {active && (
                <MantineImage
                    className={styles.image}
                    fit="contain"
                    alt="Fahasa logo"
                    src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
                />
            )}

            <Container className={styles.sideBarToggle} style={containerStyle}>
                <Burger opened={active} onClick={onClick} />
            </Container>
        </div>
    );
}
