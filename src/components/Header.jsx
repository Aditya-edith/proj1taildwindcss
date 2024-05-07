import React from 'react'
import {FaBars} from 'react-icons/fa'

const header = () => {
  return (
  <div className="flex justify-between">
    <div className="flex items-center justify-center gap-2">
    <img className="h-" src="./public/assets/logo.svg" alt="" />
   <button className="h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl px-2.5 py-1.5">Hosterr Is Hiring</button>
    </div>
    <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-8 "> 
      <li><a href="#">Plans</a></li>
      <li><a href="#">Find Domain</a></li>
      <li><a href="#">Why Hosterr</a></li>
    </ul>
    <div className="hidden lg:flex justify-center items-center font-lato gap-6">
      <a href="#" className="text-gray-400 ">Sign In</a>
      <button className="h-14 bg-blue-400 hover:bg-blue-600 text-white  rounded-md px-4 py-3">Join Waitlist</button>
    </div >
    <div className="hover:bg-slate-200 lg:hidden">
    <FaBars  />
    </div>
    </div> 
  )
}

export default header