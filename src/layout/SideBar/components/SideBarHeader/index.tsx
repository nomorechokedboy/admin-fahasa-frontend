import { Center, Image } from '@mantine/core';
import styles from './styles.module.scss';
import BurgerMenu from '@/components/BurgerMenu';
import logo from './logo.svg';

type SideBarHeaderProps = {
  opened: boolean;
};

export default function SideBarHeader({ opened }: SideBarHeaderProps) {
  return (
    <div className={styles.header}>
      {opened && (
        <Center>
          <Image
            alt="Fahasa logo"
            width={133}
            height={50}
            fit="contain"
            src={logo}
          />
        </Center>
      )}

      <div className={styles.sideBarToggle}>
        <BurgerMenu />
      </div>
    </div>
  );
}
