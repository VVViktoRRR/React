import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './HeaderStyle.module.css'

const Header = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={css.wrap}>
                  <Outlet/>
            </div>
            <div className={css.footer}>
                @React_Lesson_3_ClassWork
            </div>
        </>
    );
};

export {Header};