import React from 'react';
import classNames from 'classnames';
import { IOrder, IOrderProduct, IOrderReview } from '@/interfaces/IOrder';
import { formatCurrency } from '@/utils/FormatUtil';
import AccountOrderCard from '../AccountOrderCard';
import './styles.scss';




type AccountOrderAccordionProps = {
  collapse: string;
  orders: IOrder[];
  orderClicked:(orderId:string) => void;
  reviewClicked:(review: IOrderReview) => void;
}

const AccountOrderAccordion: React.FC<AccountOrderAccordionProps> = (props:AccountOrderAccordionProps) =>(
  <div className="account-accordion">
    <ul className="accordion-list">
      {
        props.orders.map((order:IOrder) => 
          <li key={order.id} className={classNames('accordion-list-item', { show: props.collapse === order.id })}>
            <div className="order-header" onClick={() => props.orderClicked(props.collapse !== order.id ? order.id : null)}>
              <div className="image">
                <img className="add" src={require('@/assets/icons/light/add.svg').default} alt="open" />
                <img className="remove" src={require('@/assets/icons/light/remove.svg').default} alt="collapse" />
              </div>
              <span className="title">Order { new Date(order.date).toLocaleDateString() }</span>
              <span className="total">{ formatCurrency(order.total) }</span>
            </div>
  
            <div className="content">
              {
                order.products.map((product:IOrderProduct, index:number) => 
                  <div className="item" key={`${product.productId}-${order.id}`}>
                    <AccountOrderCard
                      orderId={order.id}
                      product={product}
                      clicked={props.reviewClicked}
                    />
                    { index < order.products.length - 1 && <hr /> }
                  </div>,
                )
              }
            </div>
          </li>,
        )
      }
    </ul>
    {
      props.orders.length === 0 && <span className="empty">you haven't purchased yet.</span>
    }
    
  </div>
)

export default AccountOrderAccordion;


