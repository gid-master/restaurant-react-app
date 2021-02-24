import React, { ReactNode } from 'react';
import './styles.scss';


type ContainerProps = {
  title?: string;
  link?: string;
  clicked?: () => void;
  children:ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {

  const onClick = () => {
    if (!props.clicked){
      return;
    }

    props.clicked();
  }

  return (
    <div className="layout-container">
      {
              props.title && 
              <div className="header">
                <h2 className="title">{ props.title }</h2>
                {props.link && <button type="button" className="link" onClick={onClick}>{ props.link }</button>}
              </div>
          }
      {props.children}
    </div>
  )
}

export default Container;