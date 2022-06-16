import {
  findAllUser,
  findUserById,
  findUserByUid,
  registerNewEmployee,
  stayLogin,
} from '@/lib/firebase';
import {
  Button,
  Group,
  LoadingOverlay,
  NumberInput,
  PasswordInput,
  SegmentedControl,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import { sendEmailVerification, UserCredential } from 'firebase/auth';
import { useState } from 'react';
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { roleData } from '../../data';
import RegisterData, { registerSchema } from './validate';
import { DatePicker } from '@mantine/dates';
import {
  ErrorCodeToMessage,
  validateErrorHelper,
  VietNameseFormatter,
  VietNameseParser,
} from '@/utils';
import ToDate from '@/utils/date';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState, setError, setNotification } from '@/redux';
import useSWR from 'swr';
import { getAllUserType } from '@/api/userType';
import { createEmployee } from '@/api';
import axios from 'axios';
import BaseUser from '@/types/user';

interface FormProps {}

export default function Form() {
  const { data, error } = useSWR('/usertype', getAllUserType);

  var listRights =
    data &&
    data.map((dataArray: any) => ({
      label: dataArray.name,
      value: dataArray._id,
    }));

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const form = useForm<RegisterData>({
    initialValues: {
      birthdate: new Date(),
      confirmPassword: '',
      email: '',
      gender: 'male',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      types: listRights && listRights[0].value,
      salary: 0,
    },
    schema: joiResolver(registerSchema),
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    const {
      email,
      password,
      firstName,
      lastName,
      gender,
      types,
      birthdate,
      salary,
      phoneNumber,
    } = values;
    try {
      const { user } = await registerNewEmployee(email, password);
      await Promise.all([
        findUserById(user.uid).set({
          birthdate: ToDate(birthdate),
          email,
          fullName: `${firstName} ${lastName}`,
          salary,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        }),
        sendEmailVerification(user),
      ]);

      if (user.uid !== null) {
        createEmployee('/user', {
          fullName: `${firstName} ${lastName}`,
          salary,
          uid: user.uid,
          email,
          gender,
          phoneNumber,
          types,
          birthdate,
        }).catch((error) => console.log(error));
      }
      dispatch(
        setNotification(
          `Register success for email: ${email}. We have sent you a verify email. Please check your email.`,
        ),
      );
      form.reset();
    } catch (e: any) {
      const message = ErrorCodeToMessage(e.code);
      dispatch(setError(message ? message : e.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <LoadingOverlay visible={loading} />
      <Stack>
        <Group grow>
          <TextInput
            label="First name"
            placeholder="Employee first name"
            data-autofocus
            required
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Last name"
            placeholder="Employee last name"
            required
            {...form.getInputProps('lastName')}
          />
        </Group>
        <DatePicker
          placeholder="Pick employee's birthdate"
          label="Employee Birthdate"
          required
          {...form.getInputProps('birthdate')}
        />
        <NumberInput
          label="Employee's salary"
          min={0}
          step={10000}
          parser={VietNameseParser}
          formatter={VietNameseFormatter}
          required
          {...form.getInputProps('salary')}
        />
        <Select
          label="Gender"
          data={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          {...form.getInputProps('gender')}
        />
        <TextInput
          label="phone"
          placeholder="10-11 number"
          required
          {...form.getInputProps('phoneNumber')}
        />
        <TextInput
          label="Email"
          placeholder="Employee email"
          icon={<HiMail />}
          required
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          icon={<HiLockClosed />}
          required
          {...form.getInputProps('password')}
        />
        <PasswordInput
          label="Confirm password"
          placeholder="Confirm password"
          icon={<HiLockClosed />}
          required
          {...form.getInputProps('confirmPassword')}
        />
        {data && (
          <SegmentedControl
            data={listRights}
            styles={{
              label: { textTransform: 'capitalize' },
            }}
            {...form.getInputProps('types')}
          />
        )}
        <Button color="green" type="submit">
          Create
        </Button>
      </Stack>
    </form>
  );
}
