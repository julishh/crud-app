import { render } from "@testing-library/react";
import { useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
const ProductsList = ({ list, setList }) => {
  const remove = (item) => {
    const del = () => {
      let newList = list.filter((l) => l.id !== item.id);
      setList(newList);
    };
    render(<DeleteProduct item={item} del={del} />);
  };

  const Edit = (item) => {
    const update = (product) => {
      let newList = list.map((l) => {
        if (l.id === product.id) {
          return product;
        } else return l;
      });

      setList(newList);
    };
    render(<EditProduct item={item} update={update} />);
  };

  const Item = ({ item }) => {
    return (
      <tr>
        <td scope="row">{item.name}</td>
        <td>{item.category}</td>
        <td>{item.description}</td>
        <td>{item.createdAt}</td>
        <td>{item.status}</td>
        <td>
          <button
            className="btn btn-block btn-success"
            onClick={() => Edit(item)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-block btn-danger"
            onClick={() => remove(item)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table className="table">
        <thead>
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
              <Item key={l.id} item={l} />
            ))}
          </tbody>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};

export default ProductsList;
