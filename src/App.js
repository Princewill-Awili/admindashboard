import "./App.css"

import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";



function App() {
  return (
    <div>
      <TopBar/>
      <div className="container">
          <Sidebar/>
          <Home/>
      </div>
    </div>
  );
}

export default App;
