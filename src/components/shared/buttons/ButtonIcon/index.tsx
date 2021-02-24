import React from 'react';
import classNames from 'classnames';
import './styles.scss';


type ButtonIconProps = {
  name: string;
  icon: string;
  badge?: number;
  selected?: boolean;
  disabled?: boolean;
  clicked: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = (props: ButtonIconProps) =>{

  const folder = ():string => {
    if (props.disabled) { return 'disabled'; }
    if (props.selected) { return 'primary'; }
    return 'dark';
  }

  return  (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.clicked}
      className={classNames('button-icon', { selected: props.selected, disabled:props.disabled  })}
    >
      <img src={require(`@/assets/icons/${folder()}/${props.icon}.svg`).default} alt={props.name} />
      <span className="text">
        <small>{ props.name }</small>
      </span>
      { props.badge > 0 && <span className="badge">{props.badge}</span> }
    </button>
  )
}

export default ButtonIcon;