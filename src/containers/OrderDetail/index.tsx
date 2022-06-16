import { FaUser, FaTruck } from 'react-icons/fa';
import styles from './styles.module.scss';
import { AiTwotoneCalendar, AiFillPrinter } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import {
  Paper,
  Button,
  Grid,
  Select,
  Textarea,
  Stack,
  Text,
  Group,
} from '@mantine/core';
import CardInfo from './components/CardInfo';
import TableDetail from './components/TableDetail';
import PaymentInfo from './components/PaymentInfo';
import { Link, useParams } from 'react-router-dom';
import { TO_ORDERS } from '@/configs';
import useSWR from 'swr';
import { getOrderById } from '@/api/order';
import { getEmployee } from '@/api';
export default function OrderDetail() {
  let { id } = useParams();
  const { data, error } = useSWR(['/order', id!], getOrderById, {
    shouldRetryOnError: false,
  });

  const { data: userData } = useSWR(['/user', id!], getEmployee);

  return (
    <Paper shadow="sm" p="lg">
      <Group>
        <Link to={`${TO_ORDERS}`}>
          <Button color="gray" size="md">
            <BiArrowBack />
          </Button>
        </Link>
        <Text weight={700} className={styles.detailHeader}>
          Order Details
        </Text>
      </Group>
      <Paper p="lg" className={styles.cardHeader}>
        <Grid columns={12} justify="Space-between">
          <Grid.Col md={6} lg={6}>
            <Group>
              <AiTwotoneCalendar className={styles.calendarIcons} />
              <Text weight={600}>Thurs, April 21, 2022, 9:40PM</Text>
            </Group>
            <Text size="xs" className={styles.mutedText}>
              Order ID: 3453012
            </Text>
          </Grid.Col>
          <Grid.Col md={6} lg={6}>
            <Grid justify="flex-end" align="center">
              <Grid.Col md={6} lg={6}>
                <Select
                  placeholder="Change status"
                  data={[
                    { value: 'Awaiting payment', label: 'Awaiting payment' },
                    { value: 'Confirmed', label: 'Confirmed' },
                    { value: 'Shipped', label: 'Shipped' },
                    { value: 'Delivered', label: 'Delivered' },
                  ]}
                />
              </Grid.Col>
              <Grid.Col md={3} lg={2}>
                {' '}
                <Button variant="outline" color="gray">
                  Save
                </Button>
              </Grid.Col>
              <Grid.Col md={3} lg={2}>
                <Button color="gray">
                  <AiFillPrinter />
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Paper>
      <div className={styles.cardInfoContainer}>
        <Grid justify="space-between">
          <CardInfo
            avatar={<FaUser className={styles.avatarCardInfo} />}
            title={'Customer'}
            name={'John Alexander'}
            email={'alex@example.com'}
            phone={'+998 99 22123456'}
            link={'View profile'}
          />

          <CardInfo
            avatar={<FaTruck className={styles.avatarCardInfo} />}
            title={'Order info'}
            name={'Shipping: Fargo express'}
            email={'Pay method: card'}
            phone={'Status: new'}
            link={'Download info'}
          />

          <CardInfo
            avatar={<ImLocation className={styles.avatarCardInfo} />}
            title={'Deliver to'}
            name={'City: Tashkent, Uzbekistan'}
            email={'Block A, House 123, Floor 2'}
            phone={'Po Box 10000'}
            link={'View profile'}
          />
        </Grid>
      </div>
      <Grid>
        <Grid.Col md={6} lg={8}>
          <div className={styles.tableContainer}>
            <TableDetail
              data={[...Array(4).keys()].map(() => ({
                image:
                  'https://www.ecommerce-admin.com/demo/images/items/1.jpg',
                name: 'T-shirt Blue, size XXL',
                price: '50000vnd',
                quantity: 2,
                total: '100000vnd',
              }))}
            />
          </div>
        </Grid.Col>

        <Grid.Col md={6} lg={4}>
          <div>
            <PaymentInfo
              title={'Payment info'}
              image="https://www.ecommerce-admin.com/demo/images/card-brands/2.png"
              id={'**** **** 4768'}
              name={'Grand Market LLC'}
              phone={'+1 (800) 555-154-52'}
            />
          </div>

          <Textarea
            className={styles.noteContainer}
            placeholder="Type some note"
            label="Notes"
            required
          />
          <Stack align="flex-start" spacing="md" className={styles.mt10}>
            <Button>Save note</Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
