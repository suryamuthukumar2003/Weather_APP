import React from 'react'
import { WiDegrees } from "react-icons/wi";
import SearchBar from './SearchBar';
import clearsky from '../assets/clearsky.png'
import { FaWind } from "react-icons/fa6";
import { weatherIcons } from '../data/data';
function WeatherCard() {
  return (
    <div className='w-3/4 md:w-[500px] p-5 flex flex-col shadow-lg space-y-3 items-center bg-white rounded-lg'>
        <div className='w-3/4'>
            <SearchBar/>
        </div>
        <div>
            <img src={weatherIcons['50d']} alt="" className='w-[160px] md:w-32 lg:w-48'/>
        </div>
        <div className='flex'>
            <span className='text-6xl font-medium self-baseline'>20</span><span className='text-4xl'><WiDegrees/></span><span className='text-5xl self-baseline'>C</span>
        </div>
        <div className='flex space-x-2'>
            <span className='text-xl'>London,</span><span className='text-xl'>GB</span>
        </div>
        <div className='flex justify-between w-3/4'>
            <div className='flex flex-col items-center space-y-1'>
                <div className='flex'>

            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000"><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/></svg>
            <span>Humidity</span>
                </div>
                <span>123456</span>
            </div>
            <div className='flex flex-col items-center space-y-1'>
                <div className='flex items-center space-x-1'>
                    <FaWind/>
            <span>Wind Speed</span>
                </div>
                <span>123</span>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard;