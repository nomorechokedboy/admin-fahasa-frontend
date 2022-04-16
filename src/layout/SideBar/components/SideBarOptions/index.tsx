import { NavLink } from "react-router-dom";
import { sideBarData } from "./data";
import { Container, Stack, Text } from "@mantine/core";
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
                                <Text className={styles.sideBarOptionTitle}>
                                    {item.title}
                                </Text>
                            )}
                        </NavLink>
                    </Container>
                );
            })}
        </Stack>
    );
}
