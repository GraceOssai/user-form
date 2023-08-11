import React, { useState } from 'react';
import './App.css';
import Users from './components/Users/Users';
import AddUser from './components/Users/AddUser';


function App() {
  const [usersList, setUsersList] = useState([]);  

  const addUserHandler = (enteredUserData) => {
    console.log(enteredUserData)
    setUsersList((prevUsersList) => {
      return [...prevUsersList, enteredUserData]
    })
  }
  console.log(usersList)
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <Users users={usersList}/>
    </div>
  );
}

export default App;
