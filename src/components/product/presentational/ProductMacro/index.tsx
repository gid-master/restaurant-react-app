import React from 'react';
import { IProduct } from '@/interfaces/IProduct';
import './styles.scss';


type ProductMacroProps = {
  product:IProduct;
}

const ProductMacro:React.FC<ProductMacroProps> = (props:ProductMacroProps) =>(
  <div className="product-macro">
    <div className="item">
      <img src={require('@/assets/icons/gold/calories.svg').default} alt="calories" />
      <span>{ props.product.calories } cal</span>
    </div>
    <div className="separator" />
    <div className="item">
      <img src={require('@/assets/icons/gold/weight.svg').default} alt="weight" />
      <span>{ props.product.portionSize } { props.product.unitType }</span>
    </div>
    <div className="separator" />
    <div className="item">
      <img src={require('@/assets/icons/gold/room_service.svg').default} alt="serve" />
      <span>servem { props.product.servingPeople }</span>
    </div>
  </div>
)

export default ProductMacro;