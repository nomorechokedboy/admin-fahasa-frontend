import Product, { PartialProduct } from '@/types/product';
import { Container } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Form from './components/Form';
import styles from './styles.module.scss';

interface ProductFormProps extends PartialProduct {
  onSubmit: (data: Partial<Product>) => void;
}

export default function ProductForm({
  onSubmit,
  ...productProps
}: ProductFormProps) {
  const colorScheme = useColorScheme();
  console.log('ProductForm render');

  return (
    <Container
      className={styles.container}
      sx={(theme) => ({
        backgroundColor:
          colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
      })}
    >
      <Form onSubmit={onSubmit} {...productProps} />
    </Container>
  );
}
