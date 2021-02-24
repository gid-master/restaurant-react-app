import React from 'react';
import { useSelector } from 'react-redux';
import { getModal } from '@/store/ducks/settings/selector';
import classNames from 'classnames';
import { IModal } from '@/interfaces/IModal';
import ButtonStandard from '../../ButtonStandard';
import './styles.scss';

type ModalSuccessProps = {
  id?: string;
  title: string;
  message: string;
  button: string;
  processed: boolean;
  clicked: () => void;
}

const ModalSuccess: React.FC<ModalSuccessProps> = (props: ModalSuccessProps) => {

  const modal:IModal = useSelector(getModal);

  return (
    <div className={classNames('modal-success', { show: modal && modal.show && modal.id === props.id })}>
      <div className="content">
        <h2>{ props.title }</h2>
    
        <span className="success">
          {
            props.processed && 
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip" />
                <span className="icon-line line-long" />
                <div className="icon-circle" />
                <div className="icon-fix" />
              </div>
            </div>
          }
          {
            !props.processed &&
            <div className="processing-ripple">
              <div />
              <div />
            </div>
          }
          <span className="text">{ props.message }</span>
        </span>
          
        {
          props.button &&
          <ButtonStandard
            name={props.button}
            center={true}
            disabled={!props.processed}
            clicked={props.clicked}
          />
        }
        
      </div>
    </div>
  )
}

export default ModalSuccess;