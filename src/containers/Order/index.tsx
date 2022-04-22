import styles from './styles.module.scss';
import classnames from 'classnames';
import { TO_ORDERS } from '@/configs';
import { Paper, Grid, Group } from '@mantine/core';
import OrderTable from '../../components/OrderTable';
import ListPageLayout from '@/layout/SubPageLayout';
export default function Order() {
  return (
    <Paper shadow="xs" radius="md" p="md">
      <ListPageLayout rootDir={TO_ORDERS} title="Admin Order List">
        <div className={classnames(styles.Card, styles.mb_4)}>
          <Paper
            className={classnames(
              styles.row,
              styles.gx_3,
              styles.formContainer,
              styles.cardHeader,
            )}
          >
            <Grid justify="space-between" align="center">
              <Grid.Col span={6} md={6} lg={3}>
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.formControl}
                />
              </Grid.Col>
              <Grid.Col span={6} md={6} lg={3}>
                <Group position="right" grow>
                  <select className={styles.formSelect}>
                    <option>Status</option>
                    <option>Active</option>
                    <option>Disabled</option>
                    <option>Show all</option>
                  </select>

                  <select className={styles.formSelect}>
                    <option>Show 20</option>
                    <option>Show 30</option>
                    <option>Show 40</option>
                  </select>
                </Group>
              </Grid.Col>
            </Grid>
          </Paper>

          <div>
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
              data={[...Array(7).keys()].map(() => ({
                id: '2323',
                name: 'Devon Lane',
                email: 'devon@example.com',
                totalPayment: 77835,
                orderStatus: 'Delivered',
                date: '07.05.2020',
              }))}
              rootDir="detail"
            />
          </div>
        </div>
      </ListPageLayout>
    </Paper>
  );
}
