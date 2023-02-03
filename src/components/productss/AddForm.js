import React, { useState } from "react";

const AddForm = ({ addItem, setAddModal }) => {
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

  

  return (
    <div>
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
      <div className="mt-3 d-flex justify-content-end">
        <button
          disabled={!name || !description}
          className="btn btn-block btn-success me-3"
          onClick={() => addItem(product)}
        >
          Add
        </button>
        <button
          className=" btn btn-block btn-danger"
          onClick={() => setAddModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddForm;
