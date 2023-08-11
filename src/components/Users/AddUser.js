import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModal from './ErrorModal';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState()
  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const userAgeHandler = (event) => {
    setEnteredUserAge(event.target.value)
  }

  const submitUserHandler = (event) => {
    event.preventDefault();

    if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setError({
        title:'invalid input',
        message:'Please enter a valid name (non-empty values)'
      })
      return; 
    }

    if(+enteredUserAge < 1){
      setError({
        title:'invalid Age',
        message:'Please enter a valid age (> 0)'
      })
      return;
    }

    const enteredUsersData = {
      id : Math.random().toString(),
      name : enteredUserName,
      age : enteredUserAge
    }

    props.onAddUser(enteredUsersData);

    setEnteredUserName('');
    setEnteredUserAge('');
  }

  const btnErrorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal 
      errorTitle={error.title}
      errorMessage={error.message}
      onConfirm={btnErrorHandler}
      />}
    <Card className={classes.input}>
      <form onSubmit={submitUserHandler}>
        <label htmlFor="userName">Name</label>
        <input id='userName' 
        type="text" 
        onChange={userNameHandler} 
        value={enteredUserName}/>

        <label htmlFor="userAge">Age</label>
        <input id='userAge' 
        type="number"
        onChange={userAgeHandler} 
        value={enteredUserAge}/>

        <Button type='submit'>Add user</Button>
      </form>
    </Card>
    </div>
  )
}

export default AddUser