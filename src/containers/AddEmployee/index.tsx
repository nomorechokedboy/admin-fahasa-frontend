import { TO_EMPLOYEES } from '@/configs';
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router';
import Form from './components/Form';

interface AddEmployeeProps {}

export default function AddEmployee() {
  const redirect = useNavigate();
  const handleClose = () => {
    redirect(TO_EMPLOYEES);
  };

  return (
    <Modal
      title="Register new employee"
      onClose={handleClose}
      overlayOpacity={0.5}
      opened
      centered
    >
      <Form />
    </Modal>
  );
}
