import React from 'react';
import notesLogo from "../assets/notes.svg"
import notesAppImage from "../assets/notesAppImage.avif"




const HomePage = () => {
    return (
         <div>
        <div className="flex bg-yellow-200 items-center">
            <img src={notesLogo} className="h-[65px] w-[65px] ml-[18px] md:ml-[25px] lg:ml-[30px] xl:ml-[40px] p-[9px]"/>
            <h4 className="font-sans text-xl font-semibold italic text-[#A89C29] italic md:text-2xl lg:text-[30px]">NotesApp</h4>

            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[0px]">SignUp</button>
        </div>

        <img src={notesAppImage} />
       </div>

    )
}

    

export default HomePage;