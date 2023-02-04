import{ useEffect, useState } from "react";
import axios from "axios";
import AddNewProduct from "../components/productss/AddNewProduct";
import ProductList from "../components/productss/ProductList";
import SearchForm from "../components/productss/SearchForm";
//import DATA from "../data";
import './MainPage.css'

const MainPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get("https://product-fhqo.onrender.com/products");
     
      setAllProducts(res.data.products);
    };
    fetchData();
  }, []);

  return (
    < >
     <hr></hr>
      <div className='addsearch'>
        <AddNewProduct list={allProducts} setList={setAllProducts} />
        <SearchForm list={allProducts} />
      </div>

      <ProductList list={allProducts} setList={setAllProducts} />
    </>
  );
};

export default MainPage;
