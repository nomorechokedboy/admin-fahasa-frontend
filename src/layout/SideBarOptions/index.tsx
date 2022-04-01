import { NavLink } from "react-router-dom";
import { sideBarData } from "./data";
import { Container, Stack, Text as MantineText } from "@mantine/core";
import styles from "./styles.module.scss";

type SideBaroptionProps = {
    active: boolean;
};

export default function SideBarOption({ active }: SideBaroptionProps) {
    return (
        <Stack className={styles.sideBarItem}>
            {sideBarData.map((item, index) => {
                return (
                    <Container key={index} className={styles.sideBarText}>
                        <NavLink
                            className={
                                active ? styles.active : styles.collapsed
                            }
                            to={item.path}
                        >
                            {item.icon}
                            {active && (
                                <MantineText
                                    className={styles.sideBarOptionTitle}
                                >
                                    {item.title}
                                </MantineText>
                            )}
                        </NavLink>
                    </Container>
                );
            })}
        </Stack>
    );
}
