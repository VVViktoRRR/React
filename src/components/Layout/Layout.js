import React from 'react';
import css from './Layuot.module.css'
import { NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
 <>
     <div className={css.header}>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/users">Users</NavLink>
         <NavLink to="/posts">Posts</NavLink>
     </div>
    <div className={css.wrap}>
        <Outlet/>
    </div>
     <div className={css.footer}>
         @React_Lesson_3_HomeWork
     </div>
 </>
    );
};

export default Layout;