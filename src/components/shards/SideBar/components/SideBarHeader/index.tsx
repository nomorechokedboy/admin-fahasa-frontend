import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Container, Image as MantineImage } from '@mantine/core';
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setShowSidebar } from '../../../../../redux/showSidebar/action';
import { useToggle } from '@mantine/hooks';

export default function SideBarHeader() {
    const [sidebarActive, showSidebarToggle] = useToggle<boolean>(true, [false, true]);
    const dispatch = useDispatch();

    const showSidebar = () => {
        dispatch(setShowSidebar(!sidebarActive));

        showSidebarToggle();
    }

    return (
        <div
            className={classNames(styles.header, { [styles.active]: sidebarActive })}
        >
            {sidebarActive && (
                <MantineImage
                    fit="contain"
                    alt="Fahasa logo"
                    src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
                />
            )}

            <Container className={styles.sidebarToggle}>
                <Link
                    to="#"
                    className={classNames(styles.menu, {
                        [styles.active]: sidebarActive,
                    })}
                    onClick={showSidebar}
                >
                    {sidebarActive ? <CgIcons.CgPlayListRemove /> : <FaIcons.FaBars />}
                </Link>
            </Container>
        </div>
    );
}

