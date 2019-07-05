import React, {Fragment} from 'react'
// import EditPage from '../container/edit.js'
// import UploadFile from '../components/uploadfiles.js'
import DocumentList from '../container/documentlist.js'
import SearchBar from '../components/search.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Logout from '../components/logout'
import {Link} from 'react-router-dom'

class UserPage extends React.Component{

  constructor(props){
    super(props)
    // debugger
    this.state ={
      searchText: "",
      sort_value: "",
      doc_content: null,
      docArr : []
    }
  }

  onSearchHandler = event => {
    this.setState({
      searchText: event.target.value
    })
  }



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
            <Col>
            <SearchBar
              onSearchHandler={this.onSearchHandler}
              value={this.state.searchText}
             />
            </Col>
          </Row>
          <Row>
          <Link to="/profile/textEditor">
              <Button
              variant="primary"
              className="new_document"
              onClick={this.props.handleCreateNewDocument}>
              Create new document
              </Button>
          </Link>
          </Row>
          <DocumentList
          userObj={this.props.user}
          onRouteHandler={this.props.onRouteHandler}
          searchText={this.state.searchText}
          handleDocumentDelete={this.props.handleDocumentDelete}
          /><br/>
        </Container>
      </Fragment>
    )
  }
}

export default UserPage
