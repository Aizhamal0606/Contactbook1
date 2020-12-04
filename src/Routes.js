import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Home from './components/Home/Home';
import EditContacts from './components/EditContacts/EditContacts';
import {history} from "./helpers/history"
import Details from './components/Details/Details';

function Routes() {
    return (
        <BrowserRouter history = {history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddTodo} />
            <Route exact path="/list" component={TodoList} />
            <Route exact path="/edit" component={EditContacts} />
            <Route exact path="/details" component={Details} />


        </Switch>
        </BrowserRouter>
            
        
    );
};

export default Routes
