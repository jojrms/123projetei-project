import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser, editUser } from '../../../features/Users';
import EditUser from '../Edit User/EditUser';

import './ViewerPerson.css';


export default function ViewerPerson({id, name, email, user, image}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Função que, ao clicar no botão de edição, direciona o usuário
    // à página que editará os dados
    function editUser(){
        navigate(`/DashboardInitial/edit-user/${id}`)
    }


    return(
        <div className="divBackground" id='divBackground'>
            <h1>{id}</h1>
            <span style={{backgroundImage: `url("${image}")`}} className='spanImagePerson'/>
            <div>
                <p>{name}</p>  
                <p>Email: {email}</p>  
            </div>

            {/* BOTÃO COM FUNÇÃO DE DELETAR O USUÁRIO */}
            <button id='btnDeleteUser' onClick={() => {dispatch(deleteUser({id: id}))}}>Deletar Usuário</button>
            <button id='btnEditUser' onClick={editUser}>Visualizar e Editar</button>
        </div>
    )
}