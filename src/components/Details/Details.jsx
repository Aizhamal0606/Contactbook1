import React, {useContext, useState, useEffect} from 'react';
import { todoContext } from '../../contexts/TodoContext'
function Details(props) {
    const {contactToEdit, saveContact} = useContext(todoContext)
    const [newEditItem, setNewEditItem] = useState(contactToEdit)
    useEffect(() => {                     //как только contactToEdit поменяется, закидывай в newEditItem contactToEdit, и замени все что там находится с помощью setNewEditItem
        setNewEditItem(contactToEdit)
        
    }, [contactToEdit])
    return (
        <div>
            {newEditItem ? 
            <>
            <h4><span>Name: </span>{newEditItem.name}</h4>
            <h4><span>Surname: </span>{newEditItem.surname}</h4> 
            <h4><span>Phone: </span>{newEditItem.phone}</h4> 

            <button onClick={() => saveContact(newEditItem, props.history)}>Home</button>
            
        </> 
        :<h1>Loading</h1>}
        </div>
    )
}


export default Details
