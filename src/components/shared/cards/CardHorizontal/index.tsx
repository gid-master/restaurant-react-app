import React from 'react';
import { IProduct } from '@/interfaces/IProduct';
import { formatCurrency, formatDynamicImage, formatImageFallback } from '@/utils/FormatUtil'
import './styles.scss';


type CardHorizontalProps = {
  product: IProduct,
  clicked: (productSku: string) => void;
}


const CardHorizontal: React.FC<CardHorizontalProps> = (props: CardHorizontalProps) => (

  <div className="card-horizontal">
    <img src={formatDynamicImage(props.product.image)} alt={props.product.name} onError={formatImageFallback} />
    <div className="details">
      <span className="title">{ props.product.name }</span>
      <p className="description">
        <small>
          { props.product.description }
        </small>
      </p>
      <div className="actions">
        <span className="price">{ formatCurrency(props.product.price) } </span>
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

export default CardHorizontal;