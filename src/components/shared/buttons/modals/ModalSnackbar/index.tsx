import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { getSnackbar } from '@/store/ducks/settings/selector';
import { ShowSnackbar } from '@/store/ducks/settings/actions';
import './styles.scss';


const ModalSnackbar: React.FC = () => {

  let timeout:number = null;
  const duration:number = 5000;
  const dispatch = useDispatch();
  const message:string = useSelector(getSnackbar);

  useEffect(() => {
    delaySnackBar();
  }, [message]);

  const delaySnackBar = async  () => {
    if (message){
      timeout = window.setTimeout(() => closeSnackBar(), duration);
    }    
  };

  const closeSnackBar = () => {
    window.clearTimeout(timeout);
    dispatch(ShowSnackbar(null));
  };

  return (
    <div className={classNames('modal-snackbar', { show: Boolean(message) })}>
      <span>{ message }</span>
      <img src={require('@/assets/icons/light/clear.svg').default} onClick={closeSnackBar} alt="close" />
    </div>
  )
  
}
export default ModalSnackbar;