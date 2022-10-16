import { useNavigate } from 'react-router-dom';

import './ViewerPerson.css';


export default function ViewerPerson({id, name, email, user, image}){

    const navigate = useNavigate();

    // Função que, ao clicar no botão de edição, direciona o usuário
    // à página que editará os dados
    function editUser(){
        navigate(`/DashboardInitial/edit-user/${id}`)
    }

    // Função para excluir usuário da lista
    const deleteUser = (id) => {

        const identification = id;
        console.log(identification, 'identificação do usuário');
        navigate(`/DashboardInitial/delete-user/${identification}`)


        // Puxa a chave "newUser" para fazer verificação de sua existência
        const newUser = JSON.parse(localStorage.getItem('newUser'));

        // Puxa a chave "users" para fazer verificação de sua existência
        const users = JSON.parse(localStorage.getItem('users'));

        // Se existir a chave "newUsers" no localStorage, executa
        if(newUser) {

            // Verifica o index do objeto que será deletado da array
            const index = newUser.findIndex( (element) => element.id === identification );
            // Exclui o usuário da array
            newUser.splice(index, 1);
            // Substitui a array do LocalStorage pela nova, com o 
            // usuário excluido
            localStorage.setItem('newUser', JSON.stringify(newUser))
            navigate(`/DashboardInitial`)

        } else{
            const index = users.findIndex( (element) => element.id === identification );
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users))
            navigate(`/DashboardInitial`)
        }
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
            <button id='btnDeleteUser' onClick={() => {deleteUser(id)}}>Deletar Usuário</button>
            <button id='btnEditUser' onClick={editUser}>Visualizar e Editar</button>
        </div>
    )
}