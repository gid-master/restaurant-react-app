import ButtonIncrement from '@/components/shared/buttons/ButtonIncrement';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import { formatCurrency } from '@/utils/FormatUtil';
import React from 'react';
import './styles.scss';

type ProductAddToCartProps = {
  quantity: number;
  total: number;
  incrementClicked: (increment:number) => void;
  addClicked: () => void
}

const ProductAddToCart:React.FC<ProductAddToCartProps> = (props:ProductAddToCartProps) =>(
  <div className="product-add-to-cart">
    <div className="increment">
      <ButtonIncrement
        large={true}
        disabledMin={props.quantity === 1}
        disabledMax={false}
        quantity={props.quantity}
        clicked={props.incrementClicked}
      />
    </div>

    <div className="add">
      <ButtonStandard
        icon="add"
        name="add to cart"
        detail={formatCurrency(props.total)}
        center={false}
        small={true}
        clicked={props.addClicked}
      />
    </div>
  </div>
)

export default ProductAddToCart;