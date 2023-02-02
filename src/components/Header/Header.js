import React from 'react';
import css from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
        </div>
    );
};

export default Header;