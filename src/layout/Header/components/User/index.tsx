import Text from "@/components/Text";
import {
    Avatar,
    Group,
    UnstyledButton,
    UnstyledButtonProps,
} from "@mantine/core";
import { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.scss";

interface UserProps extends UnstyledButtonProps {
    src: string | null;
    name: string;
}

const User = forwardRef<HTMLButtonElement, UserProps>(
    ({ name, src, ...buttonProps }, ref) => {
        return (
            <UnstyledButton ref={ref} {...buttonProps}>
                <Group>
                    {!src ? (
                        <Avatar radius={"lg"} src={src} alt={`${name} avatar`}>
                            {name[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <Avatar
                            radius={"lg"}
                            src={src}
                            alt={`${name} avatar`}
                        />
                    )}
                    <div className={styles.name}>
                        <Text>{name}</Text>
                    </div>
                    <FaChevronDown />
                </Group>
            </UnstyledButton>
        );
    },
);

export default User;
