import { Notification, NotificationProps } from "@mantine/core";
import styles from "./styles.module.scss";

type NotificationDialogProps = NotificationProps & {
    opened: boolean;
    message?: string;
};

export default function NotificationDialog({
    message,
    opened,
    onClose,
    title,
    color,
    icon,
    ...NotificationDialogProps
}: NotificationDialogProps) {
    return (
        <>
            {opened && (
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
            )}
        </>
    );
}
