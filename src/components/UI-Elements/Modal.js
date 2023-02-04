import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    
    ReactDOM.createPortal(
      
      <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
       <hr />
        <div className={classes.content}>
          {props.children}
        </div>
        
      </Card>
    </>
      , document.getElementById('modal'))
   
  );
};

export default Modal;