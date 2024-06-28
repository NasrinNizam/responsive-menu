import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";

export const Navbar = () => {

    const [show , setShow] = useState(false)

    const handleAdd = ()=>{
        setShow(!show)
    }

  return (
    <>

    <nav className="p-5 bg-indigo-500">
        <div className="container">
            <div className="menu flex justify-between">
                <div className="logo-col">
                    <h1 className="text-4xl font-bold text-white">Logo</h1>
                </div>
                <div className="menu-row relative">
                <LuMenuSquare onClick={handleAdd} className="block text-white text-4xl md:hidden" />
                   {
                    show &&
                  <ul className=" w-[300px] bg-slate-400 text-center py-5 flex flex-col gap-5 text-xl font-semibold text-white absolute top-[150%] right-0">
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Project</Link></li>
                    <li><Link to="">Contact</Link></li>
                    <li><Link to="">Help</Link></li>
                  </ul>
                   }
                   <div className="hidden md:block">
                     <ul className="flex gap-5 text-xl font-semibold text-white">
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Project</Link></li>
                        <li><Link to="">Contact</Link></li>
                        <li><Link to="">Help</Link></li>
                     </ul>
                   </div>
                </div>
            </div>
        </div>
    </nav>
                    
    
    </>
  )
}
