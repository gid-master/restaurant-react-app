import React from 'react';
import { IOrderSummary } from '@/interfaces/IOrder';
import { formatCurrency } from '@/utils/FormatUtil';
import './styles.scss';


type AccountOrderSummaryProps = {
  ordersSummary: IOrderSummary;
}

const AccountOrderSummary: React.FC<AccountOrderSummaryProps> = (props:AccountOrderSummaryProps) =>(
  <div className="account-summary">
    <div className="item">
      <span className="title">orders</span>
      <span className="result">{ props.ordersSummary.quantityOrders }</span>
    </div>
    <div className="separator" />
    <div className="item">
      <span className="title">amount</span>
      <span className="result">{formatCurrency(props.ordersSummary.totalProducts)}</span>
    </div>
    <div className="separator" />
    <div className="item">
      <span className="title">products</span>
      <span className="result">{ props.ordersSummary.quantityProducts }</span>
    </div>
  </div>
)

export default AccountOrderSummary;