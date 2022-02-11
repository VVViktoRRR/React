import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAll} from "../../store";
import usersReducer from "../../store/users.slice";

const Users = () => {
    const {users} = useSelector( state => state[`usersReducer`]);
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getUsersAll({users}))
    }, [])
    return (
        <div style={{display:'flex', width:'99%', flexWrap: 'wrap'}}>
             {
                users.map(user => <div key={user.id}
              style={{width:'29%', border:'2px solid red', margin: '10px', padding: '10px', background: 'pink'}}>
                    <h5>{user.id})_{user.name} ----- {user.username}</h5>
                    <h5> email: {user.email} </h5>
                    <h5>address: </h5>
                    <h5>street: {user.address.street} </h5>
                    <h5>suite: {user.address.suite} </h5>
                    <h5>city: {user.address.city} </h5>
                    <h5>zipcode: {user.address.zipcode} </h5>
                    <h5>geo:  </h5>
                    <h5>lat: {user.address.geo.lat} </h5>
                    <h5>lat: {user.address.geo.lng} </h5>
                    <h5>phone: {user.phone} </h5>
                    <h5>website: {user.website} </h5>
                    <h5>company: } </h5>
                    <h5>name: {user.company.name} </h5>
                    <h5>catchPhrase: {user.company.catchPhrase} </h5>
                    <h5>bs: {user.company.bs} </h5>
                </div>)
            }
        </div>
    );
};

export {Users};