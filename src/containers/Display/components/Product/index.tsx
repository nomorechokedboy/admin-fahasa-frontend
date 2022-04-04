import {
    Button,
    Card,
    Text as MantineText,
    Image as MantineImage,
    Group,
    Stack,
    Modal,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import * as BsIcons from "react-icons/bs";
import ConfirmModal from "../ConfirmModal";
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
            <Modal
                size="xs"
                centered
                opened={isModalOpen}
                onClose={handleModalClick}
            >
                <ConfirmModal onCancelClick={handleModalClick} />
            </Modal>

            <Card withBorder>
                <Stack>
                    <div className={styles.cardSection}>
                        <MantineImage
                            className={styles.image}
                            src={image}
                            radius={5}
                            withPlaceholder
                        />
                    </div>
                    <MantineText weight={500}>{name}</MantineText>
                    <MantineText weight={700}>{price}</MantineText>
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
