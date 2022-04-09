import ThemeSwitch from "@/components/ThemeSwitch";
import { Avatar, TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.scss";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.searchBar}>
                <TextInput
                    className={styles.input}
<<<<<<< HEAD
                    icon={<AiIcons.AiOutlineSearch color="gray" size={25} />}
=======
                    icon={<AiOutlineSearch className={styles.icon} />}
>>>>>>> 37f147c (login form done, product form done, lacking of required auth and handle click for product form)
                    variant="filled"
                    placeholder="Search"
                    radius="md"
                />
            </div>
            <div className={styles.themeIcon}>
                <ThemeSwitch />
                <Avatar radius="xl" />
            </div>
        </div>
    );
}
