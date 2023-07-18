import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Hats from "./components/Hats";
import Jackets from "./components/Jackets";
import Sneakers from "./components/Sneakers";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import { useState } from "react";
import Cart from "./components/Cart";
const App = () => {
  const[open,setOpen]=useState(false);
  const OpenHandler=()=>{
    setOpen(!open)
  }
  return (
    <div className="px-5">
      <Navbar open={open} OpenHandler={OpenHandler} />
      {open && <Cart />}
      <Routes>
        <Route path="/" element={<Home open={open} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Signin />} />
        {/* categories */}
        <Route path="/hats" element={<Hats />} />
        <Route path="/jackets" element={<Jackets />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
    </div>
  );
};

export default App;
