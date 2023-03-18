
import './App.css';
 import "./sb-admin.css";
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PortalLayout from './PortalLayout';
import Products from './Product';
import CartItems from './CartItem';
import Login from './Login';
import AddProduct from './AddProduct';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';
 import Home from './Home'

function App() {
  return (
    <div className="container">
   
  <BrowserRouter> 
  <div className='row'>
<Route exact path ="/">
           <PortalLayout/>
           </Route>

 <Route exact path ="/">
           <Home/>
           </Route>

           <Route exact path ="/Products">
           <Products/>
           </Route>

           <Route exact path ="/CartItems">
           <CartItems/>
           </Route>

           <Route exact path ="/Login">
           <Login/>
           </Route>

           <Route exact path ="/addproduct">
           <AddProduct/>
           </Route>

           <Route exact path ="/CreateProduct">
           <CreateProduct/>
           </Route>

           <Route exact path ="/edit-product/:id">
           <EditProduct/>
           </Route>

</div> 
   </BrowserRouter> 
     
    </div>
  );
}

export default App;