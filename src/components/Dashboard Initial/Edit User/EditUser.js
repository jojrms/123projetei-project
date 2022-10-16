import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../../features/Users';
import useAuth from '../../../hooks/useAuth';


import './EditUser.css';


export default function EditUser(){

    const { signout } = useAuth();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    // Guardando em uma let o array que contem os 
    // usuários fakes e os já criados, para fazer futura verificação
    let allUsers = JSON.parse(localStorage.getItem('newUser'));

    // Filtra da lista o usuário que possui a mesma ID do parâmetro na URL
    const existUser = allUsers.filter(user => user.id === parseInt(params.id))

    // Armazena os dados deste usuário
    const {name, username, email} = existUser[0]

    const [data, setData] = useState({
        name,
        username,
        email,
    });

    // Função para editar usuário. Exibe as informações no input e, após editar
    // retorna ao dashboard.
    function handleEditUser(){

        // Função para modificar o usuário
        const userModificate = dispatch(editUser({
            id: params.id,
            name: data.name,
            username: data.username,
            email: data.email
        }));

        // Armazeno na constante 'index' o número do índice do usuário
        // que será modificado
        const index = allUsers.findIndex( (element) => element.id === parseInt(params.id) );

        // Substitui o usuário da array
        allUsers.splice(index, 1, userModificate.payload);

        console.log(userModificate.payload);
        localStorage.setItem('newUser', JSON.stringify(allUsers))
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