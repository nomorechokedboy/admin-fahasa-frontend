import { Image } from '@mantine/core';
import styles from './styles.module.scss';

export default function ErrorIcon() {
  return (
    <Image
      alt="CTA image"
      className={styles.image}
      src="http://www.cyrilfougeray.com/img/posts/panic_rust/panics.svg"
      withPlaceholder
    />
  );
}
