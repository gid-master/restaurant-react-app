import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IModal } from '@/interfaces/IModal';
import { useSelector } from 'react-redux';
import { getModal } from '@/store/ducks/settings/selector';
import './styles.scss';


type ModalBottomProps = {
  id?: string;
  title: string;
  children:ReactNode;
}

const ModalBottom: React.FC<ModalBottomProps> = (props: ModalBottomProps) => {

  const modal:IModal = useSelector(getModal);

  return (
    <div className={classNames('modal-bottom', { show: modal && modal.show && modal.id === props.id })}>
      <div className="content">
        <h2>{ props.title }</h2>
        {props.children}
      </div>
    </div>
  )
}

export default ModalBottom;