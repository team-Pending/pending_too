import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import About from "./components/About";

function App() {

  return (
    <body className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </body>
  )
}

export default App
