import { UPLOAD_PRESET } from "@/configs/env";

export const formatImage = (url: string) => {
    url = url.replace("upload/", "upload/w_600,h_600,c_fit,q_auto:best/");
    url = url.replace(".webp", ".jpg");

    return url;
};
export const UploadImageFactory = (file: File, name: string) => {
    const data = new FormData();
    file && data.append("file", file);
    typeof UPLOAD_PRESET === "string" &&
        data.append("upload_preset", UPLOAD_PRESET);
    data.append("tags", "browser_upload");
    data.append("public_id", name);
    data.append("folder", "singleProductImage");

    return data;
};
