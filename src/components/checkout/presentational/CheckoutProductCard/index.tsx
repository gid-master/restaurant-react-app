import React from 'react';
import { IProduct, IProductAdditional } from '@/interfaces/IProduct';
import './styles.scss';
import ButtonCircle from '@/components/shared/buttons/ButtonCircle';
import { formatCurrency, formatDynamicImage } from '@/utils/FormatUtil';


type CheckoutProductCardProps = {
  product: IProduct;
  clicked:() => void;
}

const CheckoutProducts: React.FC<CheckoutProductCardProps> = (props:CheckoutProductCardProps) => {

  const total = ():number => {
    const additionals: number = props.product.additionals.reduce(
      (value: number, additional: IProductAdditional) =>
        value + additional.quantity * additional.price,
      0,
    );
    
    return (additionals + props.product.price) * props.product.quantity;
  };

  return (
    <div className="checkout-card">
      <div className="settings">
        <ButtonCircle
          icon="more"
          small={true}
          light={true}
          clicked={props.clicked}
        />
      </div>
      <div className="item">
        <img
          className="image"
          src={formatDynamicImage(props.product.image)}
          alt={props.product.name}
        />
        <div className="details">
          <span className="name">{ `${props.product.quantity  }x ${  props.product.name}` }</span>
          <span className="price">{ formatCurrency(total()) }</span>
          <div className="category">
            <img src={require(`@/assets/categories/${props.product.category}.svg`).default} alt={props.product.category} />
            <span>{ props.product.category }</span>
          </div>
        </div>
      </div>
      {
              props.product.additionals.length > 0 &&
              <div className="additionals">
                <ul>
                  {props.product.additionals.map((additional:IProductAdditional) => 
                    <li key={additional.id}>
                      { `${additional.quantity * props.product.quantity}x ${additional.name}` }
                    </li>,    
                  )}
                </ul>
              </div>
          }
          
    </div>
  )
}

export default CheckoutProducts;


