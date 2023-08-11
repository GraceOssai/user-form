import React from 'react'
import Card from '../UI/Card'
import classes from './ErrorModal.module.css'
import Button from '../UI/Button'

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.errorTitle}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.errorMessage}</p> 
        </div>
        <footer className={classes.actions}>
          <Button onClickBtn={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default ErrorModal