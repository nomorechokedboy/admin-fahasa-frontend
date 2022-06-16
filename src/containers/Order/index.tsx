import styles from './styles.module.scss';
import classnames from 'classnames';
import { TO_ORDERS } from '@/configs';
import { Paper, Grid, Group, Select, Input } from '@mantine/core';
import OrderTable from '../../components/OrderTable';
import ListPageLayout from '@/layout/SubPageLayout';
import useSWR from 'swr';
import { getAllOrder } from '@/api/order';
import CTA from '@/components/CTA';
import * as BsIcons from 'react-icons/bs';
import { getEmployee } from '@/api';

export default function Order() {
  const { data, error } = useSWR('/order', getAllOrder, {
    shouldRetryOnError: false,
  });
  console.log(data);
  if (data) {
  }
  return (
    <Paper shadow="xs" radius="md" p="md">
      <ListPageLayout rootDir={TO_ORDERS} title="Admin Order List">
        <div className={styles.card}>
          <Paper
            className={classnames(styles.formContainer, styles.cardHeader)}
          >
            <Grid justify="space-between" align="center">
              <Grid.Col span={6} md={6} lg={4}>
                <Input variant="filled" placeholder="Search..." />
              </Grid.Col>
              <Grid.Col span={6} md={6} lg={3}>
                <Group position="right" grow>
                  <Select
                    placeholder="Status"
                    data={[
                      { value: 'Status', label: 'Status' },
                      { value: 'Active', label: 'Active' },
                      { value: 'Disabled', label: 'Disabled' },
                      { value: 'Show all', label: 'Show all' },
                    ]}
                  />
                  <Select
                    placeholder="Show 20"
                    data={[
                      { value: 'Show 20', label: 'Show 20' },
                      { value: 'Show 30', label: 'Show 30' },
                      { value: 'Show 40', label: 'Show 40' },
                    ]}
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>

          <div>
            {!error && !data ? (
              <OrderTable
                header={[
                  'ID',
                  'Email',
                  'Customer name',
                  'Price',
                  'Status',
                  'Date',
                  'Action',
                ]}
                data={[...Array(7)]}
                loading={true}
                rootDir="detail"
              />
            ) : !data?.length ? (
              <CTA
                icon={<BsIcons.BsCartX />}
                message="There is no current order"
              />
            ) : (
              <OrderTable
                header={[
                  'ID',
                  'Email',
                  'Customer name',
                  'Price',
                  'Status',
                  'Date',
                  'Action',
                ]}
                data={data.map((value: any) => ({
                  id: value._id,
                  name: 'Devon Lane',
                  email: 'devon@example.com',
                  totalPayment: value.totalPrice,
                  orderStatus: value.status,
                  date: '07.05.2020',
                  userID: value.buyer,
                }))}
                loading={false}
                rootDir="detail"
              />
            )}
          </div>
        </div>
      </ListPageLayout>
    </Paper>
  );
}
