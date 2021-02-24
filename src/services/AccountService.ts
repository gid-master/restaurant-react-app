import axios from 'axios';
import { IResponse } from '@/interfaces/IResponse';
import { IOrder, IOrderReview } from '@/interfaces/IOrder';

export const getOrders = async (): Promise<IResponse<IOrder[]>> => axios.get('order');

export const reviewOrder = async (
  review: IOrderReview,
): Promise<IResponse<IOrderReview>> => axios.post('order/review', review);
