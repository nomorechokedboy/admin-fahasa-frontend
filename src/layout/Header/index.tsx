import BurgerMenu from '@/components/BurgerMenu';
import { Group, TextInput } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { AiOutlineSearch } from 'react-icons/ai';
import UserMenu from './components/UserMenu';
import styles from './styles.module.scss';

export default function Header() {
  const onSmallDevice = useMediaQuery('(max-width: 768px)');

  return (
    <Group position="apart" className={styles.header}>
      {onSmallDevice && <BurgerMenu />}
      <TextInput
        icon={<AiOutlineSearch className={styles.icon} />}
        variant="filled"
        placeholder="Search"
        radius="md"
      />
      <UserMenu />
    </Group>
  );
}
