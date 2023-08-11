import React from 'react'
import UsersList from './UsersList'
import Card from '../UI/Card'
import classes from './Users.module.css'

const Users = (props) => {
  
  return (
    <Card className={classes.Users}>
      {props.users.map((user) =>(
        <ul key={user.id}>
          <UsersList
          name={user.name}
          age={user.age}
          />
        </ul>
      )
      )
      }
    </Card>
  )
}

export default Users