import { ICartSummary } from '@/interfaces/ICart';
import { formatCurrency } from '@/utils/FormatUtil';
import React from 'react';
import './styles.scss';


type CheckoutPaymentMethodProps = {
  cartSummary: ICartSummary
}

const CheckoutPaymentMethod: React.FC<CheckoutPaymentMethodProps> = (props:CheckoutPaymentMethodProps) =>(
  <div className="checkout-total">
    <div className="item">
      <span className="title">Main meals ({ props.cartSummary.quantityProducts })</span>
      <span className="price">{ formatCurrency(props.cartSummary.totalProducts) }</span>
    </div>
    <div className="item">
      <span className="title">Additional items ({ props.cartSummary.quantityAdditionals })</span>
      <span className="price">{ formatCurrency(props.cartSummary.totalAdditionals) }</span>
    </div>
    <hr />
    <div className="item highlight">
      <span className="title">TOTAL</span>
      <span className="price">{ formatCurrency(props.cartSummary.total) }</span>
    </div>
  </div>
)

export default CheckoutPaymentMethod;


