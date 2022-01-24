import React, {useEffect, useState} from 'react';
import {postServices} from "../../services/post.services";
import {Posts} from "../../components/Posts/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState( [])

    useEffect(()=> {
        postServices.getAllPosts().then(value => setPosts( ...[value]))
    }, [])

    return (
            <div style={{display:'flex'}}>
                <div style={{width:'45%'}}>
                    <h1> Posts : </h1>
                    {
                        posts.map(posts => <Posts key = {posts.id} posts={posts}/>)
                    }
                </div>
                <div style={{width:'45%', borderLeft: '2px solid blue', paddingLeft: '20px'}}>
                    <Outlet/>
                </div>
            </div>

    );
};

export default PostsPage;