import { PartialProduct } from '@/types';
import { Card, Skeleton } from '@mantine/core';
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
  Legend,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import BoxLayout from '../BoxLayout';
import styles from './styles.module.scss';

type ChartProps = {
  data: PartialProduct & any[];
  loading: boolean;
};

export default function Chart({ data, loading }: ChartProps) {
  return (
    <Card className={styles.chartContainer} radius="sm" withBorder>
      <BoxLayout title="Sale statistics">
        <Skeleton visible={loading}>
          <ResponsiveContainer height={376}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="genres" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#61afef" />
            </BarChart>
          </ResponsiveContainer>
        </Skeleton>
      </BoxLayout>
    </Card>
  );
}
