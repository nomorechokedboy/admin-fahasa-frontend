import ProductFile from "@/types/customs/file";
import { useEffect, useState } from "react";

export default function usePreviewImage() {
    const [image, setImage] = useState<ProductFile>();

    useEffect(() => {
        return () => {
            if (image) URL.revokeObjectURL(image.preview as string);
        };
    }, [image]);

    return { image, setImage };
}
