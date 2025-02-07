import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
    const [message, setMessage] = useState('Verifying...');
    const { token } = useParams();

  
    useEffect(() => {
      const verify = async () => {
        try {
          await axios.get(`http://localhost:3001/user/verify/${token}`);
          setMessage('Email verified successfully!');
        } catch {
          setMessage('Verification failed. The link may have expired.');
        }
      };
      verify();
    }, [token]);  
  
    return (
      <div>
        {/* <h2>Email Verification</h2> */}
        <p className="flex items-center justify-center text-green-600">{message}</p>
      </div>
    )};

    export default VerifyEmail;



