import { MouseEventHandler } from "react";
import { Stack, Group, Button } from "@mantine/core";
import styles from "./styles.module.scss";

type ConfirmDeleteModalProps = {
    onCancelClick: MouseEventHandler<HTMLButtonElement>;
};

export default function ConfirmModal({
    onCancelClick,
}: ConfirmDeleteModalProps) {
    return (
        <Stack>
            <div className={styles.title}>Do you want to remove the item?</div>
            <Group grow>
                <Button color="blue">Ok</Button>
                <Button onClick={onCancelClick} color="green">
                    Cancel
                </Button>
            </Group>
        </Stack>
    );
}
