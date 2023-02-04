import React, { useState } from "react";
import axios from 'axios'
import Modal from "../UI-Elements/Modal";
import DeleteForm from "./DeleteForm";
import EditForm from "./EditForm";

const ProductItem = ({ item, list, setList }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);




  // const del = async () => {
  //   try {
  //     let res = await axios.delete("/delete-route", { id: item.id });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const update=async()=>{
  //   try{
  //     let res=await axios.patch(`/update-route/${item.id}`,{item})
  //   }catch(err){

  //   }
  // }

  const remove = () => {
    console.log(item);
    try {
      let newList = list.filter((l) => l.id !== item.id);
      setList(newList);
    } catch (err) {
      console.log(err);
    } finally {
      setShowDeleteModal(false);
    }
  };

  const edit = (product) => {
    try {
      let newList=list.map((l)=>{
        if(l.id===product.id){
          return product;
        }
        else return l
      })
      setList(newList)
     
    } catch (err) {
      console.log(err);
    } finally {
      setShowEditModal(false);
    }
  };
  return (
    <>
      <tr>
        <td scope="row">{item.product_name}</td>
        <td >{item.category_name}</td>
        <td className="w-25">{item.description}</td>
        <td >{item.created_at.split('T')[0]}</td>
        <td>{item.status}</td>
        <td>
          <button
            className="btn btn-block btn-success"
            onClick={() => setShowEditModal(true)}
          >
            Edit
          </button>
          {showEditModal && (
            <Modal title="Edit Product">
              <EditForm
                item={item}
                editItem={edit}
                setEditModal={setShowEditModal}
              />
            </Modal>
          )}
        </td>
        <td>
          <button
            className="btn btn-block btn-danger"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          {showDeleteModal && (
            <Modal title="Delete Product">
              <DeleteForm deleteItem={remove} setModal={setShowDeleteModal} />
            </Modal>
          )}
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
