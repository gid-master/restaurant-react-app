import { IProduct } from '@/interfaces/IProduct';

export interface ProductState {
  initialized: boolean;
  searchTerm: string;
  sortId: string;
  filterId: string;
  products: IProduct[];
  preferredProduct: IProduct;
}
  
export const INITIAL_STATE: ProductState = {
  initialized: false,
  searchTerm: null,
  sortId: 'relevant',
  filterId: null,
  products: [],
  preferredProduct: null,
};