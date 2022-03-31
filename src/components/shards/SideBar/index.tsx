import { Key, ReactElement, useMemo } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Header from './components/SideBarHeader';
import styles from './styles.module.scss';
import { selectShowSidebar } from '../../../redux/showSidebar/action';
import { Navbar, Container, Stack, Text as MantineText } from '@mantine/core';

type SidebarData = {
    title: string;
    path: string;
    icon: ReactElement;
};

export default function SideBar() {
    const sidebarData: SidebarData[] = useMemo(
        () => [
            {
                title: 'Home',
                path: '/',
                icon: <AiIcons.AiFillHome />,
            },
            {
                title: 'Products',
                path: '/products',
                icon: <FaIcons.FaShoppingBag />,
            },
            {
                title: 'Detail',
                path: '/detail',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Manage',
                path: '/manage',
                icon: <FaIcons.FaCartPlus />,
            },
        ],
        [],
    );

    const sidebarActive = useSelector(selectShowSidebar);

    const sideBarContent = sidebarData.map((item: SidebarData, index: Key) => {
        return (
            <Container
                key={index}
                className={styles.sidebarText}
            >
                <NavLink
                    className={sidebarActive ? styles.active : styles.collapsed}
                    to={item.path}
                >
                    {item.icon}
                    {
                        sidebarActive &&
                        <MantineText className={styles.menuTitle}>
                            {item.title}
                        </MantineText>
                    }
                </NavLink>
            </Container >
        );
    });

    return (
        <Navbar
            className={classNames(
                styles.sidebarMenu,
                sidebarActive ? styles.active : styles.collapsed,
            )}
        >
            <Header />
            <Stack className={styles.sidebarItem}>{sideBarContent}</Stack>
        </Navbar>
    );
}
