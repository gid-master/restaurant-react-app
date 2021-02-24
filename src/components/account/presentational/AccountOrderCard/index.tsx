import React from 'react';
import { IOrderProduct, IOrderProductAdditional, IOrderReview } from '@/interfaces/IOrder';
import { formatCurrency, formatDynamicImage } from '@/utils/FormatUtil';
import './styles.scss';


type AccountOrderCardProps = {
  orderId: string;
  product: IOrderProduct;
  clicked: (review: IOrderReview) => void;
}

const AccountOrderCard: React.FC<AccountOrderCardProps> = (props:AccountOrderCardProps) => {

  const fillStar = (star: number): string => props.product.review >= star ? 'star_full' : 'star';

  return (
    <div className="account-accordion-card">
      <div className="item">
        <img className="image" src={formatDynamicImage(props.product.image)} alt={props.product.name} />
        <div className="details">
          <span className="name">{ `${props.product.quantity  }x ${  props.product.name}` }</span>
          <span className="price">{ formatCurrency(props.product.total) }</span>
          <div className="review">
            {
              [1, 2, 3, 4, 5].map((rating:number) => 
                <img
                  key={rating} 
                  onClick={() => props.product.review === 0 && props.clicked({
                    orderId: props.orderId, productId: props.product.productId, itemId: props.product.itemId, review: rating,
                  })}
                  src={require(`@/assets/icons/gold/${fillStar(rating)}.svg`).default}
                  alt="star"
                />,
              )
            }
          </div>
        </div>
      </div>
      
      {
        props.product.additionals.length > 0 &&
        <div className="additionals">
          <ul>
            {
              props.product.additionals.map((additional: IOrderProductAdditional) => 
                <li key={additional.id}>
                  { `${additional.quantity * props.product.quantity}x ${additional.name}` }
                </li>,
              )
            }
          </ul>
        </div>
      }
      
    </div>
  )
}

export default AccountOrderCard;
