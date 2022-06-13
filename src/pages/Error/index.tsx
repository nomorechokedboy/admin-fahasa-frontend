import CTA from '@/components/CTA';
import ErrorIcon from '@/components/ErrorIcon';
import { memo } from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = memo(() => {
  const redirect = useNavigate();
  const handleBackToMain = () => {
    redirect(-1);
  };
  return (
    <CTA
      message="You've found a secret page on our service. Unfortunately, this is a 404 error page"
      icon={<ErrorIcon />}
      label="Back to previous page"
      title="Error 404 - Not Found!"
      onClick={handleBackToMain}
    />
  );
});

export default ErrorPage;
