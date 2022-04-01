import classNames from "classnames";
import SideBarHeader from "../SideBarHeader";
import SideBarOption from "../SideBarOptions";
import styles from "./styles.module.scss";
import { Navbar } from "@mantine/core";
import { MouseEventHandler } from "react";

export type SideBarProp = {
    onClick?: MouseEventHandler;
    active: boolean;
};

export default function Sidebar({ onClick, active }: SideBarProp) {
    return (
        <Navbar
            className={classNames(
                styles.sideBarMenu,
                active ? styles.active : styles.collapsed,
            )}
        >
            <SideBarHeader onClick={onClick} active={active} />
            <SideBarOption active={active} />
        </Navbar>
    );
}
