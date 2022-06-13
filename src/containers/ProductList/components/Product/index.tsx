import { deleteProduct } from '@/api';
import ConfirmModal from '@/components/ConfirmModal';
import { DETAIL, TO_PRODUCTS } from '@/configs';
import { setError, setNotification } from '@/redux';
import { validateErrorHelper } from '@/utils';
import { Button, Card, Image, Skeleton, Stack, Text } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import axios from 'axios';
import { BiDetail } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

type ProductProps = {
  loading: boolean;
  name?: string;
  price?: number;
  image?: string;
  _id?: string;
  slug?: string;
  handleDeleteCache?: (id: string) => void;
};

export default function Product({
  name,
  price,
  image,
  loading,
  _id,
  slug,
  handleDeleteCache,
}: ProductProps) {
  const dispatch = useDispatch();
  const [isModalOpen, toggleModal] = useToggle(false, [true, false]);
  const redirect = useNavigate();

  const handleModalClick = () => {
    toggleModal();
  };

  const handleConfirmDelete = () => {
    _id &&
      deleteProduct(_id)
        .then((res) => {
          const {
            success,
            deleted: { name },
          } = res;

          if (success) {
            dispatch(
              setNotification(`Product with name: ${name} has been deleted!`),
            );
            handleDeleteCache && handleDeleteCache(_id);
          }
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) {
            const { error } = e.response?.data;
            const errorMessage =
              typeof error === 'string' ? error : validateErrorHelper(error);
            dispatch(setError(errorMessage));
          }
        })
        .finally(() => toggleModal);
  };

  const handleToDetail = () => {
    redirect(`${TO_PRODUCTS}/${DETAIL}/${slug}`);
  };

  return (
    <>
      <ConfirmModal
        message="Do you want to remove the item?"
        opened={isModalOpen}
        onClose={handleModalClick}
        onOkClick={handleConfirmDelete}
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
              <Text className={styles.productName} weight={500} lineClamp={1}>
                {name}
              </Text>
              <Text weight="bold">{price?.toLocaleString() || 'n/a'} vnd</Text>
            </Stack>
          </Skeleton>
          <Skeleton visible={loading} className={styles.buttonContainer}>
            <Button
              className={styles.icon}
              leftIcon={<BiDetail />}
              color="blue"
              onClick={handleToDetail}
            >
              Detail
            </Button>
            <Button
              leftIcon={<BsFillTrashFill />}
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
