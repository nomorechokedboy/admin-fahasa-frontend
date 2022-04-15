import { TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import UserMenu from "./components/UserMenu";
import styles from "./styles.module.scss";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.searchBar}>
                <TextInput
                    className={styles.input}
                    icon={<AiOutlineSearch className={styles.icon} />}
                    variant="filled"
                    placeholder="Search"
                    radius="md"
                />
            </div>
            <UserMenu />
        </div>
    );
}
