import React from 'react'
import { IoIosSearch } from "react-icons/io";
function SearchBar() {
  return (
    <form>
        <div className='flex bg-slate-200 justify-between px-2 rounded-lg border-2 border-cyan-300'>
            <input type="text" name="" id="" placeholder='Search city...' className='border-0 outline-none p-1 bg-transparent w-full'/>
            <span className='text-lg md:text-2xl self-center cursor-pointer'><IoIosSearch/></span>
        </div>
  
    </form>
  )
}

export default SearchBar;