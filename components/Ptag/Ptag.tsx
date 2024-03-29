import styles from './Ptag.module.css';
import cn from 'classnames';
import { PtagProps } from './Ptag.props';

export const PTag = ({ children, fontSize = 'medium', className, ...props }: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: fontSize == 'small',
        [styles.medium]: fontSize == 'medium',
        [styles.large]: fontSize == 'large',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
