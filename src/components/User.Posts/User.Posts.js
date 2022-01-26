import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userServices} from "../../services/user.services";

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState( []);
    const {id} = useParams();

    useEffect(()=> {
        userServices.getByUserPosts(id).then(userPosts => setUserPosts( [...userPosts]))
    }, [id])
    return (

        <div>
            <h2> User Posts: </h2>
            <div style={{borderTop: '2px solid red', marginTop: '10px'}}>
                {
                    userPosts.map(user => <div key={user.id}>
                        <h4>userId: {user.userId}</h4>
                        <h4>id:  {user.id}</h4>
                        <h4>title: {user.title}</h4>
                        <h4> body: {user.body}</h4> <hr></hr>
                    </div>)
                }
            </div>
        </div>
    );
};

export {UserPosts};