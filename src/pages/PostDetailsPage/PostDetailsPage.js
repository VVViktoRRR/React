import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/postService";

const PostDetailsPage = () => {
    const {id} = useParams()
    const [post, setPost] = useState( []);
    const {state} = useLocation()

    useEffect(()=> {
        if (state) {
            setPost(state)
            return
        }
        postService.getByPostId(id).then(value => setPost( {...value}))

    }, [id])
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

export {PostDetailsPage};