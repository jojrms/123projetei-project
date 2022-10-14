import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ViewerPerson from './Viewer/ViewerPerson';

import EditUser from './Edit User/EditUser';
import CreateUser from './Create User/CreateUser';


import './DashboardInitial.css';
import useAuth from '../../hooks/useAuth';

export default function DashboardInitial(){

    const { signout } = useAuth();
    const navigate = useNavigate();

    const userList = useSelector((state) => state.users.value)

    return(
        <section className='sectionGeneralDashboard'>

            <CreateUser/>
            <EditUser/>

            <header>
                <i/>
                <span className='spanSearch'>
                    <img src="https://img.icons8.com/ios-glyphs/480/000000/search--v1.png"/>
                    <input type='search' placeholder='Search'/>
                </span>

                <ul>
                    <li className='liFocus'>
                        <p>People</p>
                    </li>
                    <li>
                        <p>Organization</p>
                    </li>
                </ul>

                <button id='btnExit' onClick={() => [signout(), navigate("/")]}>Sair</button>
            </header>

            <section className='sectionExbInfoTeams'>
                <aside className='asideExbFunctions'>
                    <h1>Teams</h1>
                    <h2>Você é o administrador da equipe</h2>

                    <button id='btnListPeople'>
                        <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                        Listar Usuários
                    </button>
                    <button id='btnCreateUser' onClick={() => {document.getElementById('divAbsoluteCreate').style.display = 'flex'; navigate("/DashboardInitial/create-user")}}>
                        <img src="https://img.icons8.com/small/16/000000/add.png"/>
                        Criar Usuário
                    </button>
                    
                </aside>

                <section className='sectionExbTeam'>
                        {userList.map((user) => {
                            return(
                                <ViewerPerson 
                                    id={user.id}
                                    name={user.name}
                                    user={user.username}
                                    email={user.email}
                                    image={user.urlPhoto}

                                />
                            )
                        })}
                </section>

            </section>
        </section>
    )
}