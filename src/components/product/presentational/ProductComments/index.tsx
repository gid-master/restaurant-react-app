import React from 'react';
import './styles.scss';

type ProductCommentsProps = {
  comments: string;
  changed: (value:string) => void
}

const ProductComments:React.FC<ProductCommentsProps> = (props:ProductCommentsProps) =>(
  <div className="product-comments">
    <textarea
      className="input"
      placeholder="Example: take onion off"
      rows={7}
      value={props.comments}
      onChange={(event) => props.changed(event.target.value)}
    />
  </div>
)

export default ProductComments;