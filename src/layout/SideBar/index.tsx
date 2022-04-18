import ThemeSwitch from "@/components/ThemeSwitch";
import { Navbar } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clx from "classnames";
import { useMemo, useState } from "react";
import SideBarHeader from "./components/SideBarHeader";
import SideBarOption from "./components/SideBarOptions";
import styles from "./styles.module.scss";

export default function Sidebar() {
    const onSmallDevice = useMediaQuery("(max-width: 768px)");
    const [sideBarActive, setSideBarActive] = useState<boolean>(!onSmallDevice);

    useMemo(() => {
        setSideBarActive(!onSmallDevice);
    }, [onSmallDevice]);

    const showSideBar = () => {
        setSideBarActive(!onSmallDevice && !sideBarActive);
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
            <div className={styles.switchWrapper}>
                <ThemeSwitch />
                <span className={clx({ [styles.active]: sideBarActive })}>
                    Theme
                </span>
            </div>
        </Navbar>
    );
}
