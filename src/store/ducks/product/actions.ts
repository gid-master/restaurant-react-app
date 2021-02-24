import { IProduct, IProductAdditionalIncrement } from '@/interfaces/IProduct';
import { ProductActions, ProductActionsTypes } from './types';


export const SetSearchTerm = (searchTerm: string): ProductActions => ({  
  type: ProductActionsTypes.SET_SEARCH_TERM,  
  payload: searchTerm, 
}); 

export const SetSort = (sortId: string): ProductActions => ({  
  type: ProductActionsTypes.SET_SORT,  
  payload: sortId, 
}); 
 
export const SetFilter = (filterId: string): ProductActions => ({  
  type: ProductActionsTypes.SET_FILTER,  
  payload: filterId, 
}); 

export const GetProductsSuccess = (products: IProduct[]): ProductActions => ({  
  type: ProductActionsTypes.GET_PRODUCTS_SUCCESS,  
  payload: products, 
}); 

export const SetPreferredProductSuccess = (product: IProduct): ProductActions => ({  
  type: ProductActionsTypes.SET_PREFERRED_PRODUCT_SUCCESS,
  payload: product, 
});

export const SetProductAdditionalIncrement = (data:IProductAdditionalIncrement): ProductActions => ({  
  type: ProductActionsTypes.SET_PRODUCT_ADDITIONAL_INCREMENT,  
  payload: data, 
});

export const SetProductComments = (comments:string): ProductActions => ({  
  type: ProductActionsTypes.SET_PRODUCT_COMMENTS,  
  payload: comments, 
});

export const SetProductQuantity = (quantity:number): ProductActions => ({  
  type: ProductActionsTypes.SET_PRODUCT_QUANTITY,  
  payload: quantity, 
});


