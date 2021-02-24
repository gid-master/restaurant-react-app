import React from 'react';
import { IProduct } from '@/interfaces/IProduct';
import CardDetails from '../../cards/CardDetails';
import './styles.scss';



type GridListProps = {
  products: IProduct[]
  clicked: (productSku: string) => void;
}


const GridList: React.FC<GridListProps> = (props: GridListProps) => (
  <div className="grid-list">
    {props.products.map((product:IProduct, index:number) => (
      <div key={product.id}>
        <CardDetails product={product} clicked={(productSku:string) => props.clicked(productSku)} />
        {index < props.products.length - 1 && <hr />}
      </div>
    ))}
  </div>
)

export default GridList;