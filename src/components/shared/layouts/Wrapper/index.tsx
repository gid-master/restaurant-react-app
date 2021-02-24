import React, { ReactNode } from 'react';
import './styles.scss';


type WrapperProps = {
  children:ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => (
  <div className="layout-wrapper">
    {props.children}
  </div>
)

export default Wrapper;