import { PartialProduct } from "@/types";
import { Card } from "@mantine/core";
import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    ResponsiveContainer,
    Legend,
    Tooltip,
    CartesianGrid,
} from "recharts";
import BoxLayout from "../BoxLayout";
import styles from "./styles.module.scss";

type ChartProps = {
    data: PartialProduct & any[];
};

export default function Chart({ data }: ChartProps) {
    return (
        <Card className={styles.chartContainer} radius="sm" mb="sm" withBorder>
            <BoxLayout title="Sale statistics">
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
            </BoxLayout>
        </Card>
    );
}
