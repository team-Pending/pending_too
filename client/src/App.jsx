import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Nav";
import ShopCard from "./components/ShopCard/ShopCard";
import About from "./components/About";
import Account from "./components/account/Account";
import "./app.css"

function App() {

  return (
      <div>
      <Navbar/>

    <div className="container">
      <Routes>
        <Route path="/" element={<ShopCard />} />
        <Route path="/about" element={<About />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      </div>

    </div>
  )
}

export default App
