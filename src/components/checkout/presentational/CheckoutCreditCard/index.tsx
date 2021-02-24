import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ICreditCard } from '@/interfaces/ICheckout';
import './styles.scss';




type CheckoutCreditCardProps = {
  disabled: boolean;
}

export interface RefCreditCard {
  resetForm: () => void,
  submitForm: () => Promise<void>,
  getData: () => ICreditCard,
  isValidForm: () => boolean
}

const CheckoutCreditCard = forwardRef((props:CheckoutCreditCardProps, ref: Ref<RefCreditCard>) => {

  useImperativeHandle(ref, () => ({ resetForm, submitForm, getData, isValidForm }));
  const [data, setData] = useState(null);

  const schema = yup.object().shape({
    nameHolder: yup.string().required(),
    cardNumber: yup.string().required(),
    cvv: yup.string().required(),
    expiration: yup.string().required(),
  });

  const { register, handleSubmit, errors, reset, formState } = useForm({
    resolver: yupResolver(schema), mode: 'all', reValidateMode: 'onSubmit',
  });

  const getData = ():ICreditCard => data

  const resetForm = () => {
    reset();
    setData(null);
  }

  const submitForm = handleSubmit((formData) => {
    setData(formData);
  });

  const isValidForm = ():boolean => Object.keys(formState.errors).length === 0


  return (
    <form noValidate className="credit-card-form">
      
      <div className={classNames('controller', { error: errors.nameHolder })}>
        <label className="label"><small>Name on card</small></label>
        <input
          name="nameHolder"
          type="text"
          className="input"
          disabled={props.disabled}
          ref={register}
        />
        <span className="message">
          <small>Name on card is required.</small>
        </span> 
      </div>
  
      <div className={classNames('controller', { error: errors.cardNumber })}>
        <label className="label"><small>Card number</small></label>
        <input
          name="cardNumber"
          type="text"
          className="input"
          disabled={props.disabled}
          ref={register}
        />
        <span className="message">
          <small>Card number is required.</small>
        </span> 
      </div>
  
      <div className={classNames('controller half', { error: errors.cvv })}>
        <label className="label"><small>Card number</small></label>
        <input
          name="cvv"
          type="text"
          className="input"
          disabled={props.disabled}
          ref={register}
        />
        <span className="message">
          <small>CVV is required.</small>
        </span> 
      </div>
  
      <div className={classNames('controller half', { error: errors.expiration })}>
        <label className="label"><small>Expiration</small></label>
        <input
          name="expiration"
          type="text"
          className="input"
          disabled={props.disabled}
          ref={register}
        />
        <span className="message">
          <small>Date is required.</small>
        </span> 
      </div>
      
    </form>
  )
})

export default CheckoutCreditCard;


