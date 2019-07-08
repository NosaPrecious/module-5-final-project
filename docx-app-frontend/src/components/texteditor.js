import React, {Fragment} from 'react'
import '../customcss/custom.css'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl  from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import { Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import ContentEditable from 'react-contenteditable'
import SaveFile from './modal_save.js'

class TextEditor extends React.Component{
  constructor(props){
      super(props)
      this.contentEditable = React.createRef()
      if(this.props.docObj){
      this.state = {
        html: this.props.docObj.data,
        editable : this.props.userdoc.write_access ? false : true
      }
    }else{
      this.state = {
        html: "<b>Hello <i>World</i></b>",
        fileName : "",
        editable: false
      }
    }
  }

  handleChange = event => {
    console.log(this.props.docObj)
    this.setState({
      html: event.target.value
    }, (_) =>(
      this.props.docObj !== undefined ? this.props.handleEditorChange(this.state.html, this.props.docObj) : undefined
    )
  )
  //debugger
  console.log(this.contentEditable.current)

};



  render(){
  return(
    <Fragment>
      <div style={{marginTop: "10%", marginRight:"50%", marginButtom:"75%",marginLeft: "35%"}}>
        <Row className="text-editor-row">
          <Col className="text-editor-col">
            <Button
            variant="primary"
            onClick={(_) => this.props.handleCreateNewDocument(this.state.html, this.props.userId)}
            disabled={this.props.docObj === undefined? false : true}
            >{this.props.docObj === undefined? "Save" : "Save Disabled"}</Button>
          </Col>
          <Col className="text-editor-col">
            <SaveFile
            userId= {this.props.userId}
            handleCreateNewDocument= {this.props.handleCreateNewDocument}
            editorText= {this.state.html}
             />
          </Col>
        </Row>
            <ContentEditable
            className = "my-text-editor"
            innerRef={this.contentEditable}
            html={this.state.html} // innerHTML of the editable div
            disabled={this.state.editable}       // use true to disable editing
            onChange={this.handleChange} // handle innerHTML change
            tagName='div' // Use a custom HTML tag (uses a div by default)
          />
         <Link to="/profile">
          <Button variant="primary">
          {'<-'} Go back to profile
          </Button>
         </Link>
      </div>
    </Fragment>
  )
}
}

export default TextEditor
