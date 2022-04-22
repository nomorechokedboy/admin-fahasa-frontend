import ThemeSwitch from '@/components/ThemeSwitch';
import login, { getLoginState } from '@/redux/login/action';
import {
  Anchor,
  Button,
  Center,
  Checkbox,
  Container,
  Input,
  LoadingOverlay,
  PasswordInput,
  useMantineTheme,
} from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import { CSSProperties, useEffect, useMemo } from 'react';
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Title from '../../components/Title';
import styles from './styles.module.scss';
import loginSchema, { LoginData } from './validate';

const LoginForm = () => {
  console.log('LoginForm render');

  const { colors, colorScheme } = useMantineTheme();
  const formStyle: CSSProperties = useMemo(
    () =>
      colorScheme === 'dark'
        ? { backgroundColor: colors[colorScheme][6] }
        : { boxShadow: '0 0 5px #000' },
    [colorScheme],
  );
  // const UserIcon = useMemo(() => , []);
  // const PasswordIcon = useMemo(() => , []);

  const loginForm = useForm<LoginData>({
    initialValues: {
      email: '',
      password: '',
    },
    schema: joiResolver(loginSchema),
  });

  const redirect = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector(getLoginState);
  console.log({ loading });

  const handleSubmit = async ({ email, password }: typeof loginForm.values) => {
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
      loginForm.reset();
      redirect('/admin');
    }
  }, [user]);

  return (
    <Container size={380} className={styles.container}>
      <form
        className={styles.form}
        style={formStyle}
        onSubmit={loginForm.onSubmit(handleSubmit)}
      >
        <div className={styles.col}>
          <div className={`${styles.row} ${styles.heading}`}>
            <Title>Log In</Title>
            <ThemeSwitch />
          </div>
          <div className={styles.row}>
            <Input
              type={'email'}
              icon={<HiMail />}
              placeholder="Email"
              required
              {...loginForm.getInputProps('email')}
            />
          </div>
          <div className={styles.row}>
            <PasswordInput
              icon={<HiLockClosed />}
              required
              placeholder="Password"
              {...loginForm.getInputProps('password')}
            />
          </div>
          <div className={styles.row}>
            <Checkbox label="Remeber password" />
          </div>
          <div className={styles.row}>
            <Center>
              <Button type="submit">Log In</Button>
            </Center>
          </div>
          <div className={styles.row}>
            <Anchor>Forgot password?</Anchor>
          </div>
        </div>
        <LoadingOverlay visible={loading} />
      </form>
    </Container>
  );
};

export default LoginForm;
