import clx from "classnames";
import SideBarHeader from "./components/SideBarHeader";
import SideBarOption from "./components/SideBarOptions";
import styles from "./styles.module.scss";
import { Aside } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, useState } from "react";

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
        <Aside
            className={clx(
                styles.sideBarMenu,
                sideBarActive ? styles.active : styles.collapsed,
            )}
        >
            <SideBarHeader onClick={showSideBar} active={sideBarActive} />
            <SideBarOption active={sideBarActive} />
        </Aside>
    );
}
