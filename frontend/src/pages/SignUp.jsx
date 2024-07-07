import React, { useRef, useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';


function Signup() {
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const[cookie,setCookie]=useCookies([]);
    const nav=useNavigate();
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(name.current.value,email.current.value,password.current.value);
        try{

            await fetch('http://localhost:8002/user/new',{
                method:'POST',
                header:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "username":name.current.value,
                    "emailId":email.current.value,
                    "password":password.current.value
                })
            }).then(res=>res.json()).then((data)=>{
                const{status,accessToken,userDetails}=data;
                if(status.toLowerCase()==='success'){
                    setCookie('token',accessToken,{maxAge:7200})
                    setCookie('userId',userDetails.userId,{maxAge:7200})
                    setTimeout(()=>{
                        nav('/home');
                    },1000);
                }
                else{
                    console.log(data.message+"\n"+data.error);
                }
            })
        }
        catch(error){
            console.log("Error"+error)
        }
    };

    return (
        <div className="flex justify-center items-center h-[90vh] bg-transparent w-3/4  mx-auto">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for Weather App</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            ref={name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            ref={email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />

                    </div>
                    <div className="mb-4">
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
                    <div className="flex items-center justify-between space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
              Register
            </button>
            <Link to='/login' className='text-blue-600 text-sm text-center'>Already have an account</Link>
          </div>
                </form>
            </div>
        </div>

    )
}
export default Signup