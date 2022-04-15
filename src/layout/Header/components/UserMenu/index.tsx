import { getLoginState, logout } from "@/redux";
import { Menu } from "@mantine/core";
import { FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import User from "../User";
import styles from "./styles.module.scss";

interface UserMenuProps {}

export default function UserMenu({}: UserMenuProps) {
    const { user } = useSelector(getLoginState);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

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
            <Menu.Item onClick={handleLogout} icon={<FaSignOutAlt />}>
                Logout
            </Menu.Item>
        </Menu>
    );
}
