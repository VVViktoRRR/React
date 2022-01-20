import React from 'react';

const UserDetails = ({user, getUserId}) => {
    const { id, name, username, email, address, phone, website, company} = user;
    return (
        <div  style={{marginLeft: '20px', borderLeft: '2px solid blue', paddingLeft: '20px'}}>
            <p>id : {id}  </p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email} </p>
            <p> address:  </p>
            <p> street: {address?.street} </p>
            <p> suite: {address?.suite} </p>
            <p> city: {address?.city} </p>
            <p> zipcode: {address?.zipcode} </p>
            <p> geo: </p>
            <p> lat: {address?.geo.lat} </p>
            <p> lng: {address?.geo.lat} </p>
            <p> phone : {phone}  </p>
            <p>website: {website}</p>
            <p>company:</p>
            <p>name: {company?.name} </p>
            <p>catchPhrase: {company?.catchPhrase} </p>
            <p>bs: {company?.bs} </p>

            <button style={{marginLeft: '20px'}} onClick={() => getUserId(id)}> Posts </button>
        </div>
    );
};

export default UserDetails;