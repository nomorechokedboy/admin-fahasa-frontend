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
    const [sidebarOpenen, setSidebarOpened] = useState<boolean>(!onSmallDevice);

    useMemo(() => {
        setSidebarOpened(!onSmallDevice);
    }, [onSmallDevice]);

    const showSideBar = () => {
        setSidebarOpened(!onSmallDevice && !sidebarOpenen);
    };

    return (
        <Navbar
            className={clx(
                styles.sideBarMenu,
                sidebarOpenen ? styles.opened : styles.collapsed,
            )}
        >
            <SideBarHeader onClick={showSideBar} opened={sidebarOpenen} />
            <SideBarOption opened={sidebarOpenen} />
            <div className={styles.switchWrapper}>
                <ThemeSwitch />
                <span className={clx({ [styles.opened]: sidebarOpenen })}>
                    Theme
                </span>
            </div>
        </Navbar>
    );
}
