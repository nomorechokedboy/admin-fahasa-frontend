import { Card, Group, Skeleton, Stack, Text } from "@mantine/core";
import { ReactElement } from "react";
import BoxLayout from "../BoxLayout";
import styles from "./styles.module.scss";

type TotalBoxProps = {
    icon: ReactElement;
    title: string;
    amount: number;
    unit?: string;
    loading?: boolean;
};

export default function TotalBox({
    icon,
    title,
    amount,
    unit,
    loading,
}: TotalBoxProps) {
    return (
        <Card radius="sm" withBorder>
            <Group>
                <Skeleton visible={loading} className={styles.iconWrapper}>
                    {icon}
                </Skeleton>
                <Stack>
                    <Skeleton visible={loading}>
                        <BoxLayout title={title} titleSize="md" titleMb={4}>
                            <Text>
                                {amount?.toLocaleString() || "n/a"} {unit}
                            </Text>
                        </BoxLayout>
                    </Skeleton>
                </Stack>
            </Group>
        </Card>
    );
}
