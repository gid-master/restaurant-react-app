import React from 'react';
import ButtonCircle from '@/components/shared/buttons/ButtonCircle';
import './styles.scss';

type MenuFilterProps = {
  searchTerm?: string;
  sortId: string;
  changed: (value?:string) => void;
  sorted: () => void;
}

const MenuFilter: React.FC<MenuFilterProps> = (props:MenuFilterProps) =>(
  <div className="menu-search">
    <div className="wrapper">
      <input
        value={props.searchTerm ? props.searchTerm : ''}
        onChange={(event) => props.changed(event.target.value)}
        type="text"
        className="input"
        placeholder="search for a product..."
      />
      {!props.searchTerm && <img src={require('@/assets/icons/dark/search.svg').default} alt="search" />}
      {props.searchTerm && <img src={require('@/assets/icons/dark/clear.svg').default} alt="clear" onClick={() => props.changed(null)}  />}
    </div>
    <ButtonCircle
      icon={props.sortId}
      small={true}
      clicked={props.sorted}
    />
  </div>
)

export default MenuFilter;