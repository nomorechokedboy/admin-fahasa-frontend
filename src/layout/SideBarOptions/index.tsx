import { Key } from "react";
import { NavLink } from "react-router-dom";
import { sideBarData, SideBarData } from "./data";
import { Container, Stack, Text as MantineText } from "@mantine/core";
import { SideBarProp } from "../SideBar";
import styles from "./styles.module.scss";

export default function SideBarOption({ active }: SideBarProp) {
    return (
        <Stack className={styles.sideBarItem}>
            {sideBarData.map((item: SideBarData, index: Key) => {
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
