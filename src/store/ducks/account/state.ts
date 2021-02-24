import { IOrder } from '@/interfaces/IOrder';

export interface AccountState {
  orders: IOrder[]
}
  
export const INITIAL_STATE: AccountState = {
  orders: [],
};