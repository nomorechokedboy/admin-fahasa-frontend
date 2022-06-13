import {
  createGenre,
  getAllAuthor,
  getAllGenre,
  getAllPublisher,
  getAllSupplier,
} from '@/api';
import CustomRTE from '@/components/CustomRTE';
import UploadFile from '@/components/UploadFile';
import useUploadFile from '@/hooks/useUploadFile';
import useValidate from '@/hooks/useValidate';
import { setNotification } from '@/redux';
import { PartialProduct } from '@/types/product';
import { validateErrorHelper } from '@/utils';
import {
  Button,
  Image,
  MultiSelect,
  NativeSelect,
  NumberInput,
  Select,
  Skeleton,
  TextInput,
} from '@mantine/core';
import { joiResolver, useForm } from '@mantine/form';
import { UseFormInput } from '@mantine/form/lib/use-form';
import axios from 'axios';
import { FormEvent, memo } from 'react';
import { useDispatch } from 'react-redux';
import RichTextEditor, { EditorValue } from 'react-rte';
import useSWR from 'swr';
import { defaultProduct, PublicYearData } from '../../data';
import productFormSchema from '../../validate';
import FormSection from '../FormSection';
import styles from './styles.module.scss';

interface FormProps extends PartialProduct {
  disabled?: boolean;
  onSubmit: (data: PartialProduct) => void;
  loading?: boolean;
}

