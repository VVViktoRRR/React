import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "../PostsPage/PostsPage.module.css"
import {postService} from "../../services/postService";

const PostCommentsPage = () => {
    const [postComments, setPostComments] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        postService.getByPostComments(id).then(postComments  =>  setPostComments( [...postComments]))
    }, [id]);
    return (
        <div className={css.comments}>
            <h2> Post comments :</h2>
            {
                postComments.map( comments => <div key={comments.id}>
                    <hr/>
                    <h4>postId: {comments.userId}</h4>
                    <h4>id:  {comments.id}</h4>
                    <h4>name: {comments.name}</h4>
                    <h4>email: {comments.email}</h4>
                    <h4> body: {comments.body}</h4> </div>)
            }
        </div>
    );
};

export {PostCommentsPage};