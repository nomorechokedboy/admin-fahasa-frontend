import { FaStar } from 'react-icons/fa';
import styles from './styles.module.scss';
interface starProps {
  voted: 0 | number;
  total: 5 | number;
  size: 15 | number;
}

export default function Star({ voted, total, size }: starProps) {
  const totalStar = new Array<number>(total).fill(0);

  return (
    <div className={styles.container}>
      {totalStar.map((_, index) =>
        index < voted ? (
          <FaStar key={index} color="orange" size={size} />
        ) : (
          <FaStar key={index} color="gray" size={size} />
        ),
      )}
    </div>
  );
}
