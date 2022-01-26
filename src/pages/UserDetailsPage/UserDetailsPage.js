import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import css from "./UserDetails.module.css";

const UserDetailsPage = () => {
    const {id} = useParams()
    const [user, setUser] = useState([]);
    const {state} = useLocation()

    useEffect(()=> {
    if(state) {
        setUser(state)
        return
                }
    userService.getByUserId(id).then(user => setUser({...user}))
    }, [id])
    return (
        <div>
            <div className={css.users_body_right}>
                <h2> User details: </h2>
                <h4> id: {user.id} </h4>
                <h4> name: {user.name}</h4>
                <h4> username: {user.username}</h4>
                <h4> email: {user.email}</h4>
                <Link to={'posts'} state={user}><button> User comments </button></Link>
                   </div>
            <div className={css.user_posts}>
                <Outlet/>
            </div>

        </div>
    );
};

export {UserDetailsPage};