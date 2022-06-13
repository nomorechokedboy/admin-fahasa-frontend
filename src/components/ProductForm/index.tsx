import { PartialProduct } from '@/types/product';
import { Container } from '@mantine/core';
import Form from './components/Form';
import styles from './styles.module.scss';

interface ProductFormProps extends PartialProduct {
  disabled?: boolean;
  onSubmit: (data: PartialProduct) => void;
  loading?: boolean;
}

export default function ProductForm({
  onSubmit,
  disabled,
  loading,
  ...productProps
}: ProductFormProps) {
  console.log('ProductForm render');

  return (
    <Container
      className={styles.container}
      size={5781}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[1],
      })}
    >
      <Form
        disabled={disabled}
        loading={loading}
        onSubmit={onSubmit}
        {...productProps}
      />
    </Container>
  );
}
