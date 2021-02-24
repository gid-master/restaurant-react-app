import React from 'react';
import './styles.scss';

type ProductIngredientsProps = {
  ingredients: string[]
}

const ProductIngredients:React.FC<ProductIngredientsProps> = (props:ProductIngredientsProps) =>(
  <div className="product-ingredients">
    <ul>
      {props.ingredients.map((ingredient:string) => 
        <li key={ingredient}><span>{ ingredient }</span></li>,
      )}
    </ul>
  </div>
)

export default ProductIngredients;