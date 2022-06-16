import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Items from "./pages/Items";
import Crud from "./pages/CRUD";
import ErrorPage from "./pages/ErrorPage";
import MenuForm from "./pages/Menu/MenuForm";
import MenuList from "./pages/Menu/MenuList";
import MenuShow from "./pages/Menu/MenuShow";


const Home = () => {
  return (
  <h1>This is the home page</h1>
  )
}


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/items">Items</Link>
        <Link to="/crud">Crud</Link>
        </div>
        <hr/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
            <Route path="/menuform" element={<MenuForm />} />
            <Route path="/menulist" element={<MenuList />} />
            <Route path="/menushow" element={<MenuShow />} />
          <Route path="/items" element={<Items />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="*" element={<ErrorPage />} />
       </Routes>
      </div>
      <hr/>
      <div className="footer">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/items">Items</Link>
        <Link to="/crud">Crud</Link>
        </div>

      </div>
   
    </div>
  );
}

export default App

// redirecting button 

// import {useNavigate} from "react-router-dom";

// let navigate = useNavigate();
// <button onClick={()=>{navigate("/target")}} >Change to a new page</button>
