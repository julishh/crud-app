import React,{useState} from 'react'
import ProductItem from './ProductItem'

const ProductList = ({list, setList}) => {
    
   
   
  return (
    <div className=' table-responsive mt-5'>
<table className="table table-striped">
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Created At</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {list ? (
          <tbody>
            {list.map((l) => (
              <ProductItem key={l.id} item={l} list={list} setList={setList}/>
            ))}
          </tbody>
        ) : (
          ""
        )}
        </table>

    </div>
  )
}

export default ProductList