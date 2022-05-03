import { getProduct, updateProduct } from '@/api';
import CTA from '@/components/CTA';
import ErrorIcon from '@/components/ErrorIcon';
import ProductForm from '@/components/ProductForm';
import { DETAIL, TO_PRODUCTS } from '@/configs';
import {
  getDatabaseState,
  getDisabledProduct,
  setDisableProduct,
  setError,
  setNotification,
  toggleDisabledProduct,
} from '@/redux';
import Product from '@/types/product';
import { validateErrorHelper } from '@/utils';
import { Button, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import { AiOutlineReload } from 'react-icons/ai';
import { BsPencilFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import useSWR, { useSWRConfig } from 'swr';
import styles from './styles.module.scss';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const disabled = useSelector(getDisabledProduct);
  const { id } = useParams();
  const redirect = useNavigate();
  const db = useSelector(getDatabaseState);
  const { mutate } = useSWRConfig();
  const { data: product, error } = useSWR(
    `/product/${id}?db=${db}`,
    getProduct,
    {
      shouldRetryOnError: false,
    },
  );
  const loading = !product && !error;

  const handleTransitionUpdate = () => {
    dispatch(toggleDisabledProduct());
  };

  const handleReload = () => {
    mutate(`/product/${id}?db=${db}`);
  };

  const handleSubmit = (data: Partial<Product>) => {
    id &&
      updateProduct(id, data)
        .then((res) => {
          const {
            updated: { name, _id: newId },
          } = res;
          redirect(`${TO_PRODUCTS}/${DETAIL}/${newId}`);
          dispatch(setNotification(`Product name: ${name} updated!`));
          dispatch(setDisableProduct());
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) {
            const { error } = e.response?.data;
            const errorMessage =
              typeof error === 'string' ? error : validateErrorHelper(error);
            dispatch(setError(errorMessage));
          }
        });
  };

  const DisabledButtonIcon = disabled ? <BsPencilFill /> : <FaTimes />;

  if (!product && error)
    return (
      <CTA
        message={`Can't fetch product with id: ${id}!`}
        image={<ErrorIcon />}
        label="Reload"
        title={'Error fetching product'}
        onClick={handleReload}
        leftIcon={<AiOutlineReload />}
      />
    );

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Skeleton visible={loading}>
          <Title>{product?.name ?? 'Product detail'}</Title>
        </Skeleton>
        <Skeleton className={styles.editBtnSkeleton} visible={loading}>
          <Button
            color={disabled ? 'blue' : 'red'}
            leftIcon={DisabledButtonIcon}
            onClick={handleTransitionUpdate}
          />
        </Skeleton>
      </div>
      {!loading && (
        <ProductForm
          disabled={disabled}
          loading={loading}
          onSubmit={handleSubmit}
          {...product}
        />
      )}
      {loading && <ProductForm loading={loading} onSubmit={handleSubmit} />}
    </div>
  );
}
