import React, { useState } from "react";
import axios from 'axios'
import Modal from "../UI-Elements/Modal";
import AddForm from "./AddForm";
const AddNewProduct = ({ list, setList }) => {
  const [addModal, setAddModal] = useState(false);


  // const add = async (item) => {
  //   try {
  //     let res = await axios.post("/add-route", item);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  const addItem = (item) => {
    let date = new Date().toISOString().split("T")[0];
    let id = new Date().valueOf();
    try {
      setList([{ ...item, created_at: date, id }, ...list]);
    } catch (err) {
      console.log(err);
    } finally {
      setAddModal(false);
    }

    setAddModal(false);
  };
  return (
    <>
      <button
        className="btn btn-block btn-success addbtn "
        
        onClick={() => setAddModal(true)}
      >
        Add New Product
      </button>
      {addModal && (
        <Modal title="Add Product">
          <AddForm addItem={addItem} setAddModal={setAddModal} />
        </Modal>
      )}
    </>
  );
};

export default AddNewProduct;
