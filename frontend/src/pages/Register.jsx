// src/pages/Register.jsx
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import config from '../config';


const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const [message,setMessage]=useState('');
    const navigate=useNavigate();
     const fetchData=async ()=>{
        try {
            const res= await fetch(`${config.backendURL}/api/auth/register`,{
                method:'POST',
                headers:{  
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({email,password,username})
            });
            const data=await res.json();
           

            
            if(res.ok)
            {
                console.log(`user ${data.username} created successfully! `);
                setMessage("User created successfully!");

                setTimeout(() => {
                    setMessage(" ");
                    toast.success("user registered successfully!")
                    // navigate('/login')
                  }, 1000);
               
            }
           else{
            setMessage(data.message)
           }
            
        } catch (error) {
            console.error("error fetching data!",error);
        }
       };
    
       const handleSubmit=(e)=>{
        e.preventDefault();
        fetchData();
       }
       
  return(
    <AuthForm
     type="register"
      handlesubmit={handleSubmit} 
      email={email}
      setEmail={setEmail}
      setPassword={setPassword}
       password={password}
       username={username}
       setUsername={setUsername}
       message={message}
       
       />
  ) 
};

export default Register;
