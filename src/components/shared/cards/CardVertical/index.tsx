import React from 'react';
import { IProduct } from '@/interfaces/IProduct';
import { formatCurrency, formatDynamicImage, formatImageFallback } from '@/utils/FormatUtil'
import './styles.scss';


type CardVerticalProps = {
  product: IProduct,
  clicked: (productSku: string) => void;
}


const CardVertical: React.FC<CardVerticalProps> = (props: CardVerticalProps) => (

  <div className="card-vertical">
    <img src={formatDynamicImage(props.product.image)} alt={props.product.name} onError={formatImageFallback} />
    <div className="details">
      <span className="title">{ props.product.name }</span>
      <p className="description">
        <small>
          { props.product.description }
        </small>
      </p>
      <div className="actions">
        <span className="price">
          { formatCurrency(props.product.price) }
          {props.product.previousPrice > 0 && <small className="discount">{ formatCurrency(props.product.previousPrice)}</small>}
        </span>
        <button
          className="button"
          type="button"
          onClick={() => props.clicked(props.product.sku)}
        >
          Order
        </button>
      </div>
    </div>
  </div>

)

export default CardVertical;