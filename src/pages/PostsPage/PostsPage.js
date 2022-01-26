import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import {postService} from "../../services/postService";
import css from "./PostsPage.module.css"

const PostsPage = () => {
    const [posts, setPosts] = useState( []);

    useEffect(()=> {
        postService.getAllPosts().then(value => setPosts( [...value]))
    }, [])
    return (
    <div className={css.posts_wrap}>
       <div>
           <h2> Posts: </h2>
           <div className={css.posts_page_body}>
               <ul>
                   {
                       posts.map(posts => <li key={posts.id}>
                           {posts.title}
                           <Link to={posts.id.toString()} state={posts}><button> Post details </button></Link></li>)
                   }
               </ul>
           </div>
       </div>
        <div className={css.posts_page_body_outlet}>
            <Outlet/>
        </div>
    </div>
        );
    };

export {PostsPage};