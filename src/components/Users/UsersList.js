import React from 'react'

const UsersList = (props) => {
  console.log(props.name)
  return (
      <>
        <li>{props.name}</li>
        <li>{props.age}</li>
      </>
  )
}

export default UsersList