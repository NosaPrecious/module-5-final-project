import React, {Fragment} from 'react'
import '../customcss/custom.css'
// import FormControl  from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import ContentEditable from 'react-contenteditable'
import SaveFile from './modal_save.js'
import Permission from './permission'
import PermissionModal from './permission_modal.js'

class TextEditor extends React.Component{
  constructor(props){
      super(props)
      this.contentEditable = React.createRef()
      if(this.props.docObj){
      this.state = {
        html: this.props.docObj.data,
        editable : this.props.userdoc.write_access ? false : true,
        show: false,
        permittedUserId : null,
        permittedUser: ""
      }
    }else{
      this.state = {
        html: "",
        fileName : "",
        editable: false
      }
    }
  }

  handleChange = event => {
    // console.log(this.props.docObj)
    this.setState({
      html: event.target.value
    }, (_) =>(
      this.props.docObj !== undefined ? this.props.handleEditorChange(this.state.html, this.props.docObj) : undefined
    )
  )
  console.log(this.contentEditable.current)
};

handleModalClick =(userId, firstname, lastname) => {
    // userId
    let fullName = `${firstname} ${lastname}`
    this.setState({
      permittedUserId : userId,
      permittedUser: fullName,
      show: true
    })
}

handleClose = (e) => {
  this.setState({
    show: false
  })
}

handleSaveChanges= (doc_id,read_access, write_access, permitted_userId) => {
  debugger
  // console.log(docId, readAccess, writeAccess, permittedUserId)

  let data = {
    doc_id,read_access, write_access, permitted_userId
  }

  fetch("http://localhost:3001/api/v1/permissions", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(jsonData => console.log(jsonData))
}


  render(){
    // debugger
    console.log(this.props)
  return(
    <Fragment>
      <Container fluid as={"div"} id="text-editor-container">
        <Row noGutters={true}>
              <Col md={{span : 2, offset : 2}}>
              {this.props.userdoc === undefined && this.props.docObj === undefined? null
              : this.props.userdoc.has_owner? <Permission
              handleModalClick={this.handleModalClick}
              crtUserId={this.props.userId}
               /> : null
             }
            </Col>
            <Col>
                <PermissionModal
                show={this.state.show}
                permittedUser={this.state.permittedUser}
                permittedUserId={this.state.permittedUserId}
                docObj={this.props.docObj}
                handleClose={this.handleClose}
                handleSaveChanges={this.handleSaveChanges}
                />
            </Col>
        </Row>
        <Row noGutters={true}>
            <Col lg={true}>
              <ContentEditable
              className = "my-text-editor"
              innerRef={this.contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={this.state.editable}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='div' // Use a custom HTML tag (uses a div by default)
              />
            </Col>
          </Row>
          <Row className="text-editor-row">
            {this.props.docObj === undefined?
            <Col sm={{span : 2, offset: 2}} style={{marginBottom: "10px"}}>
              <SaveFile
              userId= {this.props.userId}
              handleCreateNewDocument= {this.props.handleCreateNewDocument}
              editorText= {this.state.html}
            />
            </Col>
            : null}
            <Col sm={{span : 2, offset:3}}>
            <Link to="/profile">
             <Button variant="primary"
             className="text-editor-col"
             >
             {'<-'} Go back to profile
             </Button>
            </Link>
            </Col>
          </Row>

      </Container>
    </Fragment>
  )
}
}

export default TextEditor
