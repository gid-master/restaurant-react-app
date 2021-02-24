import { Reducer } from 'redux';
import { ProductState, INITIAL_STATE } from './state';
import { ProductActions, ProductActionsTypes } from './types';

const productReducer: Reducer<ProductState, ProductActions> = (
  state: ProductState = INITIAL_STATE, 
  action: ProductActions): ProductState => {
  switch (action.type) {
    case ProductActionsTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case ProductActionsTypes.SET_SORT:
      return { ...state, sortId: action.payload };

    case ProductActionsTypes.SET_FILTER:
      return { ...state, filterId: action.payload };

    case ProductActionsTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, initialized: true };

    case ProductActionsTypes.SET_PREFERRED_PRODUCT_SUCCESS:
      return { ...state, preferredProduct: action.payload };

    case ProductActionsTypes.SET_PRODUCT_ADDITIONAL_INCREMENT:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          additionals: [
            ...state.preferredProduct.additionals.map((data) => ({
              ...data,
              quantity: data.id === action.payload.id ? data.quantity + action.payload.increment : data.quantity,
            })),
          ],
        },
      };

    case ProductActionsTypes.SET_PRODUCT_COMMENTS:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          comments: action.payload,
        },
      };

    case ProductActionsTypes.SET_PRODUCT_QUANTITY:
      return {
        ...state,
        preferredProduct: {
          ...state.preferredProduct,
          quantity: state.preferredProduct.quantity + action.payload,
        },
      };
        
   
    default:
      return state;
  }
}

export default productReducer;