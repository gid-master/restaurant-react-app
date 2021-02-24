import { ICart } from '@/interfaces/ICart';
import { ICheckoutResponse } from '@/interfaces/ICheckout';
import { CheckoutActions, CheckoutActionsTypes } from './types';

export const LoadCartSuccess = (cart: ICart[]): CheckoutActions => ({  
  type: CheckoutActionsTypes.LOAD_CART_SUCCESS,
  payload: cart, 
}); 

export const SetCartSuccess = (cart: ICart): CheckoutActions => ({  
  type: CheckoutActionsTypes.SET_CART_SUCCESS,
  payload: cart, 
}); 

export const DeleteCartSuccess = (cartId: string): CheckoutActions => ({  
  type: CheckoutActionsTypes.DELETE_CART_SUCCESS,
  payload: cartId, 
});

export const RemoveCartSuccess = (): CheckoutActions => ({  
  type: CheckoutActionsTypes.REMOVE_CART_SUCCESS,
});

export const CheckoutSuccess = (checkout: ICheckoutResponse): CheckoutActions => ({  
  type: CheckoutActionsTypes.CHECKOUT_SUCCESS,
  payload: checkout, 
});






