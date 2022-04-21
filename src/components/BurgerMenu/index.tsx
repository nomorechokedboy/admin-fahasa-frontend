import { getSideBarState, setSideBarOpened } from '@/redux';
import { Burger, Center } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const opened = useSelector(getSideBarState);

  const handleOnBurgerClick = () => {
    dispatch(setSideBarOpened(!opened));
  };

  return (
    <Center>
      <Burger opened={opened} onClick={handleOnBurgerClick} />
    </Center>
  );
}
