import { MouseEventHandler } from "react";
import { Container, Image, Burger } from "@mantine/core";
import styles from "./styles.module.scss";

type SideBarHeaderProps = {
    onClick?: MouseEventHandler;
    opened: boolean;
};

export default function SideBarHeader({ onClick, opened }: SideBarHeaderProps) {
    return (
        <div className={styles.header}>
            {opened && (
                <Image
                    className={styles.image}
                    alt="Fahasa logo"
                    src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
                />
            )}

            <Container
                className={styles.sideBarToggle}
                style={{ paddingRight: opened ? 0 : "1rem" }}
            >
                <Burger opened={opened} onClick={onClick} />
            </Container>
        </div>
    );
}
