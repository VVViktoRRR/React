import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postServices} from "../../services/post.services";

const PostComments = () => {
    const [postComments, setPostComments] = useState( []);
    const {id} = useParams();

 useEffect(()=> {
     postServices.getByPostComments(id).then(postComments => setPostComments([...postComments]))
 }, [id])
    return (

        <div>
            <h2> Post Comments : </h2>
            <div style={{borderTop: '2px solid red', marginTop: '10px'}}>
                {
                    postComments.map(post => <div key={post.id}>
                        <h4>postId: {post.userId}</h4>
                        <h4>id:  {post.id}</h4>
                        <h4>name: {post.name}</h4>
                        <h4>email: {post.email}</h4>
                        <h4> body: {post.body}</h4> <hr></hr>
                    </div>)
                }
            </div>
        </div>
    );
};

export {PostComments};