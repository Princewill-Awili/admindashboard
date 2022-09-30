import "./App.css"

import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList"

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
            </Routes>
        </div>
      </div>
  );
}

export default App;
