import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddProduct = ({showModal,setShowModal,add}) => {

  const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

  const [product, setProduct] = useState({
    name: "",
    category: "electronics",
    description: "",
    status: "In stock",
  });

  const { name, category, description, status } = product;

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(product);
    add(product)
    handleClose()

  };

  return (<>
  <Modal className="resposive" show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <form>
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

      
    </form>
    </Modal.Body>
    <Modal.Footer>
          
          <Button  variant="success" disabled={!name || !category || !description || !status} onClick={submitHandler}>
            Add
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

    </Modal>
    </>
  );
};

export default AddProduct;
