import {
    ActionIcon,
    Avatar,
    TextInput,
    useMantineColorScheme,
} from "@mantine/core";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import styles from "./styles.module.scss";

export default function Header() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const changeColorScheme = () => {
        toggleColorScheme();
    };

    return (
        <div className={styles.header}>
            <div className={styles.searchBar}>
                <TextInput
                    className={styles.input}
                    icon={<AiIcons.AiOutlineSearch color="gray" size={25} />}
                    variant="filled"
                    placeholder="Search"
                    radius="md"
                />
            </div>
            <div className={styles.themeIcon}>
                <ActionIcon
                    variant="outline"
                    color={dark ? "yellow" : "blue"}
                    onClick={changeColorScheme}
                    title="Toggle color scheme"
                >
                    {dark ? (
                        <CgIcons.CgSun size={18} />
                    ) : (
                        <CgIcons.CgMoon size={18} />
                    )}
                </ActionIcon>
                <Avatar radius="xl" />
            </div>
        </div>
    );
}
