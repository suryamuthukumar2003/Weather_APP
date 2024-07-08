import { Outlet } from "react-router-dom"
import Appbar from "./components/Appbar"
import { createContext, Fragment, useState } from "react"

export const Status=createContext();
function App() {
  const[navWidth,setNavWidth]=useState(0);
  return(
    <Status.Provider value={{navWidth,setNavWidth}}>

      <Appbar/>
      <Outlet/>
    </Status.Provider>
  )
}

export default App
