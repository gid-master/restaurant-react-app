import { ICart } from '@/interfaces/ICart';
import { ICheckoutResponse } from '@/interfaces/ICheckout';


export interface CheckoutState {
  cart: ICart[];
  checkout: ICheckoutResponse;
}
  
export const INITIAL_STATE: CheckoutState = {
  cart: [],
  checkout: null,
};