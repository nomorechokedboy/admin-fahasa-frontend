import useUploadFile from "@/hooks/useUploadFile";
import useValidate from "@/hooks/useValidate";
import { FormProps } from "@/types/product";
import { getFormData } from "@/utils";
import {
    Button,
    Container,
    MultiSelect,
    NativeSelect,
    NumberInput,
    TextInput,
    useMantineColorScheme,
} from "@mantine/core";
import { joiResolver, useForm } from "@mantine/form";
import { UseFormInput } from "@mantine/form/lib/use-form";
import { FormEvent, useRef } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import RichTextEditor, { EditorValue } from "react-rte";
import CustomRTE from "../CustomRTEProps";
import Text from "../Text";
import { defaultProduct, genresData, PublicYearData } from "./data";
import styles from "./styles.module.scss";
import productFormSchema from "./validate";

interface ProductFormProps extends FormProps {
    onSubmit: (data: FormData) => void;
}

export default function ProductForm({
    onSubmit,
    ...productProps
}: ProductFormProps) {
    const { colorScheme } = useMantineColorScheme();
    const [productImage, handleChangeImage] = useUploadFile((file) => {
        form.setFieldValue("image", file);
    });
    const useFormInput: UseFormInput<FormProps> =
        JSON.stringify(productProps) !== JSON.stringify({})
            ? {
                  initialValues: {
                      ...productProps,
                  },
              }
            : defaultProduct;
    const form = useForm<FormProps>({
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
        <Container
            className={styles.container}
            sx={(theme) => ({
                backgroundColor:
                    colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[1],
            })}
        >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <Text size="lg" font="bold">
                            1.General information
                        </Text>
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                label="Sku"
                                placeholder="Enter sku here..."
                                required
                                {...form.getInputProps("_id")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                label="Product name"
                                placeholder="Enter product name here..."
                                required
                                {...form.getInputProps("name")}
                            />
                        </div>
                        <div className={styles.row}>
                            <NumberInput
                                className={styles.input}
                                type="number"
                                label="Amount"
                                min={1}
                                required
                                {...form.getInputProps("amount")}
                            />
                        </div>
                        <div className={styles.row}>
                            <CustomRTE
                                label="Description"
                                placeholder="Enter product description here..."
                                className={styles.rte}
                                value={productDesc!}
                                onChange={handleDescriptionChange}
                                error={descriptionError}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <Text size="lg" font="bold">
                            2.Additional information
                        </Text>
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                placeholder="Enter author name here..."
                                label="Author"
                                required
                                {...form.getInputProps("author")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                type="text"
                                label="Product Supplier"
                                placeholder="Enter product supplier here..."
                                required
                                {...form.getInputProps("productSupplier")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                type="text"
                                label="Publishing Company"
                                placeholder="Enter product publishing company here..."
                                required
                                {...form.getInputProps("publishingCompany")}
                            />
                        </div>
                        <div className={styles.row}>
                            <NativeSelect
                                className={styles.input}
                                label="Public Year"
                                data={PublicYearData}
                                required
                                {...form.getInputProps("publicYear")}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <Text size="lg" font="bold">
                            3.Pricing
                        </Text>
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.row}>
                            <NumberInput
                                className={styles.input}
                                type="number"
                                label="Price"
                                min={10000}
                                required
                                {...form.getInputProps("price")}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <Text size="lg" font="bold">
                            4.Genres
                        </Text>
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.row}>
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
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.colLeft}>
                        <Text size="lg" font="bold">
                            5.Media
                        </Text>
                    </div>
                    <div className={styles.colRight}>
                        <div className={styles.row}>
                            <div className={styles.previewImage}>
                                {productImage?.preview ? (
                                    <img
                                        src={productImage.preview}
                                        alt="Preview image"
                                    />
                                ) : (
                                    <AiOutlineFileImage />
                                )}
                            </div>
                        </div>
                        <div className={styles.row}>
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
                        </div>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Container>
    );
}
