import React,{useEffect,useState} from 'react'
import AddNewProduct from '../components/productss/AddNewProduct'
import ProductList from '../components/productss/ProductList'
import DATA from '../data'
const MainPage = () => {
const [allProducts,setAllProducts] =useState(DATA)


  return (
    <div>
    <AddNewProduct list={allProducts} setList={setAllProducts}/>
    <ProductList list={allProducts} setList={setAllProducts} />
    </div>
  )
}

export default MainPage