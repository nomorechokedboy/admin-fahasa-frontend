import { Notification, NotificationProps } from "@mantine/core";
import styles from "./styles.module.scss";

type NotificationDialogProps = NotificationProps & {
    message?: string;
};

export default function NotificationDialog({
    message,
    onClose,
    title,
    color,
    icon,
    ...NotificationDialogProps
}: NotificationDialogProps) {
    return (
        <Notification
            className={styles.notification}
            color={color}
            icon={icon}
            title={title}
            onClose={onClose}
            {...NotificationDialogProps}
        >
            {message}
        </Notification>
    );
}
