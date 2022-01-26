import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({posts}) => {
    return (
        <div >
              <ul>
                    <li>
                        {posts.title}
                        <Link to={posts.id.toString()} state = {posts}><button style={{marginLeft:'5px'}}> Post details </button></Link>
                    </li>
              </ul>
        </div>
    );
};

export {Posts};