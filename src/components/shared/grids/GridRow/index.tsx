import React from 'react';
import classNames from 'classnames';
import { IProduct } from '@/interfaces/IProduct';
import './styles.scss';
import CardCover from '../../cards/CardCover';
import CardVertical from '../../cards/CardVertical';
import CardHorizontal from '../../cards/CardHorizontal';


type GridRowProps = {
  type: 'vertical' | 'horizontal' | 'cover',
  products: IProduct[]
  clicked: (productSku: string) => void;
}

const GridRow: React.FC<GridRowProps> = (props: GridRowProps) => (
  <div className="grid-row">
    {props.products.map((product:IProduct) => (
      <div
        key={product.id}
        className={classNames('item', {
          cover: props.type === 'cover',
          vertical: props.type === 'vertical',
          horizontal: props.type === 'horizontal',
        })}
      >
    
        { props.type === 'cover' && <CardCover
          product={product}
          clicked={(productSku:string) => props.clicked(productSku)}
        /> }

        { props.type === 'vertical' && <CardVertical
          product={product}
          clicked={(productSku:string) => props.clicked(productSku)}
        /> }

        { props.type === 'horizontal' && <CardHorizontal
          product={product}
          clicked={(productSku:string) => props.clicked(productSku)}
        /> }

      </div>
    ))}
  </div>
)

export default GridRow;