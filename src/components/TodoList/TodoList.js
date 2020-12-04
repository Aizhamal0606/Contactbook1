import React, {useContext, useEffect} from 'react';
import { todoContext } from '../../contexts/TodoContext';
import EditContacts from '../EditContacts/EditContacts';
import {Link} from 'react-router-dom';


function TodoList() {
    const {todos, 
        getTodosData, 
        changeStatus, 
        deleteContact, 
        editContact} = useContext(todoContext)

    useEffect (() => {

        getTodosData()
    }, [])

    
 
    return (
     
          
           <ul>
               {todos.map(item => (
                   
                   <li key={item.id} className={item.status ? "completed" : ""}>
                       <input 
                       type="checkbox" checked={item.status} onChange = {() => changeStatus(item.id)}/>
                        {item.name} {item.surname} {item.phone} 
                        <button onClick={() => deleteContact(item.id)}>Delete</button>
                        <Link to = "/edit">

                        <button onClick={() => editContact(item.id)}>Edit</button>
                        </Link>
                        <Link to = "/details">

                        <button onClick={() => editContact(item.id)}>Details</button>
                        </Link>
                        </li> //вызываем все инпуты - отражает
               ))}
           </ul>
            
    
    )
}

export default TodoList
