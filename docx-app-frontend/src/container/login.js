import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import Col from  'react-bootstrap/Col'
import Row from  'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import '../customcss/custom.css'

class Login extends React.Component{
  constructor(props){
    super(props)
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
        <Container as={"div"} className="outer-div">
        <Container as={"div"} className="login-div">
          <Row>
            <Col>
            <h2>Login As:</h2>
            </Col>
          </Row>
          <Row>
              <Col>
                <Form
                  className="login-form"
                  onSubmit={this.handleLoginSubmit}
                  loading={this.props.authenticatingUser}
                  error={this.props.failedLogin}>

                    <Form.Group as={Row} md={12} controlId="formPlaintextUsername">
                      <Form.Label column sm={3}>
                        Username:
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Username"
                          name= "username"
                          onChange={this.handleChange}
                          value={this.state.username}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} md={12} controlId="formPlaintextPassword">
                      <Form.Label column sm={3}>
                        Password :
                      </Form.Label>
                      <Col sm={9}>
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
                      <Col sm={{span: 40, offset: 2}}>
                        <Button
                        variant="primary"
                        type="submit">
                          Sign as
                        </Button>
                        {" -- or -- "}
                        <Link to={'/register_as_user'}>
                        <Button variant="secondary">Register as a new user</Button>
                        </Link>
                        </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(Login)
