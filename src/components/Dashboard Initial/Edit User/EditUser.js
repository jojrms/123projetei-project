import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../../features/Users';
import useAuth from '../../../hooks/useAuth';


import './EditUser.css';


export default function EditUser(){

    const { signout } = useAuth();

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const userList = useSelector((state) => state.users.value)

    const users = useSelector(store => store.users.value);
    console.log(users);

    const existUser = users.filter(user => user.id === parseInt(params.id))
    const {name, username, email} = existUser[0]

    const [data, setData] = useState({
        name,
        username,
        email,
    });

    console.log(data);

    function handleEditUser(){
        setData({
            name: '',
            username: '',
            email: '',
        });
        dispatch(editUser({
            id: params.id,
            name: data.name,
            username: data.username,
            email: data.email
        }));
        navigate("/DashboardInitial")
    }


    return(
        <div className='divAbsolute' id='divAbsoluteEdit'>
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

            <section>

                <span id="spanBackgroundEdit">
                    <div>
                        <img src="https://img.icons8.com/small/32/000000/create-new.png"/>
                        <h1>Modifique a conta do usuário</h1>
                    </div>
                    <p>Edite a conta do usuário físico que tem acesso ao dashboard</p>
                    <aside>
                        <label>Nome do Usuário</label>
                        <input type='text' value={data.name} placeholder='Nome Completo' onChange={(e) => setData({...data, name: e.target.value})}/>
                        <label>Username do Usuário</label>
                        <input type='text' value={data.username} placeholder='Username'  onChange={(e) => setData({...data, username: e.target.value})}/>
                        <label>Email</label>
                        <input type='email' value={data.email} placeholder='Email'  onChange={(e) => setData({...data, email: e.target.value})}/>
                        
                        <button id='btnEditUser1' onClick={handleEditUser}>Confirmar Edição</button>
                    </aside>

                </span>

            </section>
            
            
        </div>
    )
}