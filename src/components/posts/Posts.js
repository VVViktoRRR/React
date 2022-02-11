import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsAll} from "../../store";

const Posts = () => {
    const {posts} = useSelector( state => state[`postsReducer`]);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPostsAll({posts}))
    }, [])
    return (
        <div style={{display:'flex', width:'99%', flexWrap: 'wrap'}}>
            {
                posts.map(post => <div key={post.id}
                    style={{width:'21%', border:'2px solid red', margin: '10px', padding: '10px', background: 'pink'}}>
                    <h5> userId: {post.userId}</h5>
                    <h5> id: {post.id} </h5>
                    <h5>title: {post.title} </h5>
                    <h5>body: {post.body} </h5>
                </div>)
            }
        </div>
    );
};

export {Posts};