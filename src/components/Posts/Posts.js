import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Posts = ({posts}) => {
    return (
        <div >
              <ul>
                    <li>
                        {posts.title}
                        <NavLink to={posts.id.toString()} state = {posts}><button> Post details </button></NavLink>
                    </li>
              </ul>
        </div>
    );
};

export {Posts};