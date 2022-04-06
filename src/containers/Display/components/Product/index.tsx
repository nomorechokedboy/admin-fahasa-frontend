import {
    Button,
    Card,
    Text,
    Image,
    Group,
    Stack,
    Skeleton,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import * as BsIcons from "react-icons/bs";
import ConfirmModal from "@/components/ConfirmModal";
import styles from "./styles.module.scss";

type ProductProps = {
    loading: boolean;
    name?: string;
    price?: string;
    imageSrc?: string;
};

export default function Product({
    name,
    price,
    imageSrc,
    loading,
}: ProductProps) {
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
                                src={imageSrc}
                                radius={5}
                                withPlaceholder
                            />
                        </div>
                    </Skeleton>
                    <Skeleton visible={loading}>
                        <Stack>
                            <Text weight={500}>{name || "no name"}</Text>
                            <Text weight={700}>
                                {Number(price).toLocaleString() || "n/a"} vnd
                            </Text>
                        </Stack>
                    </Skeleton>
                    <Skeleton visible={loading}>
                        <Group grow>
                            <Button
                                leftIcon={<BsIcons.BsPencilFill />}
                                color="blue"
                            >
                                Edit
                            </Button>
                            <Button
                                leftIcon={<BsIcons.BsFillTrashFill />}
                                color="red"
                                onClick={handleModalClick}
                            >
                                Delete
                            </Button>
                        </Group>
                    </Skeleton>
                </Stack>
            </Card>
        </>
    );
}
