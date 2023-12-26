import { ProductProps } from './Product.props';
import styles from './Ptag.module.css';
import cn from 'classnames';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
  return <div>{product.title}</div>;
};
