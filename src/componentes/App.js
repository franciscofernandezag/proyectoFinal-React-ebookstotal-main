import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { CustomProvider } from "../componentes/Context/CustomContext";
import Cart from "./Cart";


const App = () => {
  return (
    <>

    <BrowserRouter>
    <CustomProvider>

      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes> 
      </CustomProvider>

    </BrowserRouter>
      
    </>
  );
}

export default App;
