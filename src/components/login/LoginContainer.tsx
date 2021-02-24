import { IAuthentication } from '@/interfaces/IUser';
import React, { useEffect, useState } from 'react';
import Wrapper from '@/components/shared/layouts/Wrapper';
import Container from '@/components/shared/layouts/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Login, Register } from '@/store/ducks/user/effects';
import { Error } from '@/store/ducks/user/actions';
import { getAuthenticated, getError } from '@/store/ducks/user/selector';
import LoginAuthenticate from './presentational/LoginAuthenticate';
import LoginCreateAccount from './presentational/LoginCreateAccount';




const LoginContainer: React.FC = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const error:string = useSelector(getError);
  const authenticated:boolean = useSelector(getAuthenticated);

  const [enableRegister, setEnableRegister] = useState(false);
  const [processing, setProcessing] = useState(false);


  useEffect(() => {

    if (authenticated) {
      navigation('/account');
    }

    if (error) {
      setProcessing(false);
    }

  }, [authenticated, error])


  const onEnableRegisterClicked = (enable: boolean) => {
    setEnableRegister(enable);
  };

  const onAuthenticateClicked = (authentication: IAuthentication) => {
    setProcessing(true);
    dispatch(Error(null));
    dispatch(Login(authentication));
  };

  const onRegistereClicked = (authentication: IAuthentication) => {
    setProcessing(true);
    dispatch(Error(null));
    dispatch(Register(authentication));
  };


  return (
    <Wrapper>
      <Container>
        {
          !enableRegister && 
          <LoginAuthenticate
            processing={processing}
            message={error}
            authenticateClicked={onAuthenticateClicked}
            enableRegisterClicked={() => onEnableRegisterClicked(true)}
          />
        }
        
        {
          enableRegister && 
          <LoginCreateAccount
            processing={processing}
            message={error}
            registerClicked={onRegistereClicked}
            enableRegisterClicked={() => onEnableRegisterClicked(false)}
          />
        }
       
      </Container>
    </Wrapper>
  )
}

export default LoginContainer;