import { createProduct } from '@/api';
import ProductForm from '@/components/ProductForm';
import Title from '@/components/Title';
import { setError, setNotification } from '@/redux';
import Product from '@/types/product';
import { validateErrorHelper } from '@/utils/errors';
import axios from 'axios';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

const AddForm = memo(() => {
  const dispatch = useDispatch();
  const handleSubmit = (data: Partial<Product>) => {
    console.log({ data });

    createProduct(data)
      .then((res) => {
        const {
          createdProduct: { name },
        } = res;
        dispatch(setNotification(`Product name: ${name} created!`));
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

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title>Add new product</Title>
      </div>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
});

export default AddForm;
