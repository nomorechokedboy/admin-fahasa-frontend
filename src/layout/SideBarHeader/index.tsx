import classNames from "classnames";
import { Link } from "react-router-dom";
import { Container, Image as MantineImage } from "@mantine/core";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import styles from "./styles.module.scss";
import { SideBarProp } from "../SideBar";

export default function SideBarHeader({ onClick, active }: SideBarProp) {
    const containerStyle = {
        paddingRight: active ? 0 : "16px",
    };
    return (
        <div
            className={classNames(styles.header, {
                [styles.active]: active,
            })}
        >
            {active && (
                <MantineImage
                    className={styles.image}
                    fit="contain"
                    alt="Fahasa logo"
                    src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
                />
            )}

            <Container className={styles.sideBarToggle} style={containerStyle}>
                <Link to="#" className={styles.menu} onClick={onClick}>
                    {active ? <CgIcons.CgPlayListRemove /> : <FaIcons.FaBars />}
                </Link>
            </Container>
        </div>
    );
}
