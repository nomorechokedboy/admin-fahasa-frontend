import ProductFile from '@/types/customs/file';
import { ReturnArrayState } from '@/types/customs/hook';
import { useEffect, useState } from 'react';

export default function usePreviewImage(): ReturnArrayState<ProductFile> {
  const [image, setImage] = useState<ProductFile>();

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image.preview as string);
    };
  }, [image]);

  return [image, setImage];
}
