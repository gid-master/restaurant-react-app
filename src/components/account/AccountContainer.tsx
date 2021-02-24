import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '@/components/shared/layouts/Wrapper';
import Container from '@/components/shared/layouts/Container';
import Block from '@/components/shared/layouts/Block';
import { getOrders, getOrdersSummary } from '@/store/ducks/account/selector';
import { getUser } from '@/store/ducks/user/selector';
import { IUser } from '@/interfaces/IUser';
import { IOrder, IOrderReview, IOrderSummary } from '@/interfaces/IOrder';
import { GetOrders, SetReview } from '@/store/ducks/account/effects';
import { Logout } from '@/store/ducks/user/effects';
import { useNavigate } from 'react-router';
import AccountBio from './presentational/AccountBio';
import AccountOrderSummary from './presentational/AccountOrderSummary';
import AccountOrderAccordion from './presentational/AccountOrderAccordion';



const AccountContainer: React.FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  
  const user: IUser = useSelector(getUser);
  const orders: IOrder[] = useSelector(getOrders);
  const ordersSummary: IOrderSummary = useSelector(getOrdersSummary);
  const [collapse, setCollapse] = useState(null);


  useEffect(() => {
    dispatch(GetOrders());
  }, [])

  const onLogoutClicked = () => {
    dispatch(Logout());
    navigation('/login');
  }
      
  const onOrderClicked = (orderId:string) =>{
    setCollapse(orderId);
  }

  const onReviewClicked = (review: IOrderReview) => {
    dispatch(SetReview(review))
  }

  return (
    <Wrapper>
      <Container>
        <Block>
          <AccountBio user={user} clicked={onLogoutClicked} />
        </Block>
      </Container>

      <Container>
        <Block>
          <AccountOrderSummary ordersSummary={ordersSummary} />
        </Block>
      </Container>

      <Container>
        <Block title="Completed Orders">
          <AccountOrderAccordion collapse={collapse} orders={orders} orderClicked={onOrderClicked} reviewClicked={onReviewClicked} />
        </Block>
      </Container>

           
    </Wrapper>
  )
}

export default AccountContainer;