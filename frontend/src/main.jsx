import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signup from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

