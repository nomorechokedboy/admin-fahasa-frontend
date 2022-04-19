import { CLOUD_NAME, UploadAPI } from '@/configs/env';
import axiosClient from '@/lib/axiosClient';

export const postImage = (data: FormData) =>
  axiosClient
    .post(`${UploadAPI}/${CLOUD_NAME}/upload`, data)
    .then((res) => res.data);
