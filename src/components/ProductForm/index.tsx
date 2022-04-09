import usePreviewImage from "@/hooks/usePreviewImage";
import { createProduct } from "@/lib/api";
import ProductFile from "@/types/customs/file";
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
import { useForm } from "@mantine/form";
import { UseFormInput } from "@mantine/form/lib/use-form";
import clx from "classnames";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import RichTextEditor, { EditorValue, ToolbarConfig } from "react-rte";
import Text from "../Text";
import {
    defaultProduct,
    genresData,
    PublicYearData,
    toolbarConfig,
} from "./data";
import styles from "./styles.module.scss";

interface ProductFormProps extends FormProps {
    onSubmit: () => void;
}

export default function ProductForm({
    onSubmit,
    ...productProps
}: ProductFormProps) {
    const { colorScheme } = useMantineColorScheme();
    const [productDesc, setProductDesc] = useState(
        RichTextEditor.createEmptyValue(),
    );
    const { image: productImage, setImage: setProductImage } =
        usePreviewImage();
    const useFormInput: UseFormInput<FormProps> =
        JSON.stringify(productProps) !== JSON.stringify({})
            ? {
                  initialValues: {
                      ...productProps,
                  },
              }
            : defaultProduct;
    const form = useForm<FormProps>(useFormInput);

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const productImage: ProductFile | undefined = e.target.files?.[0];
        if (productImage) {
            productImage.preview = URL.createObjectURL(productImage);
            setProductImage(productImage);
        }
    };

    const handleRTEChange = (inputValue: EditorValue) => {
        setProductDesc(inputValue);
    };

    const handleSubmit = async (values: typeof form.values, _: FormEvent) => {
        form.setFieldValue("description", productDesc.toString("markdown"));
        form.setFieldValue("image", productImage);

        try {
            const res = await createProduct("/product", getFormData(values));
            console.log({ data: res.data });
        } catch (e) {
            console.error(e);
        }
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
                                {...form.getInputProps("_id")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                label="Product name"
                                placeholder="Enter product name here..."
                                {...form.getInputProps("name")}
                            />
                        </div>
                        <div className={styles.row}>
                            <NumberInput
                                className={styles.input}
                                type="number"
                                label="Amount"
                                min={1}
                                {...form.getInputProps("amount")}
                            />
                        </div>
                        <div className={styles.row}>
                            <RichTextEditor
                                toolbarConfig={toolbarConfig as ToolbarConfig}
                                className={clx(styles.rte, {
                                    [styles.dark]: colorScheme === "dark",
                                })}
                                value={productDesc}
                                onChange={handleRTEChange}
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
                                label="Author"
                                {...form.getInputProps("author")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                type="text"
                                label="Product Supplier"
                                {...form.getInputProps("productSupplier")}
                            />
                        </div>
                        <div className={styles.row}>
                            <TextInput
                                className={styles.input}
                                type="text"
                                label="Publishing Company"
                                {...form.getInputProps("publishingCompany")}
                            />
                        </div>
                        <div className={styles.row}>
                            <NativeSelect
                                className={styles.input}
                                label="Public Year"
                                data={PublicYearData}
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
                                min={1000}
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
                                searchable
                                placeholder="Select genres..."
                                nothingFound="Nothing found"
                                clearable
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
                                    <FaCloudUploadAlt />
                                )}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.fileWrapper}>
                                <input
                                    type="file"
                                    required
                                    onChange={handleChangeImage}
                                />
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
