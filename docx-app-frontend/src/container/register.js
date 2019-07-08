import React, {Fragment} from 'react'
import Form  from 'react-bootstrap/Form'
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
          // debugger
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
        <h2>The Registration Page</h2>
        <Form onSubmit={this.handleRegisterUser}>
          <Form.Row>
            <Col sm="10">
                <Form.Control
                type="text"
                ref= {this.regPage}
                placeholder="Enter Your Firstname"
                onChange={this.handleChange}
                name = "firstname"
                value= {this.state.firstname}
                />
            </Col>
            <Col>
              <Form.Control
              type="text"
              placeholder="Enter Your Lastname"
              onChange={this.handleChange}
              name = "lastname"
              value= {this.state.lastname}
              />
            </Col>
          </Form.Row>

          <Form.Row>
              <Col sm="10">
                <Form.Control
                type="text"
                placeholder="Enter Your Email"
                onChange={this.handleChange}
                name = "email"
                value= {this.state.email}
                />
              </Col>
              <Col sm="10">
                  <Form.Control
                  type="text"
                  placeholder="Enter Your Username"
                  onChange={this.handleChange}
                  name = "username"
                  value= {this.state.username}
                  />
              </Col>
              <Col>
                <Form.Control
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                name = "password"
                value= {this.state.password}
                />
              </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Button
                variant="primary"
                type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              {" -- or -- "}
            </Col>
            <Col>
              <Link to={'/login'}>
              <Button variant="primary">
              Go Back to login
              </Button>
              </Link>
            </Col>
          </Form.Row>
        </Form>


      </Fragment>
    )
  }
}

export default Register
