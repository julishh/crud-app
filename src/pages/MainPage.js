import React,{useEffect,useState} from 'react'
import axios from 'axios'
import AddNewProduct from '../components/productss/AddNewProduct'
import ProductList from '../components/productss/ProductList'
import SearchForm from '../components/productss/SearchForm'
import DATA from '../data'
const MainPage = () => {
const [allProducts,setAllProducts] =useState([])
useEffect(()=>
{
  const fetchData=async()=>{
    let res=await axios.get('https://product-fhqo.onrender.com/products')
    console.log(res.data.products)
    setAllProducts(res.data.products)
  }
  fetchData()
},[]
)

  return (
    <div>
    <div className='d-flex justify-content-between'><AddNewProduct list={allProducts} setList={setAllProducts}/>
    <SearchForm list={allProducts}  /></div>
    <ProductList list={allProducts} setList={setAllProducts} />
    </div>
  )
}

export default MainPage