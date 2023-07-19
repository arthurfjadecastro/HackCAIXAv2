import './App.css';
import { Home } from "./Components/Home";
import { Route, BrowserRouter, Routes, Outlet, useNavigate } from "react-router-dom";
import { Login } from './Components/Login';
import { Adm } from './Components/Adm';
import { Client } from './Components/Client';


function Layout() {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Adm" element={<Adm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Client" element={<Client />} />
        {/* <Route path="adm2" element={<Adm />} /> */}
        {/* </Route> */}
        {/* <Route path="b" element={<PageB />} /> */}
        {/* <Route path="c" element={<Home />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;