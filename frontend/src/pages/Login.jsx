// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import config from '../config';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const fetchData = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await res.json();
            if (!res.ok) {

                console.log('login failed!');
                toast.error('login error!')
                setMessage(data.message);
                setTimeout(() => {
                    setMessage('');
                }, 1000);
                // localStorage.setItem("login-token",token)

            }
            else {
                toast.success("login success", {
                    autoClose: 500
                });
                localStorage.setItem("login-token", data.token);
                navigate('/')

            }
        } catch (error) {
            console.error("error fetching data!", error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }


    return (
        <AuthForm
            type="login"
            handlesubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            setPassword={setPassword}
            password={password}
            username={username}
            setUsername={setUsername}
            message={message}
        />
    );

};

export default Login;
