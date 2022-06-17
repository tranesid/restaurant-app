import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Items from "./pages/Items";
import Crud from "./pages/CRUD";
import ErrorPage from "./pages/ErrorPage";
import MenuForm from "./pages/Menu/MenuForm";
import MenuList from "./pages/Menu/MenuList";
import MenuShow from "./pages/Menu/MenuShow";

const Container = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/crud">Crud</Link>
        {/* <Link to="/items">Items</Link> */}
      </div>
      <div>
        {" "}
        <Outlet />{" "}
      </div>
    </div>
  );
};
const Home = () => {
  return <h1>HOME</h1>;
};

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/menu" element={<Menu />}>
              <Route index element={<MenuList />} />
              <Route path="/menu/new" element={<MenuForm />} />
              <Route path="/menu/:id/edit" element={<MenuForm />} />
              <Route path="/menu/:id" element={<MenuShow />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <hr />
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

export default App;

// redirecting button

// import {useNavigate} from "react-router-dom";

// let navigate = useNavigate();
// <button onClick={()=>{navigate("/target")}} >Change to a new page</button>
