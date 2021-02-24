import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCart, getCartSummary, getCheckout } from '@/store/ducks/checkout/selector';
import { ShowModal, ShowSnackbar } from '@/store/ducks/settings/actions';
import Wrapper from '@/components/shared/layouts/Wrapper';
import Container from '@/components/shared/layouts/Container';
import Block from '@/components/shared/layouts/Block';
import ModalBottomSheet from '@/components/shared/buttons/modals/ModalBottomSheet';
import { ICart, ICartSummary } from '@/interfaces/ICart';
import ButtonStandard from '@/components/shared/buttons/ButtonStandard';
import { IUser } from '@/interfaces/IUser';
import { getUser } from '@/store/ducks/user/selector';
import { Checkout, DeleteCart } from '@/store/ducks/checkout/effects';
import { PaymentMethodEnum, ICheckoutResponse } from '@/interfaces/ICheckout';
import ModalSuccess from '@/components/shared/buttons/modals/ModalSuccess';
import CheckoutProducts from './presentational/CheckoutProducts';
import CheckoutAction from './presentational/CheckoutAction';
import CheckoutPaymentMethod, { RefPaymentMethod } from './presentational/CheckoutPaymentMethod';
import CheckoutTotal from './presentational/CheckoutTotal';
import CheckoutEmpty from './presentational/CheckoutEmpty';


const CheckoutContainer: React.FC = () => {
  
  const refPaymentMethod = useRef<RefPaymentMethod>(null);
  
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const cart: ICart[] = useSelector(getCart);
  const cartSummary: ICartSummary = useSelector(getCartSummary);
  const user: IUser = useSelector(getUser);
  const checkout: ICheckoutResponse = useSelector(getCheckout);
  
  const [preferredCart, setPreferredCart] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethodEnum.CREDIT_CARD);


  useEffect(() => {

    if (!checkout){
      return;
    }
    
    if (checkout.success) {
      setProcessed(true);
    } else {
      setProcessing(false);
      dispatch(ShowModal({ show: false }));
      dispatch(ShowSnackbar(checkout.message));
    }
  }, [checkout]);
  
  const onKeepOrderingClicked = () => {
    navigation('/menu');
  }

  const onCartClicked = (cartId:string) => {
    setPreferredCart(cart.find(data => data.id === cartId));
    dispatch(ShowModal({ show: true, id: 'actions' }));
  }

  const onEditCartClicked = (cartId: string, productSku: string) => {
    console.log(cartId, productSku);
    navigation(`/product/${productSku}?edit=${cartId}`);
    dispatch(ShowModal({ show: false }));
  };

  const onDeleteCartClicked = (cartId: string) => {
    dispatch(DeleteCart(cartId));
    dispatch(ShowModal({ show: false }));
  };

  const onPaymentMethodSelected = (method: PaymentMethodEnum) => {
    setPaymentMethod(method);
    refPaymentMethod.current.reset();
  };

  const onPaymentClicked = async () => {

    await refPaymentMethod.current.submit();

    if (!refPaymentMethod.current.isValid()){
      dispatch(ShowSnackbar('Payment details are compulsory'));
      return;
    }
    
    setProcessed(false);
    setProcessing(true);

    dispatch(ShowModal({ show: true, id: 'payment', disableClick: true }));
    
    dispatch(Checkout({
      products: cart.map(data => data.product),
      paymentMethod,
      giftCard: refPaymentMethod.current.getGiftCard(),
      creditCard: refPaymentMethod.current.getCreditCard(),
    }));
  }

  const onLoginClicked = () => {
    navigation('/login');
  }

  const onOrderProcessed = () => {
    dispatch(ShowModal({ show: false }));
    navigation('/menu');
  }

  const onGoBackClicked = () => {
    navigation('/menu');
  }
  
  return (
    <div>
      {
      cart.length === 0 &&
      <Wrapper>
        <Container>
          <CheckoutEmpty clicked={onGoBackClicked} />
        </Container>
      </Wrapper>
    }
    
      {
      cart.length > 0 &&
      <Wrapper>
        <Container>
          <Block title="Your Products" link="keep ordering" clicked={onKeepOrderingClicked}>
            <CheckoutProducts cart={cart} clicked={onCartClicked} />
          </Block>
        </Container>

        <Container>
          <Block title="Payment Details">
            <CheckoutPaymentMethod
              ref={refPaymentMethod} 
              disabled={processing}
              paymentMethod={paymentMethod}
              clicked={onPaymentMethodSelected}
            />
          </Block>
        </Container>

        <Container>
          <Block title="Your Summary" subtitle="double check each item before">
            <CheckoutTotal cartSummary={cartSummary} />
          </Block>
        </Container>

        <Container>
          {
          user &&
          <ButtonStandard
            icon="cart"
            name="Complete the Payment"
            center={true}
            disabled={processing}
            clicked={onPaymentClicked}
          />
        }

          {
            !user &&
            <ButtonStandard
              icon="profile"
              name="Login to proceed"
              center={true}
              clicked={onLoginClicked}
            />
        }
        </Container>

      </Wrapper>
    }

      <ModalBottomSheet id="actions" title="Change your order ?">
        {
            preferredCart &&
            <CheckoutAction
              cart={preferredCart}
              editClicked={onEditCartClicked}
              deleteClicked={onDeleteCartClicked}
            />  
        }
      </ModalBottomSheet>


      <ModalSuccess
        id="payment"
        button="keep ordering"
        title="Processing your order"
        message="your order was processed successfully"
        processed={processed}
        clicked={onOrderProcessed}
      />

    </div>
   
  )
}

export default CheckoutContainer;