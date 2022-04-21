import LoginForm from '@/containers/LoginForm';
import { memo } from 'react';

const LoginPage = memo(() => {
  console.log('LoginPage render');

  return (
    <>
      <LoginForm />
    </>
  );
});

export default LoginPage;
