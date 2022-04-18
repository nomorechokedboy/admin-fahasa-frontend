import ProductFile from '@/types/customs/file';
import { CustomHookCallback } from '@/types/customs/hook';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import usePreviewImage from '../usePreviewImage';

export default function useUploadFile(
  cb?: CustomHookCallback<ProductFile>,
): [
  ProductFile | undefined,
  (e: ChangeEvent<HTMLInputElement> | DataTransfer) => void,
  () => void,
] {
  const [image, setImage] = usePreviewImage();

  const handleChangeImage = (
    e: ChangeEvent<HTMLInputElement> | DataTransfer,
  ) => {
    const file: ProductFile | undefined =
      e instanceof DataTransfer ? e.files[0] : e.target.files?.[0];
    if (file) {
      file.preview = URL.createObjectURL(file);

      setImage(file);
      if (typeof cb === 'function') cb(file);
    }
  };

  const handleCancelImage = () => {
    setImage(undefined);
  };

  return [image, handleChangeImage, handleCancelImage];
}
