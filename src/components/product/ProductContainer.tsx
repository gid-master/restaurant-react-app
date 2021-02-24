import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFromCategories, getPreferredProduct } from '@/store/ducks/product/selector';
import { IProduct, IProductAdditional } from '@/interfaces/IProduct';
import { SetProductComments, SetProductAdditionalIncrement, SetProductQuantity } from '@/store/ducks/product/actions';
import { SetPreferredProduct } from '@/store/ducks/product/effects';

import Container from '@/components/shared/layouts/Container';
import Wrapper from '@/components/shared/layouts/Wrapper';
import Block from '@/components/shared/layouts/Block';
import GridRow from '@/components/shared/grids/GridRow';

import { formatCapitalize } from '@/utils/FormatUtil';
import { getUid } from '@/utils/RandomUtil';
import { SetCart } from '@/store/ducks/checkout/effects';
import { useQuery } from '@/utils/RouterUtil';

import ProductHeader from './presentational/ProductHeader';
import ProductMacro from './presentational/ProductMacro';
import ProductIngredients from './presentational/ProductIngredients/index';
import ProductAdditional from './presentational/ProductAdditional';
import ProductComments from './presentational/ProductComments';
import ProductReview from './presentational/ProductReview/index';
import ProductAddToCart from './presentational/ProductAddToCart';


const ProductContainer:React.FC = () =>{

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const product:IProduct = useSelector(getPreferredProduct);
  const productsFromCategories:IProduct[] = useSelector(getFromCategories);
  const { id } = useParams();
  const cartId:string = useQuery().get('edit')

  const total = ():number => {
    const additionals: number = product.additionals.reduce(
      (value: number, additional: IProductAdditional) =>
        value + additional.quantity * additional.price,
      0,
    );
    return (additionals + product.price) * product.quantity;
  };
  
  const onBackClicked = () => {
    window.history.back();
  }

  const onIncrementClicked = (additionalId: string, increment: number) => {
    dispatch(SetProductAdditionalIncrement({ id:additionalId, increment }));
  };

  const onCommentsChanged = (comments: string) => {
    dispatch(SetProductComments(comments));
  };

  const onProductClicked = (productSku:string) => {
    navigation(`/product/${  productSku}`)
  }

  const onProductIncrementClicked = (increment: number) => {
    dispatch(SetProductQuantity(increment));
  };

  const onAddClicked = () => {
    dispatch(SetCart({ id: cartId || getUid(), product }));
    navigation('/checkout');
  };
  
  useEffect(() => {
    dispatch(SetPreferredProduct(id, cartId));
  }, [id, cartId]) 

  return (
    <div>
      { product && 
      <Wrapper>
        <Container>
          <ProductHeader product={product} clicked={onBackClicked} />
        </Container>
        <Container>
          <Block>
            <ProductMacro product={product}  />
          </Block>
        </Container>
        <Container>
          <Block title="Ingredients">
            <ProductIngredients ingredients={product.ingredients}  />
          </Block>
        </Container>
        <Container>
          <Block title="Additional" link={`max ${product.maxAdditionals} items`}>
            <ProductAdditional maxAdditionals={product.maxAdditionals} additionals={product.additionals} clicked={onIncrementClicked}  />
          </Block>
        </Container>
        <Container>
          <Block title="Would you like to change ?" subtitle="let our chefs to know">
            <ProductComments comments={product.comments} changed={onCommentsChanged}  />
          </Block>
        </Container>
        <Container>
          <Block title="Clients Reviews">
            <ProductReview reviews={product.reviews}  />
          </Block>
        </Container>
        <Container title={`Other ${formatCapitalize(product.category)}`}>
          <GridRow
            type="vertical"
            products={productsFromCategories}
            clicked={onProductClicked}
          />
        </Container>

        <ProductAddToCart
          total={total()}
          quantity={product.quantity}
          incrementClicked={onProductIncrementClicked}
          addClicked={onAddClicked}
        />
      </Wrapper> }
    </div>
  )

}

export default ProductContainer;