import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import './Login.css';

export default function Login(){

    const {login} = useAuth();
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password:"",
        error: "",
    })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    //Função que verificará se todos os campos foram preenchidos e,
    //caso sim, faz login e direciona ao dashboard
    const handleLogin = () => {
        if(!email | !password){
            setError("Preencha todos os campos");
            return;
        }

        //Executa função de login
        const res = login(email, password);

        if(res){
            setError(res);
            return;
        }

        navigate(`/DashboardInitial`)
    };


    // Lançando usuário e senha no localstorage para acesso
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    let userUse = [{email: '123projetei@gmail.com', password: '123projetei'}];
    localStorage.setItem("users_db", JSON.stringify(userUse));

    return(
        <>
            <section className='sectionGeneral'>
                <aside className='asideExbForm'>
                    <h1>Welcome Back</h1>
                    <h2 style={{width: '100%'}}>Continue with Google or enter your details to <br/> get sign in to your account</h2>
                    <button>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                        <p>Log in with Google</p>
                    </button>
                    <span>
                        <div>
                            <p>or</p>    
                        </div>
                    </span>

                    {/* INPUTS COM AS INFORMAÇÕES PARA LOGIN */}
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