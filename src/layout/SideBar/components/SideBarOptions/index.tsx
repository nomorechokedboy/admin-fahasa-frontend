import { NavLink } from 'react-router-dom';
import { sideBarData } from './data';
import { Container, Stack, Text } from '@mantine/core';
import clx from 'classnames';
import styles from './styles.module.scss';

type SidebarOptionProps = {
  opened: boolean;
};

export default function SideBarOption({ opened }: SidebarOptionProps) {
  return (
    <Stack className={styles.sideBarItem}>
      {sideBarData.map((item, index) => {
        return (
          <Container key={index} className={styles.sideBarText}>
            <NavLink
              className={({ isActive }) =>
                clx(opened ? styles.opened : styles.collapsed, {
                  [styles.menuActive]: isActive,
                })
              }
              to={item.path}
              end
            >
              {item.icon}
              {opened && (
                <Text className={styles.sideBarOptionTitle}>{item.title}</Text>
              )}
            </NavLink>
          </Container>
        );
      })}
    </Stack>
  );
}
