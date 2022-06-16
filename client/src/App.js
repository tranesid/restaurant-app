import './App.css';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import MenuForm from './Menu';
import Items from './Items';
import MenuList from './Menu/MenuList';
import Crud from './CRUD';
import MenuShow from './Menu/MenuShow';

const PageContainer = () => {
  return (
    <>
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/CRUD">CRUD</Link>
      <Link to="/Menu">Menu</Link>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  )
}

const Home = () => {
  return <p>Home page</p>
}

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<PageContainer />}/>
      <Route index element={<Home />}>
      <Route path='/items' element={<Items />}/>
      <Route path='/menu' element={<Menu />}/>
      <Route path='/CRUD' element={<Crud />}/>
        <Route index element={<MenuList />}/>
        <Route path='/menu/new' element={<MenuForm />}/>
        <Route path='/menu/:id/edit' element={<MenuForm />}/>
        <Route path='/menu/:id' element={<MenuShow/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App
