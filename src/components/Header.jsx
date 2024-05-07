import React from 'react'
import {FaBars} from 'react-icons/fa'

const header = () => {
  return (
  <div className="flex justify-between">
    <div className="flex items-center justify-center gap-2">
    <img className="h-" src="./public/assets/logo.svg" alt="" />
   <button className="h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl px-2.5 py-1.5">Hosterr Is Hiring</button>
    </div>
    <FaBars className="hover:bg-slate-200" />
    </div> 
  )
}

export default header