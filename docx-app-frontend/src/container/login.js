import React, {Fragment} from 'react'
import Form  from 'react-bootstrap/Form'
import Col from  'react-bootstrap/Col'
import Row from  'react-bootstrap/Row'
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
      if(data.authenticated){

        this.props.handleUpdateUser(data.user)
        localStorage.setItem("token", data.token)
      }else{
        alert('incorrect username or password')
        //Handle redirect to registration page
      }
    })
  }

  sendfunc = () => {
    console.log("hello")
  }

  render(){
    return(
      <Fragment>
        <h2>Login As:</h2>
          <Form
          onSubmit={this.handleLoginSubmit}
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}>

              <Form.Group as={Row} md={6} controlId="formPlaintextUsername">
                <Form.Label column sm={2}>
                  Username:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Username"
                    name= "username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} md={6} controlId="formPlaintextPassword">
                <Form.Label column sm={2}>
                  Password :
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{span: 10, offset: 2}}>
                  <Button
                  variant="primary"
                  type="submit">
                    Sign as
                  </Button>
                  {" -- or -- "}
                  <Link to={'/register_as_user'}>
                  <Button variant="primary">Register as a new user</Button>
                  </Link>
                </Col>
            </Form.Group>
          </Form>
      </Fragment>
    )
  }
}

export default withRouter(Login)
