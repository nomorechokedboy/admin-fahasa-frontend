import { NavLink } from 'react-router-dom';
import { sideBarData } from './data';
import { Center, Stack, Text } from '@mantine/core';
import clx from 'classnames';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { setSideBarOpened } from '@/redux';
import { useMediaQuery } from '@mantine/hooks';

type SideBarOptionProps = {
  opened: boolean;
};

export default function SideBarOption({ opened }: SideBarOptionProps) {
  const onSmallDevice = useMediaQuery('(max-width: 768px)');
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    if (onSmallDevice) {
      dispatch(setSideBarOpened(false));
    }
  };

  return (
    <Stack className={styles.sideBarItem}>
      {sideBarData.map((item, index) => (
        <Center key={index} className={styles.sideBarText}>
          <NavLink
            onClick={handleLinkClick}
            className={({ isActive }) =>
              clx(opened ? styles.opened : styles.collapsed, {
                [styles.menuActive]: isActive,
              })
            }
            to={item.path}
            end
          >
            {item.icon}
            {opened && <Text ml="md">{item.title}</Text>}
          </NavLink>
        </Center>
      ))}
    </Stack>
  );
}
