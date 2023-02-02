import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteProduct=({item,del})=>{
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const deleteHandler=()=>{
    del()
    handleClose()
}
  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, You want to delete the product?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
           Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProduct