import React from 'react';
import './styles.scss';

type HomeShortcutButtonProps = {
  name: string;
  icon: string;
  clicked: () => void;
}

const HomeShortcutButton: React.FC<HomeShortcutButtonProps> = (props: HomeShortcutButtonProps) =>(
  <button type="button" className="home-shortcut-button" onClick={props.clicked}>
    <div className="image">
      <img src={require(`@/assets/icons/primary/${props.icon}.svg`).default} alt={props.name} />
    </div>
    <span>{ props.name }</span>
  </button>
)

export default HomeShortcutButton;