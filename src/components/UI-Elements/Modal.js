import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    
    ReactDOM.createPortal(
      
      <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
       <hr />
        <div className={classes.content}>
          {props.children}
        </div>
        
      </Card>
    </div>
      , document.getElementById('modal'))
   
  );
};

export default Modal;