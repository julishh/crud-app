import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditProduct=({item,update})=>{



  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [product, setProduct] = useState(item);

  const { name, category, description, status } = product;

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    update(product)
    handleClose()

  };


  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <form>
      <div className="form-group ">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={changeHandler}
        ></input>
      </div>

      <div className="form-group mt-3">
        <label className="form-label">Category</label>
        <select
          name="category"
          className="form-select"
          value={category}
          onChange={changeHandler}
        >
          <option value={"electronics"}>electronics</option>
          <option value={"dairy"}>dairy</option>
          <option value={"furniture"}>furniture</option>
        </select>
      </div>

      <div className="form-group mt-3">
        <label className="form-label">Status</label>
        <select
          name="status"
          className="form-select"
          value={status}
          onChange={changeHandler}
        >
          <option value={"In stock"}>In stock</option>
          <option value={"Out of stock"}>Out of stock</option>
          <option value={"Limited stock"}>Limited stock</option>
        </select>
      </div>

      <div className="form-group mt-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={changeHandler}
        ></textarea>
      </div>

      
    </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success" disabled={!name || !category || !description || !status} onClick={submitHandler}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProduct