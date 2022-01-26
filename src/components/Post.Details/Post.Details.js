import React, {useEffect, useState} from 'react';
import {postServices} from "../../services/post.services";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

const PostDetails = () => {
    const [post, setPost] = useState( []);
    const {id} = useParams();
    const {state} = useLocation()

    useEffect(()=> {
        if (state) {
            setPost(state)
            return
        }
        postServices.getByPostId(id).then(value => setPost( {...value}))
    }, [])
    return (
            <div>
                <div>
                    <h2>Post Details:</h2>
                </div>
                <div>
                    <p>userId:<b>{post.userId}</b> </p>
                    <p>id:<b> {post.id}</b> </p>
                    <p>title:<b> {post.title}</b> </p>
                    <p>body: <b>{post.body}</b></p>
                    <Link to={'comments'}><button> Post Comments </button></Link>
                 </div>
                <Outlet/>
            </div>
    );
};

export {PostDetails};