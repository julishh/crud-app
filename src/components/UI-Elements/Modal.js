import React from 'react';

import Card from './Card';

import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Modal;