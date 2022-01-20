import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";

import Posts from "./components/posts/Posts";
import User_Details from "./components/user_details/User_Details";


function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState( null);


    const getUser = (user) => {
        setUser(user)
        setUserId( null)
    };
    const getUserId = (id) => {
        setUserId(id)
               }

    return (
        <div className={'wrap'}>
                <div className={'users'}>
                                <Users getUser={getUser} />
                      { user && <User_Details user={user} getUserId={getUserId}  />}
               </div>
                    <div className={'posts'}>
                        {userId && <Posts userId={userId}/>}
                    </div>
        </div>
    );
}

export default App;
