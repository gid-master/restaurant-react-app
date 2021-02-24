import React, { ReactNode } from 'react';
import './styles.scss';


type BlockProps = {
  title?: string;
  subtitle?: string;
  link?: string;
  clicked?: () => void;
  children:ReactNode;
}

const Block: React.FC<BlockProps> = (props: BlockProps) => {

  const onClick = () => {
    if (!props.clicked){
      return;
    }

    props.clicked();
  }

  return (
    <div className="layout-block">
      {
              props.title && 
              <div className="layout-header">
                <div className="title-wrapper">
                  <h2 className="title">{ props.title }</h2>
                  {props.link && <button type="button" className="link" onClick={onClick}>{ props.link }</button>}
                </div>
                {
                  props.subtitle &&
                  <span className="subtitle">
                    <small>{ props.subtitle }</small>
                  </span>
                }
              </div>
          }
      {props.children}
    </div>
  )

}

export default Block;