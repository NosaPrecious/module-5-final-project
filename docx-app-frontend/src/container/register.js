import React, {Fragment} from 'react'
import Form  from 'react-bootstrap/Form'
import Col from  'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class Register extends React.Component{

  render(){
    return(
      <Fragment>
        <h2>The Registration Page</h2>
        <Form>
        <Form.Group controlId="formPlaintextFirstname">
          <Form.Label column sm="2">
          Firstname :
          </Form.Label>
          <Col sm="10">
          <Form.Control type="text" placeholder="Enter Your Firstname" />
          </Col>
          </Form.Group>

          <Form.Group controlId="formPlaintextLastname">
            <Form.Label column sm="2">
            Lastname :
            </Form.Label>
            <Col sm="10">
            <Form.Control type="text" placeholder="Enter Your Lastname" />
            </Col>
            </Form.Group>

            <Form.Group controlId="formPlaintextEmail">
              <Form.Label column sm="2">
              Email :
              </Form.Label>
              <Col sm="10">
              <Form.Control type="text" placeholder="Enter Your Email" />
              </Col>
              </Form.Group>

                <Form.Group controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                Password :
                </Form.Label>
                <Col sm="10">
                <Form.Control type="text" placeholder="Password" />
                </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
          {" -- or -- "}<br/>
        <Link to={'/login'}>
        <Button variant="primary">Go Back to login</Button>
        </Link>
      </Fragment>
    )
  }
}

export default Register
