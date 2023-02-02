import React from 'react';
import css from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'posts'}>Comments</NavLink>
        </div>
    );
};

export default Header;