import './App.css';
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";

function App() {
   const [users, setUsers] = useState( []);
    const [filteredusers, setFilteredusers] = useState( []);

   useEffect(()=> {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredusers([...value])
        })
   }, [])

  const getFilter =(data) => {
    let filteredArr = [...users]
      if (data.name) {
          filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
      }
      if (data.username) {
          filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
      }
      if (data.email) {
          filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
      }
      setFilteredusers(filteredArr)
  }
  return (
    <div>
        <Form getFilter={getFilter}/>
        <Users users ={filteredusers}/>
    </div>
  );
}

export default App;
