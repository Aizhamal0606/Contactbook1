import React, {useState, useContext} from 'react';
import { todoContext } from '../../contexts/TodoContext';


function AddTodo() {



    const [inpName, setName] = useState('')
    const [inpSurname, setSurname] = useState('')
    const [inpPhone, setPhone] = useState('')
    const [error, setError] = useState(false)

  
    const {addContact} = useContext(todoContext)
     
    
    function handleClick (){
        if (!inpName || !inpSurname || !inpPhone) {
            setError(true)
            return
        } else {
            setError(false)
        }


        let newObj = {   ///this is item in TodoList
            name: inpName,
            surname: inpSurname,
            phone: inpPhone,
            status: false
        }  
        
      addContact(newObj)
      setName('')
      setSurname('')
      setPhone('')
    }

    return (
        <div>
            <input
            value={inpName}
            onChange={(e) => setName(e.target.value)} type="text"/>
            <input value = {inpSurname}
            onChange={(e) => setSurname(e.target.value)}type="text"/>
            <input value = {inpPhone}
            onChange={(e) => setPhone(e.target.value)}type="text"/>
                     
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default AddTodo

