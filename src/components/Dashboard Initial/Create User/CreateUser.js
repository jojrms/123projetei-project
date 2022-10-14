import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../features/Users';

import './CreateUser.css';


export default function CreateUser(){

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value)

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
    })

    const createUser = async() => {

        if(data.name.length < 5 || data.email.length < 10 || data.username.length < 5){
            window.alert('Não foi possível criar este usuário. Preencha todos os campos corretamente')
        } else{
            dispatch(addUser({id: userList[userList.length - 1].id + 1, name: data.name , username: data.username , email: data.email}))
            document.getElementById('divAbsoluteCreate').style.display = 'none';
        }

        
    }

    function closeDiv(){
        document.getElementById("divAbsoluteCreate").style.display = 'none';
        navigate("/DashboardInitial")
    }

    return(
        <div className='divAbsolute' id='divAbsoluteCreate'>
            <span id="spanBackgroundCreate">
                <div>
                    <img src="https://img.icons8.com/small/32/000000/user-group-man-man.png"/>
                    <h1>Configure a conta do usuário</h1>
                    <button id='btnClose' onClick={closeDiv}/>
                </div>
                <p>Crie uma conta para o usuário físico que terá acesso ao dashboard</p>
                <input type='text' placeholder='Nome Completo' onChange={(event) => {setData({...data, name: event.target.value})}}/>
                <input type='text' placeholder='Username' onChange={(event) => {setData({...data, username: event.target.value})}}/>
                <input type='email' placeholder='Email' onChange={(event) => {setData({...data, email: event.target.value})}}/>
                <button id='btnAddPerson' onClick={createUser}>
                    <img src="https://img.icons8.com/small/16/F5F5F5/add.png"/>
                    Criar Usuário
                </button>  
            </span>
        </div>
    )
}