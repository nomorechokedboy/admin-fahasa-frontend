import ProductFile from "@/types/customs/file";
import { CustomHookCallback } from "@/types/customs/hook";
import { ChangeEvent } from "react";
import usePreviewImage from "../usePreviewImage";

export default function useUploadFile(
    cb?: CustomHookCallback<ProductFile>,
): [ProductFile | undefined, (e: ChangeEvent<HTMLInputElement>) => void] {
    const [image, setImage] = usePreviewImage();

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file: ProductFile | undefined = e.target.files?.[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setImage(file);
            if (typeof cb === "function") cb(file);
        }
    };

    return [image, handleChangeImage];
}
