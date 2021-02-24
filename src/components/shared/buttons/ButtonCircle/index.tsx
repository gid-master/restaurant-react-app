import React from 'react';
import classNames from 'classnames';
import './styles.scss';


type ButtonCircleProps = {
  name?: string;
  icon: string;
  selected?: boolean;
  horizontal?: boolean;
  small?: boolean;
  light?: boolean;
  clicked: () => void;
}

const ButtonCircle: React.FC<ButtonCircleProps> = (props: ButtonCircleProps) => (
  <button
    type="button"
    onClick={props.clicked}
    className={classNames('button-circle', { 
      selected: props.selected,  
      horizontal:props.horizontal, 
      small: props.small, 
      light:props.light, 
    })}
  >
    <div className='image'>
      <img src={require(`@/assets/icons/${props.light ? 'primary' : 'light'}/${props.icon}.svg`).default} alt={props.name} />
    </div>
    { props.name && <span>{props.name}</span> }
  </button>
)

export default ButtonCircle;