import { SortEnum } from '@/components/Sort/Sort.props';
import { ProductModel } from '@/inteafaces/product.interface';

export type SortAction = { type: SortEnum.Rating } | { type: SortEnum.Price };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const SortReducer = (state: SortReducerState, action: SortAction): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? 1 : -1)),
      };
    default:
      throw new Error('Неверный тип сортировки');
  }
};
