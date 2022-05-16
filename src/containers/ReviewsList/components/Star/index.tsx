import { FaStar } from 'react-icons/fa';
import styles from './styles.module.scss';
interface starProps {
  voted: 0 | number;
  total: 5 | number;
}

export default function Star({ voted, total }: starProps) {
  const totalStar = new Array<number>(total).fill(0);

  return (
    <div className={styles.container}>
      {totalStar.map((_, index) =>
        index < voted ? (
          <FaStar color="orange" size={20} />
        ) : (
          <FaStar color="gray" size={20} />
        ),
      )}
    </div>
  );
}
