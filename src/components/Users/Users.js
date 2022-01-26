import React from 'react';
import {Link} from "react-router-dom";

const Users = ({users}) => {

  return (
       <div style={{display: 'flex', border: '2px solid black', width: '60%', margin: '3px'}}>
            <div style={{margin: '10px'}}> {users.id})  {users.name} </div>

            <Link to={users.id.toString()} state = {users}>
            <button style={{height: '30px', marginTop: '7px'}}>
          Users
            </button>
            </Link>
       </div>

    );
};

export {Users};