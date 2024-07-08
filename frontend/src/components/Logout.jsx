import React from 'react'
import { useCookies } from 'react-cookie'
function Logout() {
    const[cookie,setCookie,removeCookie]=useCookies();
    function handleLogout(){
        removeCookie("userId");
        removeCookie("token");  
    }
  return (
    <div>
        <button onClick={handleLogout} className='menu'>Logout</button>
    </div>
  )
}

export default Logout;