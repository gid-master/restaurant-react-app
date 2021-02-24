
import { ThunkAction } from 'redux-thunk';
import { IResponse } from '@/interfaces/IResponse';
import { IOrder, IOrderReview } from '@/interfaces/IOrder';
import { getOrders, reviewOrder } from '@/services/AccountService';
import { GetOrdersSuccess, SetReviewSuccess } from './actions';
import { AccountState } from './state';
import { AccountActions } from './types';

type Effect = ThunkAction<void, AccountState, null, AccountActions>;

export const GetOrders = (): Effect => async dispatch => {
  const response: IResponse<IOrder[]> = await getOrders();
  dispatch(GetOrdersSuccess(response.success ? response.data : null));
};

export const SetReview = (data: IOrderReview): Effect => async dispatch => {
  const response: IResponse<IOrderReview> = await reviewOrder(data);
  if (response.success){
    dispatch(SetReviewSuccess(response.data));  
  }
};


