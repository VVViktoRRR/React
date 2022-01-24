import React from 'react';
import {NavLink} from "react-router-dom";

const Users = ({users}) => {

  return (
       <div style={{display: 'flex', border: '2px solid black', width: '60%', margin: '3px'}}>
            <div style={{margin: '10px'}}> {users.id})  {users.name} </div>

            <NavLink to={users.id.toString()} state = {users}>
            <button style={{height: '30px', marginTop: '7px'}}>
          Users
            </button>
            </NavLink>
       </div>

    );
};

export {Users};