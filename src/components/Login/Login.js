import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import './Login.css';

export default function Login(){

    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !password){
            setError("Preencha todos os campos");
            return;
        }
        const res = login(email, password);

        if(res){
            setError(res);
            return;
        }

        navigate("/DashboardInitial")
    };

    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    let userUse;
    userUse = [{email: '123projetei@gmail.com', password: '123projetei'}];
    localStorage.setItem("users_db", JSON.stringify(userUse));

    return(
        <>
            <section className='sectionGeneral'>
                <aside className='asideExbForm'>
                    <h1>Welcome Back</h1>
                    <h2>Continue with Google or enter your details to <br/> get sign in to your account</h2>
                    <button>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                        <p>Log in with Google</p>
                    </button>
                    <span>
                        <div>
                            <p>or</p>    
                        </div>
                    </span>

                    <div>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}/>
                        <input type='password' placeholder='Password' value={password} onChange={(e) => [setPassword(e.target.value), setError("")]}/>
                        <p className='error'>{error}</p>
                        <button  id='btn-login' value='Log in' onClick={handleLogin}>Entrar</button>
                    </div>
                </aside>

                <aside className='asideExbDecoration'>
                    <i/>
                    <p>Copyrigth @room 2022 | <a>Privacy Policy</a></p>
                </aside>    
            </section>  
        </>
    )
}