import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {userService} from "../../services/userService";
import css from './UserPosts.module.css'

const UserPostsPage = () => {
    const [userPosts, setUserPosts] = useState([]);
    const {state:{id}} = useLocation()

    useEffect(()=> {
        userService.getByUserPosts(id).then(value => setUserPosts( [...value]))
    }, [id]);
    return (
        <div >
            <div>
                <h2> User Posts: </h2>
            </div>
            {
                userPosts.map(userPosts => <div  key={userPosts.id}>
                    <h4>userId: {userPosts.userId}</h4>
                    <h4>id:  {userPosts.id}</h4>
                    <h4>title: {userPosts.title}</h4>
                    <h4> body: {userPosts.body}</h4><hr/>
                </div> )
            }
        </div>
    );
};

export {UserPostsPage};