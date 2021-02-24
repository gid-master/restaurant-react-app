import React from 'react';
import ButtonCircle from '@/components/shared/buttons/ButtonCircle';
import { IProduct } from '@/interfaces/IProduct';
import { formatCurrency, formatDynamicImage } from '@/utils/FormatUtil';
import './styles.scss';


type ProductHeaderProps = {
  product: IProduct
  clicked: () => void;
}

const ProductHeader:React.FC<ProductHeaderProps> = (props:ProductHeaderProps) =>(
  <div className="product-header">
    <div className="image-cover">
      <div className="back">
        <ButtonCircle
          icon="arrow_back"
          light={true}
          clicked={props.clicked}
        />
      </div>
      <img src={formatDynamicImage(props.product.image)} alt={props.product.name} />
    </div>
    <div className="details">
      <h2>{ props.product.name }</h2>
      <p>{ props.product.description }</p>

      <div className="row">
        <span className="price">
          { formatCurrency(props.product.price) }
          {props.product.previousPrice > 0 && <small className="discount">{formatCurrency(props.product.previousPrice)}</small>}
        </span>
        <div className="category">
          <img src={require(`@/assets/categories/${props.product.category}.svg`).default} alt={props.product.category} />
          <span>{ props.product.category }</span>
        </div>
      </div>
    </div>
  </div>
)

export default ProductHeader;