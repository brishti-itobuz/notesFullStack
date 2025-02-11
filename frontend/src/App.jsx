import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home.jsx";
import SignupForm from "./pages/Signup.jsx";
import VerifyEmail from "./pages/Verify.jsx";
import SignInForm from "./pages/SignIn.jsx";
import Notes from "./pages/Notes.jsx";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/SignUp" element={<SignupForm/>} />
        <Route path="/verify/:token" element={<VerifyEmail/>} />
        <Route path="/SignIn" element={<SignInForm/>} />
        <Route path="/Notes" element={<Notes/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
