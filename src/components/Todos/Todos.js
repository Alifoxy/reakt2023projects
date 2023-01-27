import React from 'react';
import { useEffect, useState } from "react";
import {Todo} from "./Todo";
import {getTodos} from "../../services/api/getInfo/getTodosInfo";

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos.getAll().then(({data}) => setTodos([...data]))
    }, []);

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};