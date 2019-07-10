import React, {Fragment} from 'react'
import Button from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import '../customcss/custom.css'

class SaveFile extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        fileName : ""
      }
    }

  handleClick = (event) => {
    document.getElementById("myModal").style.display= "block"
  }

  handleClose = (event) => {
    if(event.target === document.getElementsByClassName("close")[0]){
    document.getElementById("myModal").style.display = "none"
    }
  }

  handleChange = (event) => {
      this.setState({
        fileName : event.target.value
      })
  }


  render(){
      return (
      <Fragment>
      <Button
      variant="primary"
      id="myBtn"
      onClick={this.handleClick}>
      Save As...
      </Button>
      <div
      id="myModal"
      className="modal">
        <div className="modal-content">
          <span
          className="close"
          onClick={this.handleClose}
          >&times;</span>
          <p>Save File As...</p>
            <Form.Control
            type="text"
            placeholder="Enter a file name"
            name = "filename"
            onChange={this.handleChange}
            />
            <Button
            variant="primary"
            onClick={(_) => this.props.handleCreateNewDocument(this.props.editorText, this.props.userId, this.state.fileName)}>
              Save
              </Button>
        </div>
      </div>
      </Fragment>
    )
  }
}

export default SaveFile
