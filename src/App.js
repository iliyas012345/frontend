
import './App.css';


// import "./sb-admin-2.min.css";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from './Topbar';
// import { BrowserRouter, Route } from "react-router-dom";
import {Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PortalLayout from './PortalLayout';
import Products from './Product';
import CartItems from './CartItem';
import Login from './Login';
import AddProduct from './AddProduct';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
// import Products from './Product';
// import CartItems from './CartItem';
 import Home from './Home'
// import Login from './Login';
// import PortalLayout from './PortalLayout';
// import AddProduct from './AddProduct';
// import CreateProduct from './CreateProduct';
// import EditProduct from './EditProduct';
// import EditProduct from './EditProduct';
// import Products from './Product';
// import CartItems from './CartItem';
// import Home from './Home';
// import Login from "./Login";
// import PortalLayout from "./PortalLayout";
// import AddProduct from "./AddProduct";
// import CreateProduct from "./CreateProduct";
// import EditProduct from "./EditProduct";

function App() {
  return (
    <div className="container">
   <BrowserRouter>
   <div className="row">
          <Route>
          <Route path="/" element={<PortalLayout />}>
          <Route path="/" element={<Home/>}/>      
          <Route path="/Products" element={<Products/>}/>
          <Route path="/CartItems" element={<CartItems/>}/>   
          <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/create-product" element={<CreateProduct/>}/>
          <Route path="/edit-product/:id" element={<EditProduct/>}/>
          </Route>
          </div>
   </BrowserRouter>
    
    </div>
  );
}

export default App;