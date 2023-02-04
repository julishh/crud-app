import Header from './components/Header';
import MainPage from "./pages/MainPage";
import SearchProduct from './components/productss/SearchProduct';
import {useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 
  return (
   
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' exact element={ <MainPage />}></Route>
      <Route path='/search-result' exact element={<SearchProduct />}></Route>
     </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
