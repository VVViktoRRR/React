import Post from "../post/Post";
import {useEffect, useState} from "react";
import {postServices} from "../../services/post.services";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postServices.getByUserId(userId).then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }


        </div>
    );
};

export default Posts;