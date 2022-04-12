import CustomRTE from "@/components/CustomRTEProps";
import useUploadFile from "@/hooks/useUploadFile";
import useValidate from "@/hooks/useValidate";
import { PartialProduct } from "@/types/product";
import { getFormData } from "@/utils";
import {
    Button,
    MultiSelect,
    NativeSelect,
    NumberInput,
    TextInput,
} from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { UseFormInput } from "@mantine/form/lib/use-form";
import { FormEvent, useRef } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import RichTextEditor, { EditorValue } from "react-rte";
import { defaultProduct, genresData, PublicYearData } from "../../data";
import productFormSchema from "../../validate";
import FormSection from "../FormSection";
import styles from "./styles.module.scss";

interface FormProps extends PartialProduct {
    onSubmit: (data: FormData) => void;
}

export default function Form({ onSubmit, ...productProps }: FormProps) {
    const [productImage, handleChangeImage] = useUploadFile((file) => {
        form.setFieldValue("image", file);
    });
    const useFormInput: UseFormInput<PartialProduct> =
        JSON.stringify(productProps) !== JSON.stringify({})
            ? {
                  initialValues: {
                      ...productProps,
                  },
              }
            : defaultProduct;
    const form = useForm<PartialProduct>({
        ...useFormInput,
        schema: joiResolver(productFormSchema),
    });
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [productDesc, descriptionError, handleDescriptionChange] =
        useValidate<EditorValue>(
            form.errors.description,
            (value) => {
                form.setFieldValue("description", value.toString("markdown"));
            },
            RichTextEditor.createEmptyValue(),
        );
    const [genres, genresError, handleGenresChange] = useValidate<string[]>(
        form.errors.genres,
        (values) => {
            form.setFieldValue("genres", values.join(" "));
        },
    );

    const handleUpload = () => {
        inputFileRef.current?.click();
    };

    const handleSubmit = async (values: typeof form.values, _: FormEvent) => {
        onSubmit(getFormData(values));
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <FormSection label="1.General information">
                <TextInput
                    className={styles.input}
                    label="Sku"
                    placeholder="Enter sku here..."
                    required
                    {...form.getInputProps("_id")}
                />
                <TextInput
                    className={styles.input}
                    label="Product name"
                    placeholder="Enter product name here..."
                    required
                    {...form.getInputProps("name")}
                />
                <NumberInput
                    className={styles.input}
                    type="number"
                    label="Amount"
                    min={1}
                    required
                    {...form.getInputProps("amount")}
                />
                <CustomRTE
                    label="Description"
                    placeholder="Enter product description here..."
                    className={styles.rte}
                    value={productDesc!}
                    onChange={handleDescriptionChange}
                    error={descriptionError}
                />
            </FormSection>
            <FormSection label="2.Additional information">
                <TextInput
                    className={styles.input}
                    placeholder="Enter author name here..."
                    label="Author"
                    required
                    {...form.getInputProps("author")}
                />
                <TextInput
                    className={styles.input}
                    type="text"
                    label="Product Supplier"
                    placeholder="Enter product supplier here..."
                    required
                    {...form.getInputProps("productSupplier")}
                />
                <TextInput
                    className={styles.input}
                    type="text"
                    label="Publishing Company"
                    placeholder="Enter product publishing company here..."
                    required
                    {...form.getInputProps("publishingCompany")}
                />
                <NativeSelect
                    className={styles.input}
                    label="Public Year"
                    data={PublicYearData}
                    required
                    {...form.getInputProps("publicYear")}
                />
            </FormSection>
            <FormSection label="3.Pricing">
                <NumberInput
                    className={styles.input}
                    type="number"
                    label="Price"
                    min={10000}
                    required
                    {...form.getInputProps("price")}
                />
            </FormSection>
            <FormSection label="4.Genres">
                <MultiSelect
                    className={styles.input}
                    data={genresData}
                    value={genres}
                    onChange={handleGenresChange}
                    placeholder="Select genres..."
                    nothingFound="Nothing found"
                    clearable
                    searchable
                    error={genresError}
                />
            </FormSection>
            <FormSection label="5.Media">
                <div className={styles.previewImage}>
                    {productImage?.preview ? (
                        <img src={productImage.preview} alt="Preview image" />
                    ) : (
                        <AiOutlineFileImage />
                    )}
                </div>
                <div className={styles.fileWrapper}>
                    <input
                        className={styles.file}
                        accept="image/*"
                        id="uploadFile"
                        type="file"
                        ref={inputFileRef}
                        required
                        onChange={handleChangeImage}
                    />
                    <Button onClick={handleUpload}>Upload</Button>
                </div>
            </FormSection>
            <div className={styles.buttonWrapper}>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}
