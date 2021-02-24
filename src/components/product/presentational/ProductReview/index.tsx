import { IProductReview } from '@/interfaces/IProduct';
import React from 'react';
import './styles.scss';

type ProductReviewsProps = {
  reviews: IProductReview
}

const ProductReview:React.FC<ProductReviewsProps> = (props:ProductReviewsProps) =>{

  const star = (rating:number):number => {
    switch (rating) {
      case 1:
        return props.reviews.rating1;
      case 2:
        return props.reviews.rating2;
      case 3:
        return props.reviews.rating3;
      case 4:
        return props.reviews.rating4;
      case 5:
        return props.reviews.rating5;
      default:
        return 0;
    }
  }

  return (
    <div className="product-review">
      <div className="summary">
        <div className="stars">
          <img src={require('@/assets/icons/gold/star.svg').default} alt="reviews" />
          <span>{ (props.reviews.totalRating / props.reviews.totalReviews).toFixed(1) }</span>
        </div>
        <span>{ props.reviews.totalReviews } reviews</span>
      </div>
  
      <div className="overview">
        {
          [1, 2, 3, 4, 5].map((rating:number) => 
            <div className="vote" key={rating}>
              <span className="star">{ rating }</span>
              <div className="bar">
                <div
                  className="progress"
                  style={{ width:`${(star(rating) * 100) / props.reviews.totalReviews}%` }}
                />
              </div>
              <span className="quantity">{ star(rating) }</span>
            </div>,
          )
        }
        
      </div>
    </div>
  )
}

export default ProductReview;