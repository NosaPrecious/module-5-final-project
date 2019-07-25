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
        <Container expand="lg">
                <Row noGutters={true} style={{marginBottom: 20, marginTop: 20}}>
                  <Col md={4}>
                    <h4 style={{margin:0, padding:0, textAlign: "left"}}>
                    Welcome {this.props.user.first_name}
                    </h4>
                  </Col>
                  <Col md={8} style={{textAlign: "right"}}>
                      <Logout
                      handleUpdateUser={this.props.handleUpdateUser}
                       />
                  </Col>
                </Row>
                <Row noGutters={true}>
                    <Col xs md="auto">
                      <Link to="/profile/textEditor">
                        <Button
                        variant="primary"
                        className="new_document"
                        onClick={this.props.handleOpenNewDocument}>
                        Create new document
                        </Button>
                      </Link>
                    </Col>
                    <Col xs md={4} style={{marginLeft: 525}}>
                      <SearchBar
                        onSearchHandler={this.onSearchHandler}
                        value={this.state.searchText}
                      />
                    </Col>
                </Row>
                <Row>
                  <SortBy />
                </Row>
            </Container>
                    <DocumentList
                    userObj={this.props.user}
                    onRouteHandler={this.props.onRouteHandler}
                    searchText={this.state.searchText}
                    handleDocumentDelete={this.props.handleDocumentDelete}
                    />
      </Fragment>
    )
  }
}

export default UserPage
