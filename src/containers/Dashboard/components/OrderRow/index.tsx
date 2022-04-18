import clx from "classnames";
import { Button, Menu, Text } from "@mantine/core";
import styles from "./styles.module.scss";

type OrderRowProps = {
    id: string;
    name: string;
    email: string;
    totalPayment: number;
    orderState: string;
    date: string;
};

export default function OrderRow({
    id,
    name,
    email,
    totalPayment,
    orderState,
    date,
}: OrderRowProps) {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Text weight={600}>{name}</Text>
            </td>
            <td>{email}</td>
            <td>{totalPayment.toLocaleString()} vnd</td>
            <td>
                <span
                    className={clx(styles.orderStateBox, {
                        [styles.delivered]: orderState === "Delivered",
                        [styles.pending]: orderState === "Pending",
                        [styles.cancelled]: orderState === "Cancelled",
                    })}
                >
                    {orderState}
                </span>
            </td>
            <td>{date}</td>
            <td className={styles.buttonContainer}>
                <Button>Detail</Button>
                <Menu control={<Button>...</Button>}>
                    <Menu.Item>View detail</Menu.Item>
                    <Menu.Item>Edit info</Menu.Item>
                    <Menu.Item color="red">Delete</Menu.Item>
                </Menu>
            </td>
        </tr>
    );
}
