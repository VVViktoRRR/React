import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import {Link, Outlet} from "react-router-dom";
import css from './UserPage.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers( ...[value]))
    }, [])
     return (
            <div className={css.users_wrap}>
                <div className={css.users_body}>
                    <h2> Users: </h2>
                    {
                        users.map(users => <div className={css.users} key={users.id}>
                            <h3>  {users.id} ) {users.name}</h3>
                            <Link to={users.id.toString()} state={users} ><button> User details</button></Link>
                            <Link to={`${users.id}/albums`.toString()}><button className={css.album}> User album</button></Link>
                        </div>)
                    }
                </div>

                <div className={css.user_page_autlet}>
                    <Outlet/>
                </div>
            </div>
                );
};

export {UsersPage};