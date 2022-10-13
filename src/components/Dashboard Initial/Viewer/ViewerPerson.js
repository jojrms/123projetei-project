import './ViewerPerson.css';


export default function ViewerPerson({name, email}){

    return(
        <div className="divBackground">
            <span className='spanImagePerson'/>
            <div>
                <p>{name}</p>  
                <p>{email}</p>  
            </div>
        </div>
    )
}