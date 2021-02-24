import React from 'react';
import { IProduct } from '@/interfaces/IProduct';
import { formatCurrency, formatDynamicImage, formatImageFallback } from '@/utils/FormatUtil'
import './styles.scss';


type CardDetailsProps = {
  product: IProduct,
  clicked: (productSku: string) => void;
}


const CardDetails: React.FC<CardDetailsProps> = (props: CardDetailsProps) => {

  const averageReview: string = (props.product.reviews.totalRating / props.product.reviews.totalReviews).toFixed(1);

  return (
    <div className="card-details" onClick={() => props.clicked(props.product.sku)}>
      <div className="macro">
        <img className="image" src={formatDynamicImage(props.product.image)} alt={props.product.name} onError={formatImageFallback} />
        <div className="details">
          <span className="name">{ props.product.name }</span>
          <div className="row1">
            <span className="price">
              <small>{ formatCurrency(props.product.price) }</small>
              {props.product.previousPrice > 0 && <small className="discount">{ formatCurrency(props.product.previousPrice) }</small>}
            </span>
            <span className="calories">
              <small>{ props.product.calories }cal</small>
            </span>
          </div>
          <div className="row2">
            <div className="category">
              <img src={require(`@/assets/categories/${props.product.category}.svg`).default} alt={props.product.category} />
              <span>
                <small>{ props.product.category }</small>
              </span>
            </div>
  
            <div className="review">
              <img src={require('@/assets/icons/gold/star.svg').default} alt="review" />
              <span>
                <small>
                  { `${averageReview} (${props.product.reviews.totalReviews})` }
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="description">
        <small> { props.product.description } </small>
      </p>
    </div>
  )
}

export default CardDetails;