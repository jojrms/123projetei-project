import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ViewerPerson from './Viewer/ViewerPerson';
import { addUser } from '../../features/Users';
import EditUser from './Edit User/EditUser';

import './DashboardInitial.css';

export default function DashboardInitial(){

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return(
        <section className='sectionGeneralDashboard'>

            {/* <EditUser/> */}

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

                <span className='spanPhotoProfile'/>
            </header>

            <section className='sectionExbInfoTeams'>
                <aside className='asideExbFunctions'>
                    <h1>Teams</h1>
                    <h2>Você é o administrador da equipe</h2>

                    <button id='btnListPeople'>
                        <img src="https://img.icons8.com/small/16/000000/gender-neutral-user.png"/>
                        Listar Usuários
                    </button>
                    <button id='btnCreateUser'>
                        <img src="https://img.icons8.com/small/16/000000/add.png"/>
                        Criar Usuário
                    </button>
                    {/* <div id='formAddPerson' className='AddUser'>
                        <h1>Criar Usuário</h1>
                        <input type='text' placeholder='Nome do Usuário' onChange={(event) => {setName(event.target.value)}}/>
                        <input type='email' placeholder='Email' onChange={(event) => {setEmail(event.target.value)}}/>
                        <button id='btnAddPerson' onClick={() => {dispatch(addUser({id: userList[userList.length - 1].id + 1, name , email}))}}>
                            <img src="https://img.icons8.com/small/16/F5F5F5/add.png"/>
                            Adicionar
                        </button>    
                    </div> */}
                    
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