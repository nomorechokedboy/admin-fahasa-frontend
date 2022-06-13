import { PartialProduct } from '@/types';
import { UseFormInput } from '@mantine/form/lib/use-form';

export const PublicYearData = Array.from(Array(23)).map((_, i) => ({
  value: `${i + 2000}`,
  label: `${i + 2000}`,
}));

export const defaultProduct: UseFormInput<PartialProduct> = {
  initialValues: {
    sku: '',
    amount: 1,
    author: '',
    description: '',
    genres: [''],
    image: '',
    name: '',
    price: 10000,
    productSupplier: '',
    publicYear: 2022,
    publishingCompany: '',
  },
};
