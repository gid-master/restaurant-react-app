import React from 'react';
import classNames from 'classnames';
import './styles.scss';


type ButtonStandardProps = {
  name: string;
  icon?: string;
  detail?: string;
  submit?: boolean;
  center?: boolean;
  disabled?: boolean;
  small?: boolean;
  transparent?: boolean;
  clicked?: () => void;
}

const ButtonStandard: React.FC<ButtonStandardProps> = (props: ButtonStandardProps) =>{

  const onClicked = ():void =>{
    if (props.submit){
      return;
    }
    
    props.clicked();
  }


  return (
    <button
      type={props.submit ? 'submit' : 'button'}
      disabled={props.disabled}
      onClick={onClicked}
      className={classNames('button-standard', { 
        disabled: props.disabled, 
        center: props.center, 
        small: props.small, 
        transparent: props.transparent,  
      })}
    >
      { props.icon && <img src={require(`@/assets/icons/light/${props.icon}.svg`).default} alt={props.name} /> }
      <span className="text">{ props.name }</span>
      { props.detail && <span className="detail">{props.detail}</span> }
    </button>
  )

}

export default ButtonStandard;