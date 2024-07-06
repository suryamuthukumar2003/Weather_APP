import React, {Fragment, useContext, useState } from 'react'
import Sidebar from '../components/Sidebar';
import WeatherCard from '../components/WeatherCard';
import { Status } from '../App';
function Home() {
  const[toggle,setToggle]=useState(false);
  const{navWidth}=useContext(Status);
  return (
    <div className='flex ' style={{ height: `calc(100vh - ${navWidth}px)`}}>
      <div>
      <div className={`mt-1 bg-gradient-to-r from-blue-500 to-cyan-400  fixed left-2 top-[70px] rounded-full  flex  items-center cursor-pointer z-[999] ${toggle? 'w-[150px] py-1 px-8':'w-[40px] p-1'} `} onClick={()=>setToggle((prev)=>!prev)}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg><span className={`${toggle? 'block':'hidden'}`}>History</span></div>
      <Sidebar toggle={toggle}/>
      </div>
      <div className='flex justify-center items-center w-full'>
        <WeatherCard/>
      </div>
    </div>
  )
}

export default Home;