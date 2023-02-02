import React, { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "../components/products/AddProduct";
import ProductsList from "../components/products/ProductsList";

import DATA from "../data";

const Products = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  
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
    let newList = [{ ...item, createdAt: date,id  },...allProduct];
    setAllProduct(newList);
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
          setList={setAllProduct}
        />
      </div>
    </>
  );
};

export default Products;
