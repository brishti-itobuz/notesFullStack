
import notesAppImage from "../assets/notesAppImage.avif";
import React from "react";
import NavBar from "../components/NavBar.jsx";





const HomePage = () => {
    return (
         <div>
        <NavBar redirect={{path:"SignUp"}}></NavBar>
        <img src={notesAppImage} />
       </div>

    )
}

    

export default HomePage;