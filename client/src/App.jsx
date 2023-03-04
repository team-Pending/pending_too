import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar/Nav";
import ShopCard from "./components/ShopCard/ShopCard";
import About from "./components/About";
import Account from "./components/account/Account";
import "./app.css";
import Admin from "./components/admin/Admin.jsx";

function App() {

  return (
      <div>
      <Navbar/>

    <div className="container">
      <Routes>
        <Route path="/" element={<ShopCard />} />
        <Route path="/about" element={<About />} />
        <Route path='/account' element={<Account />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      </div>

    </div>
  )
}

//  RETURN TO COMPLETE!!! (LAURA) Needs to be added to "Content" page, or however we are calling it. 
// function Content() {
//   const authData = useAuth();

//   return (
//     <div>
//       {authData ? (
//         <div>
//           <h2>Welcome, {authData.username}!</h2>
//           <p>Here is some content that requires authentication.</p>
//         </div>
//       ) : (
//         <div>
//           <h2>Please log in to view this content.</h2>
//         </div>
//       )}
//     </div>
//   );
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

export default App;
