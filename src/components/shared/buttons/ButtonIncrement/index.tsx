import React from 'react';
import classNames from 'classnames';
import './styles.scss';


type ButtonIncrementProps = {
  large?: boolean;
  disabledMin:boolean;
  disabledMax:boolean;
  quantity:number;
  clicked: (increment: number) => void;
}

const ButtonIncrement: React.FC<ButtonIncrementProps> = (props: ButtonIncrementProps) =>(
  <div className={classNames('button-increment', { large: props.large  })}>
    <button type="button" disabled={props.disabledMax} onClick={() => props.clicked(1)}>
      <img src={require('@/assets/icons/light/add.svg').default} alt="add" />
    </button>
    <span>{ props.quantity }</span>
    <button type="button" disabled={props.disabledMin} onClick={() => props.clicked(-1)}>
      <img src={require('@/assets/icons/light/remove.svg').default} alt="remove" />
    </button>
  </div>
)

export default ButtonIncrement;