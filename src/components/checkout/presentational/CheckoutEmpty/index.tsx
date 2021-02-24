import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import React from 'react';
import './styles.scss';


type CheckoutEmptyProps = {
  clicked:() => void;
}

const CheckoutEmpty: React.FC<CheckoutEmptyProps> = (props:CheckoutEmptyProps) =>(
  <div className="checkout-empty">
    <div className="image">
      <img src={require('@/assets/icons/primary/cart.svg').default} alt="empty" />
    </div>
    <h2>Your cart is still empty</h2>
    <p>pick something from our menu</p>
    <ButtonStandard
      icon="menu"
      name="check out our menu"
      center={true}
      clicked={props.clicked}
    />
  </div>
)

export default CheckoutEmpty;


