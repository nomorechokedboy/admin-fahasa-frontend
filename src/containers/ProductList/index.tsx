import CTA from '@/components/CTA';
import { TO_PRODUCTS } from '@/configs';
import ListPageLayout from '@/layout/SubPageLayout';
import { setError } from '@/redux';
import { getDatabaseState } from '@/redux/database';
import IProduct from '@/types/product';
import { Pagination } from '@mantine/core';
import { Key, useEffect } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr/immutable';
import { getAllProduct } from '../../api';
import Product from './components/Product';
import Products from './components/Products';
import styles from './styles.module.scss';

export default function ProductList() {
  const db = useSelector(getDatabaseState);

  const { data, error, isValidating, mutate } = useSWR(
    `/product?db=${db}`,
    getAllProduct,
    { shouldRetryOnError: false },
  );
  const dispatch = useDispatch();
  const hasData = data?.length;

  console.log('product list render');

  const handleReload = () => {
    mutate('/product');
  };

  const handleDeleteCache = async (id: string) => {
    const updatedProducts: Array<IProduct> = data.filter(
      (product: IProduct) => product._id !== id,
    );

    await mutate(updatedProducts, false);
  };

  useEffect(() => {
    dispatch(setError(error?.message));
  }, [dispatch, error]);

  return (
    <>
      <ListPageLayout rootDir={TO_PRODUCTS} title="Products List">
        {error ? (
          <CTA
            image={<FiIcons.FiMeh />}
            message={error.message}
            label="Reload the page"
            onClick={handleReload}
          />
        ) : isValidating ? (
          <Products>
            {[...Array(8).keys()].map((value: number) => (
              <Product key={value} loading />
            ))}
          </Products>
        ) : !hasData ? (
          <CTA
            image={<BsIcons.BsCartX />}
            message="There is no current product, please add new product!"
          />
        ) : (
          <>
            <Products>
              {data.map((product: IProduct, index: Key) => (
                <Product
                  key={index}
                  handleDeleteCache={handleDeleteCache}
                  loading={isValidating}
                  {...product}
                />
              ))}
            </Products>
            <div className={styles.pagination}>
              <Pagination total={5} />
            </div>
          </>
        )}
      </ListPageLayout>
    </>
  );
}
