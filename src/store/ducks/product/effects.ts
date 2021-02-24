
import { ThunkAction } from 'redux-thunk';
import { getAllProducts } from '@/services/ProductService';
import { IResponse } from '@/interfaces/IResponse';
import { IProduct } from '@/interfaces/IProduct';
import { ApplicationState } from '@/store';
import { ICart } from '@/interfaces/ICart';
import { ProductActions } from './types';
import { GetProductsSuccess, SetPreferredProductSuccess } from './actions';

type Effect = ThunkAction<void, ApplicationState, null, ProductActions>;

export const GetProducts = (): Effect => async dispatch => {
  const response: IResponse<IProduct[]> = await getAllProducts();
  dispatch(GetProductsSuccess(response.success ? response.data : null));
};


export const SetPreferredProduct = (productSku:string, cartId:string): Effect => async (dispatch, getState) => {
  if (cartId){
    const cart:ICart = getState().checkout.cart.find(data => data.id === cartId);
    dispatch(SetPreferredProductSuccess(cart.product ? cart.product : null));
  } else {
    const product:IProduct = getState().product.products.find(data => data.sku === productSku);
    dispatch(SetPreferredProductSuccess(product || null));
  } 
};


