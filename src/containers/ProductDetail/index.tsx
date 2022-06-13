import { getProduct, updateProduct } from '@/api';
import CTA from '@/components/CTA';
import ErrorIcon from '@/components/ErrorIcon';
import ProductForm from '@/components/ProductForm';
import { DETAIL, TO_PRODUCTS } from '@/configs';
import {
  getDisabledProduct,
  setDisableProduct,
  setError,
  setNotification,
  toggleDisabledProduct,
} from '@/redux';
import { PartialProduct } from '@/types/product';
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
  const { mutate } = useSWRConfig();
  const { data: productResponse, error } = useSWR(
    `/product/${id}`,
    getProduct,
    {
      shouldRetryOnError: false,
    },
  );
  console.log({ productResponse });

  const loading = !productResponse && !error;

  const handleTransitionUpdate = () => {
    dispatch(toggleDisabledProduct());
  };

  const handleReload = () => {
    mutate(`/product/${id}`);
  };

  const handleSubmit = (data: PartialProduct) => {
    console.log({ data });

    // id &&
    // updateProduct(id, data)
    //   .then((res) => {
    //     const {
    //       updated: { name, slug },
    //     } = res;
    //     redirect(`${TO_PRODUCTS}/${DETAIL}/${slug}`);
    //     dispatch(setNotification(`Product name: ${name} updated!`));
    //     dispatch(setDisableProduct());
    //   })
    //   .catch((e) => {
    //     if (axios.isAxiosError(e)) {
    //       const { error } = e.response?.data;
    //       const errorMessage =
    //         typeof error === 'string' ? error : validateErrorHelper(error);
    //       dispatch(setError(errorMessage));
    //     }
    //   });
  };

  const DisabledButtonIcon = disabled ? <BsPencilFill /> : <FaTimes />;

  if (!productResponse && error)
    return (
      <CTA
        message={`Can't fetch product with slug: ${id}!`}
        icon={<ErrorIcon />}
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
          <Title>{productResponse?.name ?? 'Product detail'}</Title>
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
          amount={productResponse.amount}
          author={productResponse.author.name}
          description={productResponse.description}
          price={productResponse.price[0].amount}
          genres={productResponse.genres.map((el: any) => el.name)}
          image={productResponse.image}
          name={productResponse.name}
          productSupplier={productResponse.productSupplier.name}
          publicYear={productResponse.publicYear}
          publishingCompany={productResponse.publishingCompany.name}
          sku={productResponse.sku}
        />
      )}
      {loading && <ProductForm loading={loading} onSubmit={handleSubmit} />}
    </div>
  );
}
