import { Link, Outlet } from "react";

const Menu = () => {
  return (
    <div>
    <div className="menuNavbar">
      <Link to="/menu/menuform">Menu Form</Link>
      <Link to="/menu/menulist">Menu List</Link>
      <Link to="/menu/menushow">Menu Show</Link>
    </div>
    <hr/>
    <h1>This is the Menu Page</h1>
    <div>
      <Outlet />
    </div>
    </div>
  )
}

export default Menu;