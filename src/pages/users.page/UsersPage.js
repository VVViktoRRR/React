import React, {useEffect, useState} from 'react';
import {userServices} from "../../services/user.services";
import {Users} from "../../components/Users/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userServices.getAllUsers().then(value => setUsers( ...[value]))
            }, [])
    return (
        <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '60%'}}>
                 <h1> Users : </h1>
                {
                    users.map(users => <Users key ={users.id}  users = {users}/> )
                }
            </div>
            <div style={{width: '50%'}}>
                     <Outlet/>
            </div>
        </div>
    );
};

export default UsersPage;