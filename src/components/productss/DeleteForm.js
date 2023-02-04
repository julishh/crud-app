
const DeleteForm = ({deleteItem,setModal}) => {
  return (
    <>
      <p className="text-center">
        Are you sure, You want to delete the product?
      </p>
      <div className="mt-3 d-flex justify-content-end">
        <button className="btn btn-block btn-success me-3" onClick={()=>setModal(false)}>Cancel</button>
        <button className=" btn btn-block btn-danger" onClick={deleteItem}>Continue</button>
      </div>
    </>
  );
};

export default DeleteForm;
