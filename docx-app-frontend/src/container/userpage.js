import React, {Fragment} from 'react'
// import EditPage from '../container/edit.js'
import DocumentList from '../container/documentlist.js'
import SearchBar from '../components/search.js'
import UploadFile from '../components/uploadfiles.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logout from '../components/logout'
// import {Route, Switch} from 'react-router-dom'

class UserPage extends React.Component{
  render(){
    return(
      <Fragment>
        Welcome {this.props.user.first_name}<br/>
        <Container expand="lg">
          <Row>
            <Col>
            <Logout
            handleUpdateUser={this.props.handleUpdateUser}
             />
            </Col>
            <Col><SearchBar /></Col>
          </Row>
          <Row>
          <UploadFile />
          </Row>
          <DocumentList routeprops={this.props.routeprops} /><br/>
        </Container>
      </Fragment>
    )
  }
}

export default UserPage
