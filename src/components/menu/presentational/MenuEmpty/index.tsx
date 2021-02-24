import React from 'react';
import './styles.scss';


const MenuEmpty: React.FC = () =>(
  <div className="menu-empty">
    <div className="image">
      <img src={require('@/assets/icons/primary/thumb_down.svg').default} alt="menu empty" />
    </div>
    <h2>Sorry, no product found</h2>
    <p>try a different search term</p>
  </div>
)

export default MenuEmpty;