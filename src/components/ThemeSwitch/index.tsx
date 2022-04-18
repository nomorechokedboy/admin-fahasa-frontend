import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { memo } from 'react';
import { CgMoon, CgSun } from 'react-icons/cg';

const ThemeSwitch = memo(() => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const changeColorScheme = () => {
    toggleColorScheme();
  };

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={changeColorScheme}
      title="Toggle color scheme"
    >
      {dark ? <CgSun size={18} /> : <CgMoon size={18} />}
    </ActionIcon>
  );
});

export default ThemeSwitch;
