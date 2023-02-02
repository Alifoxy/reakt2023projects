import React from 'react';
import { useForm } from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {catValidator} from "../../../validators/userValidator";


export const UsersForm = ({setUsers}) => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(catValidator)});

    const submit = async (data) => {
        await getUsers.createUser(data).then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" {...register('username')}/>
            {errors.username&&<span>{errors.username.message}</span>}
            <button disabled={!isValid}>Create new user</button>
        </form>
    );
};