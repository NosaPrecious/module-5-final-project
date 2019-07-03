import React, {Fragment} from 'react'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router'
import {Redirect} from 'react-router-dom'

const Logout= (props) => {

let handleClick= (event) =>{
  localStorage.removeItem("token")
  props.handleUpdateUser(null)
  return <Redirect to="/login"/>
}

  return (
    <Fragment>
      <Button
      variant="primary"
      onClick={handleClick}
      >Logout</Button>
    </Fragment>
  )
}

export default withRouter(Logout)
