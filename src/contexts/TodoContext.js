import axios from 'axios';
import React, {useReducer} from 'react';

export const todoContext = React.createContext();

const INIT_STATE = {
    todos: [],
    contactToEdit: null

}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){

        case "GET_TODOS_DATA": 
        return {...state, todos: action.payload}  //вытягиваем данные

        case "EDIT_CONTACT":
            return {...state, contactToEdit: action.payload}
        default: return state
    }
}

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getTodosData = async () => {
        let {data} = await axios('http://localhost:8000/todos')
        dispatch({
            type: "GET_TODOS_DATA",
            payload: data
        })
    }


    const addContact = async (newContact) => {
        await axios.post('http://localhost:8000/todos', newContact)
        
        getTodosData()
    }

    const changeStatus = async (id) => {
       let {data} = await axios(`http://localhost:8000/todos/${id}`)

        await axios.patch(`http://localhost:8000/todos/${id}`, {status: !data.status})
        getTodosData()
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/todos/${id}`)
        getTodosData()
    }

    const editContact = async (id) => {
        let  { data } = await axios(`http://localhost:8000/todos/${id}`)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })

    }

    const saveContact = async (newContact, history) => {
        await axios.patch(`http://localhost:8000/todos/${newContact.id}`, newContact)
        history.push('/')
    }


    return (
        <todoContext.Provider value={{
            todos: state.todos,
            contactToEdit: state.contactToEdit,
            addContact, 
            getTodosData,
            changeStatus,
            deleteContact,
            editContact,
            saveContact
        }}>

            {children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider; 