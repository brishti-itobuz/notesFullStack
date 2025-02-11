import React from 'react'
import notesLogo from "../assets/notes.svg";
import { useNavigate } from "react-router-dom";

export default function NavBar({redirect}) {
  const navigate = useNavigate();
  return (
    <div className="flex bg-yellow-200 justify-between items-center">
            
                <div className="flex justify-between items-center">
                <img src={notesLogo} className="h-[65px] w-[65px] md:ml-[25px] lg:ml-[30px] xl:ml-[40px] p-[9px]"/>
                <h4 className="flex font-sans text-xl font-semibold italic text-[#A89C29] italic md:text-2xl lg:text-[30px] items-center justify-center">NotesApp</h4>
                </div>
            <button onClick={() => navigate("/SignUp")} className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-[10px] md:mr-[25px]">{redirect.path}</button>
            
       </div>
  )
}
