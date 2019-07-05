import React, {Fragment} from 'react'
import Form  from 'react-bootstrap/Form'
import Col from  'react-bootstrap/Col'
// import Row from  'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class Login extends React.Component{
  constructor(){
    super()
    this.state= {
      username: "",
      password: ""
    }
  };

  handleChange = ({currentTarget : input}) => {
    this.setState({
      [input.name] : input.value
    })
  }

  handleLoginSubmit= event => {
    event.preventDefault()
    fetch("http://localhost:3001/api/v1/login", {
      method: 'POST',
      headers: {
        "Content-Type" :"application/json",
    		"Accept" :"application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(resp => resp.json())
    .then(data => {
      // debugger
      if(data.authenticated){

        this.props.handleUpdateUser(data.user)
        localStorage.setItem("token", data.token)
      }else{
        alert('incorrect username or password')
      }
    })
  }

  render(){
    return(
      <Fragment>
        <h2>Welcome to the Login Page</h2>
          <Form
          onSubmit={this.handleLoginSubmit}
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
          >
            <Form.Group controlId="formPlaintextUsername">
              <Form.Label column sm="2">
              Username :
              </Form.Label>
              <Col sm="10">
              <Form.Control type="text"
              placeholder="Enter Your Username"
              name= "username"
              onChange={this.handleChange}
              value={this.state.username}
              />
              </Col>
              </Form.Group>

              <Form.Group controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password :
                </Form.Label>
                <Col sm="10">
                <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                />
                </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
              </Form>
              {" -- or -- "}<br/>
              <Link to={'/register_as_user'}>
              <Button variant="primary">Register as a new user</Button>
              </Link>
      </Fragment>
    )
  }
}

export default withRouter(Login)
