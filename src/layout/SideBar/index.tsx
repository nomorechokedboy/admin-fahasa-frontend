import clx from "classnames";
import SideBarHeader from "../SideBarHeader";
import SideBarOption from "../SideBarOptions";
import styles from "./styles.module.scss";
import { Navbar } from "@mantine/core";
import { useToggle } from "@mantine/hooks";

export default function Sidebar() {
    const [sideBarActive, sideBarToggle] = useToggle<boolean>(true, [
        false,
        true,
    ]);

    const showSideBar = () => {
        sideBarToggle();
    };

    return (
        <Navbar
            className={clx(
                styles.sideBarMenu,
                sideBarActive ? styles.active : styles.collapsed,
            )}
        >
            <SideBarHeader onClick={showSideBar} active={sideBarActive} />
            <SideBarOption active={sideBarActive} />
        </Navbar>
    );
}