const Form = memo<FormProps>(
  ({ disabled, onSubmit, loading, ...productProps }) => {
    const dispatch = useDispatch();

    const [productImage, handleChangeImage, handleCancelImage] =
      useUploadFile();
    const useFormInput: UseFormInput<PartialProduct> = !!productProps
      ? {
          initialValues: {
            amount: productProps.amount,
            author: productProps.author,
            description: productProps.description,
            genres: productProps.genres,
            image: productProps.image,
            name: productProps.name,
            price: productProps.price,
            productSupplier: productProps.productSupplier,
            publicYear: productProps.publicYear,
            publishingCompany: productProps.publishingCompany,
            sku: productProps.sku,
          },
        }
      : defaultProduct;

    const form = useForm<PartialProduct>({
      ...useFormInput,
      schema: joiResolver(productFormSchema),
    });
    console.log({ values: form.values, errors: form.errors });

    const [productDesc, descriptionError, handleDescriptionChange, resetDesc] =
      productProps.description
        ? useValidate<EditorValue>(
            form.errors.description,
            (value) => {
              form.setFieldValue('description', value.toString('markdown'));
            },
            RichTextEditor.createValueFromString(
              productProps.description,
              'markdown',
            ),
          )
        : useValidate<EditorValue>(
            form.errors.description,
            (value) => {
              form.setFieldValue('description', value.toString('markdown'));
            },
            RichTextEditor.createEmptyValue(),
          );

    // const genresArray = productProps.genres && [productProps.genres];
    const { data: genresArray, mutate } = useSWR('/genre', getAllGenre);
    const { data: authorsData } = useSWR('/author', getAllAuthor);
    const { data: suppliersData } = useSWR('/supplier', getAllSupplier);
    const { data: publishersData } = useSWR('/publisher', getAllPublisher);

    const genreData =
      genresArray &&
      genresArray.map((value: any) => ({
        value: value._id,
        label: value.name,
      }));
    const authorData =
      authorsData &&
      authorsData.map(
        (author: { name: string; _id: string; slug: string }) => ({
          value: author._id,
          label: author.name,
        }),
      );
    const supplierData =
      suppliersData &&
      suppliersData.map((author: { name: string; _id: string }) => ({
        value: author._id,
        label: author.name,
      }));
    const publisherData =
      publishersData &&
      publishersData.map((author: { name: string; _id: string }) => ({
        value: author._id,
        label: author.name,
      }));
    const [authors, authorsError, handleAuthorChange] = productProps.author
      ? useValidate<string>(
          form.errors.author,
          (values) => {
            console.log({ author: values });

            form.setFieldValue('author', values);
          },
          productProps.author,
        )
      : useValidate<string>(form.errors.author, (values) => {
          console.log({ author: values });
          form.setFieldValue('author', values);
        });

    const [suppliers, suppliersError, handleSupplierChange] =
      productProps.productSupplier
        ? useValidate<string>(
            form.errors.productSupplier,
            (values) => {
              console.log({ supplier: values });

              form.setFieldValue('productSupplier', values);
            },
            productProps.productSupplier,
          )
        : useValidate<string>(form.errors.productSupplier, (values) => {
            console.log({ supplier: values });
            form.setFieldValue('productSupplier', values);
          });

    const [publishers, publishersError, handlePublisherChange] =
      productProps.publishingCompany
        ? useValidate<string>(
            form.errors.publishingCompany,
            (values) => {
              console.log({ publisher: values });
              form.setFieldValue('publishingCompany', values);
            },
            productProps.publishingCompany,
          )
        : useValidate<string>(form.errors.publishingCompany, (values) => {
            console.log({ publisher: values });
            form.setFieldValue('publishingCompany', values);
          });

    const [genres, genresError, handleGenresChange] = productProps.genres
      ? useValidate<string[]>(
          form.errors.genres,
          (values) => {
            form.setFieldValue('genres', values);
          },
          productProps.genres,
        )
      : useValidate<string[]>(form.errors.genres, (values) => {
          form.setFieldValue('genres', values);
        });

    const handleCreateGenre = async (query: any) => {
      createGenre({ name: query, description: 'Genre description holder' })
        .then((res) => {
          const {
            createdGenre: { name },
          } = res;

          dispatch(setNotification(`Successfully create genre: ${name}`));
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) {
            const { error } = e.response?.data;
            const errorMessage =
              typeof error === 'string' ? error : validateErrorHelper(error);
            console.error(errorMessage);
          }
        });
    };

    const handleSubmit = async (values: typeof form.values, _: FormEvent) => {
      onSubmit(values);
      handleCancelImage();
    };

    const ImageSection = productProps.image ? (
      <Image
        className={styles.detailImage}
        src={productProps.image}
        alt={`${productProps.name} image`}
        withPlaceholder
      />
    ) : (
      <UploadFile
        form={form}
        handleCancelImage={handleCancelImage}
        handleChangeImage={handleChangeImage}
        productImage={productImage}
      />
    );

    return (
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <FormSection label="1. General information" loading={loading}>
          <Skeleton visible={loading}>
            <TextInput
              className={styles.input}
              label="Sku"
              placeholder="Enter sku here..."
              disabled={disabled}
              required
              {...form.getInputProps('sku')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <TextInput
              className={styles.input}
              label="Product name"
              placeholder="Enter product name here..."
              disabled={disabled}
              required
              {...form.getInputProps('name')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <NumberInput
              className={styles.input}
              type="number"
              label="Amount"
              min={1}
              disabled={disabled}
              required
              {...form.getInputProps('amount')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <CustomRTE
              label="Description"
              readOnly={disabled}
              placeholder="Enter product description here..."
              className={styles.rte}
              value={productDesc!}
              onChange={handleDescriptionChange}
              error={descriptionError}
            />
          </Skeleton>
        </FormSection>
        <FormSection label="2. Additional information" loading={loading}>
          <Skeleton visible={loading}>
            <Select
              className={styles.input}
              disabled={disabled}
              data={authorData ?? []}
              placeholder="Pick author name here..."
              label="Author"
              required
              value={authors}
              onChange={handleAuthorChange}
              error={authorsError}
              // {...form.getInputProps('author')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <Select
              className={styles.input}
              disabled={disabled}
              data={supplierData ?? []}
              type="text"
              label="Product Supplier"
              placeholder="Enter product supplier here..."
              required
              value={suppliers}
              onChange={handleSupplierChange}
              error={suppliersError}
              // {...form.getInputProps('productSupplier')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <Select
              className={styles.input}
              data={publisherData ?? []}
              disabled={disabled}
              type="text"
              label="Publishing Company"
              placeholder="Enter product publishing company here..."
              required
              value={publishers}
              error={publishersError}
              onChange={handlePublisherChange}
              // {...form.getInputProps('publishingCompany')}
            />
          </Skeleton>
          <Skeleton visible={loading}>
            <NativeSelect
              className={styles.input}
              disabled={disabled}
              label="Public Year"
              data={PublicYearData}
              required
              {...form.getInputProps('publicYear')}
            />
          </Skeleton>
        </FormSection>
        <FormSection label="3. Pricing" loading={loading}>
          <Skeleton visible={loading}>
            <NumberInput
              className={styles.input}
              disabled={disabled}
              type="number"
              label="Price"
              min={10000}
              required
              {...form.getInputProps('price')}
            />
          </Skeleton>
        </FormSection>
        <FormSection label="4. Genres" loading={loading}>
          <Skeleton visible={loading}>
            {genresArray && (
              <MultiSelect
                className={styles.input}
                data={genreData}
                disabled={disabled}
                value={genres}
                onChange={handleGenresChange}
                placeholder="Select genres..."
                nothingFound="Nothing found"
                clearable
                searchable
                creatable
                getCreateLabel={(query) => `+ Create "${query}"`}
                onCreate={handleCreateGenre}
                error={genresError}
              />
            )}
          </Skeleton>
        </FormSection>
        <FormSection label="5. Media" loading={loading}>
          <Skeleton visible={loading}>{ImageSection}</Skeleton>
        </FormSection>
        {!disabled && (
          <Skeleton visible={loading}>
            <div className={styles.buttonWrapper}>
              <Button color="green" type="submit">
                {productProps._id ? 'Update product' : 'Add product'}
              </Button>
            </div>
          </Skeleton>
        )}
      </form>
    );
  },
  // (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
);

export default Form;
