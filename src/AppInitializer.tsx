import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { GetUser } from './store/ducks/user/effects';
import { GetProducts } from './store/ducks/product/effects';
import { getInitialized } from './store/ducks/product/selector';
import { getCartQuantity } from './store/ducks/checkout/selector';
import { LoadCart } from './store/ducks/checkout/effects';
import ModalSnackbar from './components/shared/buttons/modals/ModalSnackbar';
import ModalBackdrop from './components/shared/buttons/modals/ModalBackdrop';
import Toolbar from './components/shared/layouts/Toolbar';
import PwaContainer from './components/shared/pwa/PwaController';




type AppInitializerProps = {
  children:ReactNode;
}

const AppInitializer: React.FC<AppInitializerProps> = (props:AppInitializerProps) => {

  const dispatch = useDispatch();
  const initialized:boolean = useSelector(getInitialized)
  const cartQuantity:number = useSelector(getCartQuantity);
  const location = useLocation();
  const navigation = useNavigate();
  const [toolbarId, setToolbarId] = useState('home');
  const [showToolbar, setShowToolbar] = useState(true);

  useEffect(() => {
    dispatch(GetUser());
    dispatch(GetProducts());
    dispatch(LoadCart());    
  }, [])

  useEffect(() => {
    const route:string = location.pathname.split('/')[1];

    setToolbarId(route);   
    setShowToolbar(route !== 'product');
    window.scrollTo(0, 0);
  }, [location]);


  const onToolbarClicked = (toolbar:string) =>{
    navigation(`/${toolbar || ''}`);
  }
  
  return (
    <div>
      {
      initialized &&
        <div>
          {props.children}
          <ModalSnackbar />
          <ModalBackdrop />
          <PwaContainer />
          {showToolbar && <Toolbar cartQuantity={cartQuantity} toolbarId={toolbarId} clicked={onToolbarClicked} />}
        </div>
      }
    </div>
  )
}

export default AppInitializer;