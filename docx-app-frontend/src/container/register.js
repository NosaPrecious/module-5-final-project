import React, {Fragment} from 'react'
import Form  from 'react-bootstrap/Form'
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link, Redirect} from 'react-router-dom'

class Register extends React.Component{

    constructor(props){
      super(props)
      console.log(props)
      this.regPage = React.createRef()
      this.state = {
        firstname: "",
        lastname: "",
        email: "",
        username : "",
        password: "",
        redirect : false
      }
    }

    handleChange = ({currentTarget : input}) => {
      this.setState({
        [input.name] : input.value
      }, () => console.log(this.state))
    }

    redirectToLogin = () => {
      this.setState({
        redirect : true
      }, (_) => <Redirect to="/login"/>)
    }

    handleRegisterUser= (event) => {
      event.preventDefault()

      let submitData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username : this.state.username,
        password: this.state.password
      }

      //make a fetch post to user controller
      fetch("http://localhost:3001/api/v1/users",{
        method : "POST",
        headers: {
          Content_Type : "application/json",
          Accept : "application/json"
        },
        body : JSON.stringify(submitData)
      })
      .then(resp => resp.json())
      .then(jsonData => {
          if(jsonData.message === "Successful"){
            alert(`Registration was ${jsonData.message}`)
              this.redirectToLogin()
          }else{
            alert(`Registration was ${jsonData.message}`)
          }

      })
    }

  render(){
    return(
      <Fragment>
        <h2>Registration as a new user</h2>
        <Form onSubmit={this.handleRegisterUser}>
          <Form.Group as={Row} controlId="formHorizontalFirstname">
            <Form.Label column sm= {2}>
              Firstname:
              </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    size="sm"
                    type="text"
                    ref= {this.regPage}
                    placeholder="Enter Your Firstname"
                    onChange={this.handleChange}
                    name = "firstname"
                    value= {this.state.firstname}
                  />
                </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="FormHorizontalLastname">
            <Form.Label column sm={2}>
              Lastname:
            </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter Your Lastname"
                  onChange={this.handleChange}
                  name = "lastname"
                  value= {this.state.lastname}
                />
              </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email:
            </Form.Label>
            <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={this.handleChange}
                  name = "email"
                  value= {this.state.email}
                />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalUsername">
            <Form.Label column sm={2}>
              Username:
            </Form.Label>
            <Col sm={10}>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Your Username"
                    onChange={this.handleChange}
                    name = "username"
                    value= {this.state.username}
                  />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password:
            </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  name = "password"
                  value= {this.state.password}
                />
              </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{span:10, offset: 2}}>
              <Button
                variant="primary"
                type="submit">
                Submit
              </Button>
              {"  -- or --  "}
              <Link to={'/login'}>
              <Button variant="primary">
              Go Back to login
              </Button>
              </Link>
            </Col>
          </Form.Group>
        </Form>


      </Fragment>
    )
  }
}

export default Register
