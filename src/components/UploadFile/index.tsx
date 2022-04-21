import { postImage } from '@/api';
import useDragFile from '@/hooks/useDragFile';
import ProductFile from '@/types/customs/file';
import Product from '@/types/product';
import { formatImage, UploadImageFactory } from '@/utils';
import { generateUploadMessage } from '@/utils/messages';
import { ActionIcon, Button, Tooltip } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import clx from 'classnames';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { AiFillCamera, AiOutlineCloudUpload } from 'react-icons/ai';
import Text from '../Text';
import styles from './styles.module.scss';

interface UploadFileProps {
  handleChangeImage: (e: ChangeEvent<HTMLInputElement> | DataTransfer) => void;
  form: UseFormReturnType<Partial<Product>>;
  productImage: ProductFile | undefined;
  handleCancelImage: () => void;
}

export default function UploadFile({
  form,
  handleCancelImage,
  handleChangeImage,
  productImage,
}: UploadFileProps) {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadTooltip, setUploadTooltip] = useState<string>();
  const [disableUpload, setDisableUpload] = useState(true);
  const [disablePreview, setDisablePreview] = useState(true);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const dropZone = useDragFile(handleChangeImage);

  const handleBrowseFile = () => {
    inputFileRef.current?.click();
  };

  const handleUpload = async () => {
    setUploadLoading(true);
    const { name } = form.values;
    const data =
      productImage && name ? UploadImageFactory(productImage, name) : undefined;

    if (data)
      postImage(data)
        .then((data) => {
          form.setFieldValue('image', formatImage(data.secure_url));
        })
        .catch((e) => {
          if (e.response) {
            console.log(e.response.data.error.message);
          } else {
            console.log('Error', e.message);
          }
        })
        .finally(() => {
          setUploadLoading(false);
          setUploadTooltip('Click to upload');
          setDisableUpload(true);
          setDisablePreview(false);
        });
  };

  useEffect(() => {
    const { name } = form.values;
    if (!productImage) {
      setDisableUpload(false);
      setDisablePreview(true);
    }

    let message = generateUploadMessage(name, productImage);

    setDisableUpload(!productImage || !form.values.name);
    setUploadTooltip(message);
  }, [form.values.name, productImage]);

  return (
    <div>
      <div
        className={clx(styles.previewImage, {
          [styles.active]: productImage?.preview,
        })}
        ref={dropZone}
      >
        {productImage?.preview ? (
          <>
            <img src={productImage.preview} alt="Preview image" />
            {disablePreview && (
              <div className={styles.buttonWrapper}>
                <Button color="red" onClick={handleCancelImage}>
                  Cancel
                </Button>
                <Button
                  className={styles.changeButton}
                  onClick={handleBrowseFile}
                >
                  Change
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.upload}>
            <ActionIcon
              size="xl"
              radius="xl"
              variant="filled"
              className={styles.browseButton}
              onClick={handleBrowseFile}
            >
              <AiFillCamera size={28} />
            </ActionIcon>
            <Text>or</Text>
            <Text>Drag and drop image here</Text>
          </div>
        )}
      </div>
      <div className={styles.fileWrapper}>
        <input
          accept="image/*"
          id="uploadFile"
          type="file"
          ref={inputFileRef}
          hidden
          onChange={handleChangeImage}
        />
        <Tooltip label={uploadTooltip}>
          <Button
            color="green"
            className={styles.uploadButton}
            disabled={disableUpload}
            leftIcon={<AiOutlineCloudUpload size={18} />}
            loading={uploadLoading}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
