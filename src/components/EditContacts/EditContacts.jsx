import React, {useContext, useState, useEffect}from 'react'
import { todoContext } from '../../contexts/TodoContext'

function EditContacts(props) {

    const {contactToEdit, saveContact} = useContext(todoContext)
    const [newEditItem, setNewEditItem] = useState(contactToEdit)
    useEffect(() => {                     //как только contactToEdit поменяется, закидывай в newEditItem contactToEdit, и замени все что там находится с помощью setNewEditItem
        setNewEditItem(contactToEdit)
        
    }, [contactToEdit])
    
    console.log(contactToEdit)
    return (
        <div>
            {newEditItem ? 
            <>
            <input onChange={(e) =>{
                 let newObj = {
                     ...newEditItem, 
                     name: e.target.value
                    }
                    setNewEditItem(newObj)
                } 
            }
            value={newEditItem.name} type="text" />
            <input onChange={(e) =>{
                 let newObj = {
                     ...newEditItem, 
                     surname: e.target.value
                    }
                    setNewEditItem(newObj)
                } 
            }
            value={newEditItem.surname}type="text" />
            <input onChange={(e) =>{
                 let newObj = {
                     ...newEditItem, 
                     phone: e.target.value
                    }
                    setNewEditItem(newObj)
                } 
            }
            value={newEditItem.phone}type="text" />
            <button onClick={() => saveContact(newEditItem, props.history)}>Save</button>
            
        </> 
        :<h1>Loading</h1>}
        </div>
    )
}

export default EditContacts


//<input name = {inpName}
// onChange={(e) => setName(e.target.value)} type="text"/>
// <input surname = {inpSurname}
// onChange={(e) => setSurname(e.target.value)}type="text"/>
// <input phone = {inpPhone}
// onChange={(e) => setPhone(e.target.value)}type="text"/>