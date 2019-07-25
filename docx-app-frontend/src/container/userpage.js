import React, {Fragment} from 'react'
// import EditPage from '../container/edit.js'
// import UploadFile from '../components/uploadfiles.js'
import DocumentList from '../container/documentlist.js'
import SearchBar from '../components/search.js'
import SortBy from '../components/sort.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Logout from '../components/logout'
import {Link} from 'react-router-dom'

class UserPage extends React.Component{

  constructor(props){
    super(props)
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
        <h4>Welcome {this.props.user.first_name}</h4><br/>
        <Container expand="lg">
          <Row>
            <Col>
            <Logout
            handleUpdateUser={this.props.handleUpdateUser}
             />
            </Col>
          </Row>
          <Row style={{marginTop:'10px'}}>
          <Col xs md={8}>
          <Link to="/profile/textEditor">
              <Button
              variant="primary"
              className="new_document"
              onClick={this.props.handleOpenNewDocument}>
              Create new document
              </Button>
          </Link>
          </Col>
          <Col>
          <SearchBar
            onSearchHandler={this.onSearchHandler}
            value={this.state.searchText}
           />
          </Col>
          </Row>
          <Row>
            <SortBy />
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
