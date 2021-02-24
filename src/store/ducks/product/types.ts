import { IProduct, IProductAdditionalIncrement } from '@/interfaces/IProduct';
import { Action } from 'redux';

export enum ProductActionsTypes {
  SET_SEARCH_TERM = '@product/SET_SEARCH_TERM',
  SET_SORT = '@product/SET_SORT',
  SET_FILTER = '@product/SET_FILTER',
  GET_PRODUCTS_SUCCESS = '@product/GET_PRODUCTS_SUCCESS',
  SET_PREFERRED_PRODUCT_SUCCESS = '@product/SET_PREFERRED_PRODUCT_SUCCESS',
  SET_PRODUCT_ADDITIONAL_INCREMENT = '@product/SET_PRODUCT_ADDITIONAL_INCREMENT',
  SET_PRODUCT_COMMENTS = '@product/SET_PRODUCT_COMMENTS',
  SET_PRODUCT_QUANTITY = '@product/SET_PRODUCT_QUANTITY',
}

interface SetSearchTermAction extends Action {
  type: ProductActionsTypes.SET_SEARCH_TERM;
  payload: string;
}

interface SetSortAction extends Action {
  type: ProductActionsTypes.SET_SORT;
  payload: string;
}

interface SetFilterAction extends Action {
  type: ProductActionsTypes.SET_FILTER;
  payload: string;
}

interface GetProductsSuccessAction extends Action {
  type: ProductActionsTypes.GET_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

interface SetPreferredProductSuccessAction extends Action {
  type: ProductActionsTypes.SET_PREFERRED_PRODUCT_SUCCESS;
  payload: IProduct;
}

interface SetProductAdditionalIncrementAction extends Action {
  type: ProductActionsTypes.SET_PRODUCT_ADDITIONAL_INCREMENT;
  payload: IProductAdditionalIncrement;
}

interface SetProductCommentsAction extends Action {
  type: ProductActionsTypes.SET_PRODUCT_COMMENTS;
  payload: string;
}

interface SetProductQuantityAction extends Action {
  type: ProductActionsTypes.SET_PRODUCT_QUANTITY;
  payload: number;
}


export type ProductActions =
  | SetSearchTermAction
  | SetSortAction
  | SetFilterAction
  | GetProductsSuccessAction
  | SetPreferredProductSuccessAction
  | SetProductAdditionalIncrementAction
  | SetProductCommentsAction
  | SetProductQuantityAction;
