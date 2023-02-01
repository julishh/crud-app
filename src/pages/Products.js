import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import DeleteProduct from "../components/products/DeleteProduct";
import ProductsList from "../components/products/ProductsList";

import DATA from "../data";

const Products = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [allProduct, setAllProduct] = useState(DATA);
  useEffect(() => {
    // const fetchData=async()=>{
    //   let res= await axios.get('https://product-fhqo.onrender.com/products')
    //   setAllProduct(res.data.products)
    // }

    // fetchData()
   
  }, []);
  

  const addProduct = (item) => {
   
    let date = new Date().toISOString().split("T")[0];
    let id=new Date().valueOf()
    let newList = [...allProduct, { ...item, createdAt: date,id  }];
    setAllProduct(newList);
  };

  const deleteProduct = (item) => {
    console.log("page", item);
    setShowDeleteModal(true);
  };

  const editProduct = (item) => {
    console.log("edit", item);
  };

  return (
    <>
      <div>
        <button
          className="btn btn-block btn-primary"
          onClick={() => setShowAddModal(true)}
        >
          Add New Product
        </button>

        {showAddModal && (
          <AddProduct
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            add={addProduct}
          />
        )}
        <ProductsList
          list={allProduct}
          remove={deleteProduct}
          edit={editProduct}
        />
      </div>
    </>
  );
};

export default Products;
