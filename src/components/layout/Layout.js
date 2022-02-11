import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import  './Layout.css'

const Layout = () => {
    return (
    <div>
        <div className={'header'}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/posts"}>Posts</NavLink>
            <NavLink to={"/comments"}>Comments</NavLink>
            <NavLink to={"/cars"}>Cars</NavLink>
        </div>
    <div  className={'outlet'} >
        <Outlet/>
    </div>
        <div  className={'footer'}>
            @React_Lesson_5_part_3
        </div>
    </div>
    );
};

export {Layout};