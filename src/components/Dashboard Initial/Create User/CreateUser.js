import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../features/Users';

import './CreateUser.css';


export default function CreateUser(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Puxa a lista com os usuários fakes criados no FakeData.js
    const userList = useSelector((state) => state.users.value)

    // Armazena os dados fakes em uma array no localStorage
    // Para usar futuramente
    const usersExistent = localStorage.setItem("users", JSON.stringify(userList))

    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
    })


    // Função que verifica se os campos foram preenchidos. Caso forem, cria o usuário e retorna
    // para o dashboard.
    // OBS: NÃO FOI REALIZADA VERIFICAÇÃO IDEAL
    const createUser = async() => {

        if(data.name.length < 5 || data.email.length < 10 || data.username.length < 5){
            window.alert('Não foi possível criar este usuário. Preencha todos os campos corretamente')
        } 
        else{
            // Cria uma constante para armazenar em uma array os dados 
            // do usuário que será criado
            const user = dispatch(addUser({
                id: userList[userList.length - 1].id + 1, 
                name: data.name , 
                username: data.username , 
                email: data.email
            }))

            console.log('novo usuario no dispatch', user.payload);

            // Puxa a chave "newUser" para fazer verificação de sua existência
            const newUser = JSON.parse(localStorage.getItem('newUser'));

            // Se existir essa chave com um valor, executa
            if( newUser ){ 

                // Unifico a array do localStorage com o objeto
                // que contem o novo usuário
                newUser.push(user.payload);
                localStorage.setItem('newUser', JSON.stringify(newUser));

                console.log(newUser, 'A lista de usuários existentes foi atualizado');
            } else{

                // Armazeno no localStorage uma nova chave com o 
                // valor do novo usuário
                localStorage.setItem('newUser', JSON.stringify([user.payload]))

                console.log(newUser, 'Foi criado uma lista com 1 novo usuário');
            }
            


            // Resgato a array do localstorage para inserir o novo usuário
            // let users = JSON.parse(localStorage.getItem('users'));
            // users.push(newUser)
            // localStorage.setItem('users', JSON.stringify(users))


            document.getElementById('divAbsoluteCreate').style.display = 'none';
        }

        
    }

    // Função para fechar a div que cria os usuários
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