import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ViewerPerson from './Viewer/ViewerPerson';
import CreateUser from './Create User/CreateUser';
import useAuth from '../../hooks/useAuth';
import './DashboardInitial.css';


export default function DashboardInitial(){

    const { signout } = useAuth();
    const navigate = useNavigate();

    // Puxa a lista de usuários fakes criados no arquivo FakeData.js
    const userList = useSelector((state) => state.users.value)

    
    // Função para exibir a div que cria usuários
    function createUser(){
        document.getElementById('divAbsoluteCreate').style.display = 'flex';
    }

    const users = JSON.parse(localStorage.getItem("users"));
    console.log(users);

    return(
        <section className='sectionGeneralDashboard'>

            <CreateUser/>

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
                    <button id='btnCreateUser' onClick={createUser}>
                        <img src="https://img.icons8.com/small/16/000000/add.png"/>
                        Criar Usuário
                    </button>
                    
                </aside>

                <section className='sectionExbTeam'>
                        {users.map((user) => {
                            return(
                                <ViewerPerson 
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    user={user.username}
                                    email={user.email}
                                    image={user.urlPhoto}

                                />
                            )
                        })}
                            {/* <ViewerPerson 
                                key={newUsers.id}
                                id={newUsers.id}
                                name={newUsers.name}
                                user={newUsers.username}
                                email={newUsers.email}
                                image={newUsers.urlPhoto}

                            /> */}
                </section>

            </section>
        </section>
    )
}