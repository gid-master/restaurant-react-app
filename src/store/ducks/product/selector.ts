
import { ApplicationState } from '@/store';
import { IProduct } from '@/interfaces/IProduct';
import { createSelector } from 'reselect';

const getAllProducts = (state:ApplicationState) => state.product.products;

export const getInitialized = (state:ApplicationState) => state.product.initialized;

export const getSearchTerm = (state:ApplicationState) => state.product.searchTerm;
export const getFilterId = (state:ApplicationState) => state.product.filterId;
export const getSortId = (state:ApplicationState) => state.product.sortId;


export const getPromotions = (state:ApplicationState) => state.product.products.filter(data => data.previousPrice > 0);
export const getSuggestions = (state:ApplicationState) => state.product.products.filter(data => data.suggested);
export const getOffers = (state:ApplicationState) => state.product.products.filter(data => data.special);
export const getFromCategories = (state:ApplicationState) => state.product.preferredProduct ? state.product.products.filter(
  data => data.category === state.product.preferredProduct.category &&
  data.id !== state.product.preferredProduct.id,
) : [];

export const getPreferredProduct = (state:ApplicationState) => state.product.preferredProduct;


export const getProducs = createSelector(
  [getAllProducts, getSearchTerm, getFilterId, getSortId],
  (products:IProduct[], searchTerm:string, filterId:string, sortId:string) => products.filter((data: IProduct) => (
    // filter
    (!filterId || data.category === filterId) &&
    // search
    (!searchTerm || data.name.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1)
  ))
    .sort((a: IProduct, b: IProduct): number => {
      switch (sortId) {
        case 'alpha':
          return a.name > b.name ? 1 : -1;
        case 'price':
          return a.price - b.price;
        case 'calories':
          return a.calories - b.calories;
        case 'category':
          return a.category > b.category ? 1 : -1;
        case 'review':
          return (b.reviews.totalRating / b.reviews.totalReviews - a.reviews.totalRating / a.reviews.totalReviews);
        default:
          return 1;
      }
    }),
)

