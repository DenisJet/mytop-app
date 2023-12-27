import { ProductReview } from '@/inteafaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ProductReview;
}
