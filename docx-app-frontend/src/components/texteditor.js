import React, {Fragment} from 'react'
import '../customcss/custom.css'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl  from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import ContentEditable from 'react-contenteditable'


class TextEditor extends React.Component{
  constructor(props){
      super(props)
      // console.log(props.userdoc)
      debugger
      this.contentEditable = React.createRef()
      if(this.props.docObj){
      this.state = {
        html: this.props.docObj.data,
        editable : this.props.userdoc.write_access ? false : true
      }
    }else{
      this.state = {
        html: "<b>Hello <i>World</i></b>",
        editable: false
      }
    }
  }

  handleChange = event => {
    this.setState({
      html: event.target.value
    }, (_) =>(
      this.props.docObj !== undefined ? this.props.handleEditorChange(this.state.html, this.props.docObj) : this.props.handleCreateNewDocument(this.contentEditable.current.innerText, this.props.userId)

    )
  )
  //debugger
  console.log(this.contentEditable.current)

};



  render(){
  return(
    <Fragment>
      <div style={{marginTop: "10%", marginRight:"50%", marginButtom:"75%",marginLeft: "35%"}}>
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
