import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddNewProduct from "./AddNewProduct";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";
const SearchProduct = () => {
  // const [category,setCategory]=useState('')
  const [result, setResult] = useState([]);
  // const location = useLocation();


// we can call our search backend api here 

 // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const category = queryParams.get("category");
  //   searchAction(category);
  // }, [window.location.search]);

  return (
    <div>
      <ProductList list={result} />
    </div>
  );
};

export default SearchProduct;
