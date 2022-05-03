import Text from '@/components/Text';
import { getLoginState } from '@/redux';
import {
  Avatar,
  Group,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { forwardRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

interface UserProps extends UnstyledButtonProps {}

const User = forwardRef<HTMLButtonElement, UserProps>(
  ({ ...buttonProps }, ref) => {
    const onSmallDevice = useMediaQuery('(max-width: 768px)');
    const { user } = useSelector(getLoginState);

    return (
      <UnstyledButton ref={ref} {...buttonProps}>
        <Group>
          {!user?.photoURL ? (
            <Avatar
              radius="lg"
              src={user?.photoURL}
              alt={`${user?.displayName} avatar`}
            >
              {user?.displayName[0].toUpperCase()}
            </Avatar>
          ) : (
            <Avatar
              radius="lg"
              src={user.photoURL}
              alt={`${user.displayName} avatar`}
            />
          )}
          {!onSmallDevice && (
            <>
              <div className={styles.name}>
                <Text>{user?.displayName ?? ''}</Text>
              </div>
              <FaChevronDown />
            </>
          )}
        </Group>
      </UnstyledButton>
    );
  },
);

export default User;
