import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../../features/Users';


import './EditUser.css';


export default function EditUser(){

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const userList = useSelector((state) => state.users.value)

    const existUser = userList.filter(user => user.id === parseInt(params.id))
    const {name, username, email} = existUser


    const [data, setData] = useState({
        name: existUser[0].name,
        username: existUser[0].username,
        email: existUser[0].email,
    });

    console.log(data);

    const handleEditUser = () => {
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
        <div className='divAbsolute' id='divAbsoluteEdit' style={{display: 'flex'}} onClick={() => {document.getElementById('divAbsoluteEdit').style.display = 'none'; navigate("/DashboardInitial")}}>
            <span id="spanBackgroundEdit">
                <div>
                    <img src="https://img.icons8.com/small/32/000000/create-new.png"/>
                    <h1>Modifique a conta do usuário</h1>
                </div>
                <p>Edite a conta do usuário físico que tem acesso ao dashboard</p>
                <input type='text' value={data.name} placeholder='Nome Completo' onChange={(e) => setData({...data, name: e.target.value})}/>
                <input type='text' value={data.username} placeholder='Username'  onChange={(e) => setData({...data, username: e.target.value})}/>
                <input type='email' value={data.email} placeholder='Email'  onChange={(e) => setData({...data, email: e.target.value})}/>

                <button id='btnEditUser' onClick={handleEditUser}>Confirmar Edição</button>
            </span>
        </div>
    )
}