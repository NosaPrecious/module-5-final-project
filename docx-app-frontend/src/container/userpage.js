import React, {Fragment} from 'react'
// import EditPage from '../container/edit.js'
import DocumentList from '../container/documentlist.js'
import Logout from '../components/logout.js'
import SearchBar from '../components/search.js'
import UploadFile from '../components/uploadfiles.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import {Route, Switch} from 'react-router-dom'

class UserPage extends React.Component{

  render(){
    return(
      <Fragment>
        User Page<br/>
        <Container expand="lg">
          <Row>
            <Col><Logout /></Col>
            <Col><SearchBar /></Col>
          </Row>
          <Row>
          <UploadFile />
          </Row>
          <DocumentList /><br/>
        </Container>
      </Fragment>
    )
  }
}

export default UserPage
