const User = ({user, getUser}) => {
    return (
         <div style={{marginBottom: '3px', paddingLeft: '10px' }}>
                 <b>{user.id}) {user.name} </b>
                 <button style={{marginLeft: '20px'}} onClick={() => getUser(user)}>Details</button>
    </div>
    );
};

export default User;