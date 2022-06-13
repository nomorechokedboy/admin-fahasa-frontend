import ThemeSwitch from '@/components/ThemeSwitch';
import { getSideBarState, setSideBarOpened } from '@/redux';
import { Navbar, Overlay } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import clx from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBarHeader from './components/SideBarHeader';
import SideBarOption from './components/SideBarOptions';
import styles from './styles.module.scss';

export default function SideBar() {
  const dispatch = useDispatch();
  const onSmallDevice = useMediaQuery('(max-width: 768px)');
  const opened = useSelector(getSideBarState);
  const overlay = opened && onSmallDevice;

  // This was used to make sidebar auto open
  // when changing to large device (and close on small device)
  useEffect(() => {
    dispatch(setSideBarOpened(!onSmallDevice));
  }, [dispatch, onSmallDevice]);

  return (
    <>
      <Navbar
        className={clx(styles.sideBarMenu, { [styles.collapsed]: !opened })}
      >
        <SideBarHeader opened={opened} />
        <SideBarOption opened={opened} />
        <div className={styles.switchWrapper}>
          <ThemeSwitch />
          <span className={clx({ [styles.opened]: opened })}>Theme</span>
        </div>
      </Navbar>

      {overlay && <Overlay opacity={0.6} color="#000" />}
    </>
  );
}
