import React, { useContext, useLayoutEffect, useRef } from 'react'
import brandlogo from '../assets/brandlogo.png';
import { Link } from 'react-router-dom';
import { Status } from '../App';
function Appbar() {
  const navbarRef = useRef(null);
  const {setNavWidth}=useContext(Status);
  useLayoutEffect(() => {
    if (navbarRef.current) {
      const navbarWidth = navbarRef.current.offsetHeight;
      setNavWidth(navbarWidth);
    }
  }, []);
  return (
    <nav ref={navbarRef} className='pt-4 shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-7 sticky'>
      <div className='md:flex justify-between'>
        <div className='flex md:justify-between pb-2 space-x-4 justify-center' >
          <Link to='/'>
            <div className='flex space-x-1 justify-center'>
                <span className='object-cover w-[30px] h-1/12 md:w-[45px] md:h-1/12'><img src={brandlogo} className=''/></span>
                <span className='text-white text-3xl md:text-4xl font-bold'>Weather</span>
                <span className='text-white text-2xl md:text-3xl font-medium self-center'>App</span>
            </div>
            </Link>
        </div>
        <div className={`md:self-center hidden md:block`}>
            <ul className='w-full md:flex md:space-x-8 space-y-4 md:space-y-0'>
                <li>
                    <Link to={'/about'} className='menu'>About</Link>
                </li>
                <li>
                    <Link to='/login' className='menu'>Login</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Appbar;
