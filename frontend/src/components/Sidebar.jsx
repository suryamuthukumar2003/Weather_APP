import React, { useContext } from 'react'
import HistoryCard from './HistoryCard'
import { Link } from 'react-router-dom'
export default function Sidebar({toggle}) {
    const historydata=[{
        id:0,
        location:"Coimbatore"
    },
    {
        id:0,
        location:"Coimbatore"
    },
    {
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },{
        id:0,
        location:"Coimbatore"
    },];

  return (
    <div className={`fixed top-[10] left-0 h-screen w-[80%] sm:w-[270px] z-[500] shadow-[2px_0_10px_rgba(0,0,0,0.1)] bg-cyan-200 ${!toggle?'hidden':'block '} flex flex-col pt-9 pb-20 md:static`}>
        <div className='h-5'></div>
        <div className='overflow-y-scroll scrollbar scrollbar-w-[5px] scrollbar-h-2 scrollbar-thumb-rounded-md scrollbar-thumb-slate-600 p-1 w-full'>
            <div>
                {historydata.map((data,index)=>{
                    return(
                        <HistoryCard key={index} data={data}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
