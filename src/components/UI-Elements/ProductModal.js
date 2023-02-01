import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ProductModal = (props) => {

    const [show, setShow] = useState(true);

    const handleClose = () => props.setShowModal(false);
    const handleShow = () => props.setShowModal(true);
  return (
    <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ProductModal