import clx from 'classnames';
import styles from './styles.module.scss';

interface TitleProps {
  size?: 'lg' | 'sm';
  fontMedium?: boolean;
  children: string;
}

const Title = ({ children, fontMedium, size }: TitleProps) => {
  return (
    <div
      className={clx(styles.title, {
        [styles.lg]: size === 'lg',
        [styles.sm]: size === 'sm',
        [styles.fontMedium]: fontMedium,
      })}
    >
      {children}
    </div>
  );
};

export default Title;
