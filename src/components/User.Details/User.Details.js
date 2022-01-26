import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userServices} from "../../services/user.services";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState( []);
    const {state} = useLocation()

    useEffect(()=> {
        if (state) {
            setUser(state)
            return
        }
        userServices.getByUserId(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div  style={{marginLeft: '-250px', borderLeft: '2px solid blue', paddingLeft: '20px'}}>
            {
                <div>
                    <h2> User details: </h2>
                    <h4> id: {user.id} </h4>
                    <h4>name: {user.name}</h4>
                    <h4>username: {user.username}</h4>
                    <h4> email: {user.email}</h4>
                    <Link to={'posts'}>
                        <button  key ={user.id}>
                            User Posts
                        </button>
                    </Link>
               </div>
                }
         <Outlet/>
        </div>
    );
};

export {UserDetails};