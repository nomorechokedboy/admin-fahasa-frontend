import { Center, Image } from '@mantine/core';
import styles from './styles.module.scss';
import BurgerMenu from '@/components/BurgerMenu';

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
            src="https://jobseekers.vn/wp-content/uploads/2019/05/Quy-Chuan-Logo.png"
          />
        </Center>
      )}

      <div className={styles.sideBarToggle}>
        <BurgerMenu />
      </div>
    </div>
  );
}
