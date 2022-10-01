import "./App.css"

import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList"
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/products/ProductsList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct"

import {Routes, Route} from "react-router-dom";



function App() {
  return (
      <div>
        <TopBar/>
        <div className="container">
            <Sidebar/>
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/users" element={<UsersList/>}/>
              <Route path="/users/:userId" element={<User/>}/>
              <Route path="/newuser" element={<NewUser/>}/>
              <Route path="/products" element={<ProductsList/>}/>
              <Route path="/products/:productId" element={<Product/>}/>
              <Route path="/newproduct" element={<NewProduct/>}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
