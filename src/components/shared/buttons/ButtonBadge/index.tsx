import React from 'react';
import classNames from 'classnames';
import './styles.scss';


type ButtonBadgeProps = {
  name:string;
  icon: string;
  selected: boolean;
  clicked: () => void;
}

const ButtonBadge: React.FC<ButtonBadgeProps> = (props: ButtonBadgeProps) => (
  <button
    type="button"
    onClick={props.clicked}
    disabled={props.selected}
    className={classNames('button-badge', { selected: props.selected })}
  >
    <img src={require(`@/assets/categories/${props.icon}.svg`).default} alt={props.name} />
    <span>{ props.name }</span>
  </button>
)

export default ButtonBadge;