import React, { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const email=useRef();
  const password=useRef();
  const[cookie,setCookie]=useCookies([]);
  const nav=useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    await fetch('http://localhost:8002/user/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "emailId":email.current.value,
        "password":password.current.value
      })
    }).then(res=>res.json()).then(data=>{
      const{status,accessToken,userDetails}=data;
      if(status.toLowerCase()==='success'){
        setCookie('token',accessToken,{maxAge:7200})
        setCookie('userId',userDetails.userId,{maxAge:7200})
        setTimeout(()=>{
          nav('/')
        },1000)
      }
    })
  };

  return (

    <div className="flex justify-center items-center h-[90vh] bg-transparent w-3/4 mx-auto">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Weather App</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link to='/signup' className='text-blue-600'>Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
