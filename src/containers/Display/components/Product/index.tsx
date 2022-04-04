import { Button, Card, Text, Image, Group, Stack } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import * as BsIcons from "react-icons/bs";
import ConfirmModal from "@/components/ConfirmModal";
import styles from "./styles.module.scss";

type ProductProps = {
    name: string;
    price: string;
    image: any;
};

export default function Product({ name, price, image }: ProductProps) {
    const [isModalOpen, modalOpenToggle] = useToggle(false, [true, false]);

    const handleModalClick = () => {
        modalOpenToggle();
    };

    return (
        <>
            <ConfirmModal
                message="Do you want to remove the item"
                opened={isModalOpen}
                onClose={handleModalClick}
                onOkClick={() => {}}
                size="xs"
                centered
            />

            <Card withBorder>
                <Stack>
                    <div className={styles.cardSection}>
                        <Image
                            className={styles.image}
                            src={image}
                            radius={5}
                            withPlaceholder
                        />
                    </div>
                    <Text weight={500}>{name}</Text>
                    <Text weight={700}>{price}</Text>
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
                </Stack>
            </Card>
        </>
    );
}
