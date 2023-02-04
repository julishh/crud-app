import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
const SearchForm = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  // const searchAction = (e) => {
  //   e.preventDefault()
  //   console.log(category);
  // };

 

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search-result?category=${category}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control"
        placeholder="search by category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input>
      
    </form>
  );
};

export default SearchForm;
