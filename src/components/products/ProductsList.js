import { useState } from "react";

const ProductsList = ({ list, edit, remove }) => {
  const deleteHandler = (item) => {
    console.log("Delete", item);
    remove(item);
  };

  const editHandler = (i) => {
    console.log("Edit", i);
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
            onClick={() => editHandler(item)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-block btn-danger"
            onClick={() => deleteHandler(item)}
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
       { list ?<tbody>
          { list.map((l) => (
            <Item key={l.id} item={l} />
          ))}
        </tbody>:''}
      </table>
    </div>
  );
};

export default ProductsList;
