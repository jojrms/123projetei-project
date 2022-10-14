import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../../../features/Users';
import EditUser from '../Edit User/EditUser';

import './ViewerPerson.css';


export default function ViewerPerson({id, name, email, user, image}){

    const dispatch = useDispatch();

    function editUser({name, email, user}){
        const editUser = <EditUser name={name} email={email} user={user}/>

        console.log(editUser.props);
    }

    console.log( user, name, image);

    return(
        <div className="divBackground" id='divBackground'>
            <h1>{id}</h1>
            <span style={{backgroundImage: `url("${image}")`}} className='spanImagePerson'/>
            <div>
                <p>{name}</p>  
                <p>Email: {email}</p>  
            </div>
            <button id='btnDeleteUser' onClick={() => {dispatch(deleteUser({id: id}))}}>Deletar Usuário</button>
            <button id='btnEditUser' onClick={editUser({email: 'teste'})}>Visualizar e Editar</button>
        </div>
    )
}