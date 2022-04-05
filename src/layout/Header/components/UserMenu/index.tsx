import { getLoginState } from "@/redux";
import { Menu } from "@mantine/core";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import User from "../User";
import styles from "./styles.module.scss";

interface UserMenuProps {}

export default function UserMenu({}: UserMenuProps) {
    const { user } = useSelector(getLoginState);
    console.log({
        displayName: user?.displayName,
        user,
        photoUrl: user?.photoURL,
    });

    return (
        <Menu
            className={styles.container}
            control={
                <User
                    name={user?.displayName ?? user?.email!}
                    src={user && user?.photoURL}
                />
            }
            placement="end"
        >
            <Menu.Item icon={<FaCogs />}>Settings</Menu.Item>
            <Menu.Item icon={<FaSignOutAlt />}>Logout</Menu.Item>
        </Menu>
    );
}
