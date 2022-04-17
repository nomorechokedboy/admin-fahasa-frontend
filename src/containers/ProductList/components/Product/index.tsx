import { Button, Card, Text, Image, Stack, Skeleton } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import * as BsIcons from "react-icons/bs";
import ConfirmModal from "@/components/ConfirmModal";
import styles from "./styles.module.scss";

type ProductProps = {
    loading: boolean;
    name?: string;
    price?: number;
    image?: string;
};

export default function Product({ name, price, image, loading }: ProductProps) {
    const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);

    const handleModalClick = () => {
        modalOpenToggle();
    };

    return (
        <>
            <ConfirmModal
                message="Do you want to remove the item?"
                opened={isModalOpen}
                onClose={handleModalClick}
                onOkClick={() => {}}
                size="xs"
                centered
            />

            <Card withBorder>
                <Stack>
                    <Skeleton visible={loading}>
                        <div className={styles.cardSection}>
                            <Image
                                width={100}
                                height={155}
                                src={image}
                                radius={5}
                                withPlaceholder
                            />
                        </div>
                    </Skeleton>
                    <Skeleton visible={loading}>
                        <Stack>
                            <Text weight={500}>{name || "no name"}</Text>
                            <Text weight="bold">
                                {price?.toLocaleString() || "n/a"} vnd
                            </Text>
                        </Stack>
                    </Skeleton>
                    <Skeleton
                        visible={loading}
                        className={styles.buttonContainer}
                    >
                        <Button
                            leftIcon={<BsIcons.BsPencilFill />}
                            color="blue"
                            className={styles.icon}
                        >
                            Edit
                        </Button>
                        <Button
                            leftIcon={<BsIcons.BsFillTrashFill />}
                            color="red"
                            onClick={handleModalClick}
                            className={styles.icon}
                        >
                            Delete
                        </Button>
                    </Skeleton>
                </Stack>
            </Card>
        </>
    );
}
