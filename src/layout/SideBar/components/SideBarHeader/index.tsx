import { MouseEventHandler } from "react";
import { Container, Image, Burger } from "@mantine/core";
import clx from "classnames";
import styles from "./styles.module.scss";

type SideBarHeaderProps = {
    onClick?: MouseEventHandler;
    active: boolean;
};

export default function SideBarHeader({ onClick, active }: SideBarHeaderProps) {
    return (
        <div
            className={clx(styles.header, {
                [styles.active]: active,
            })}
        >
            {active && (
                <Image
                    className={styles.image}
                    alt="Fahasa logo"
                    src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
                />
            )}

            <Container
                className={styles.sideBarToggle}
                style={{ paddingRight: active ? 0 : "1rem" }}
            >
                <Burger opened={active} onClick={onClick} />
            </Container>
        </div>
    );
}
