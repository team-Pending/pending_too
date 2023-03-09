import React from 'react';
import { useLocation } from "react-router-dom"
import { useAuth } from '../../utils/auth';

function Placeholder() {

  const handleClick =()=> {
    const token = sessionStorage.getItem('jwt')
    if (!token) {
      // token does not exist or is falsy
      // do something here
      console.log("Token does not exist or is falsy");
    } else {
      // token exists and is truthy
      // do something else here
      console.log("Token exists and is truthy");
    }
    
  } 

  let location = useLocation();

  console.log(location)
  let searchTarget = location.pathname.slice(8);
  console.log(searchTarget)
  
  return (
    <div>
        <h1>Coming Soon</h1>
      <pre>{searchTarget}</pre>
      {/* <button onClick={() => {handleClick()}}>hello there</button> */}
    </div>
  );
}

export default Placeholder;

