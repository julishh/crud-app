import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './AddModal.module.css';

const AddModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Add Modal</h2>
        </header>
        <div className={classes.content}>
          <p>this is add form</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default AddModal;