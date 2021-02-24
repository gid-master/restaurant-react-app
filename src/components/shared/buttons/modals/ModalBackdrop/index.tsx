import React, { useEffect } from 'react';
import classNames from 'classnames';
import { IModal } from '@/interfaces/IModal';
import { useDispatch, useSelector } from 'react-redux';
import { getModal } from '@/store/ducks/settings/selector';
import { ShowModal } from '@/store/ducks/settings/actions';
import './styles.scss';



const ModalBackdrop: React.FC = () => {

  const dispatch = useDispatch();
  const modal:IModal = useSelector(getModal);

  useEffect(() => {
    disableScroll(modal && modal.show)
  }, [modal]);

  const onBackdropClicked = () => {
    if (modal.disableClick) {
      return;
    }

    dispatch(ShowModal({ show:false }));
  }

  const disableScroll = (disable: boolean) => {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
  };

  return (
    <div
      className={classNames('modal-backdrop', { show: modal && modal.show })}
      onClick={onBackdropClicked}
    />
  )
}

export default ModalBackdrop;