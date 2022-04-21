import { SimpleGrid } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

type ProductsProps = {
  children: ReactNode;
};

export default function Products({ children }: ProductsProps) {
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'lg', cols: 3 },
        { maxWidth: 'sm', cols: 2 },
        { maxWidth: 'xs', cols: 1 },
      ]}
      className={styles.productList}
    >
      {children}
    </SimpleGrid>
  );
}
