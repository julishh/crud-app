import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchProduct = () => {
  // const [category,setCategory]=useState('')
  const [result, setResult] = useState("");
  const location = useLocation();

  // we can call our search backend api here

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    setResult(category);
  }, [location.search]);

  return <div>Result for your search {result}</div>;
};

export default SearchProduct;
