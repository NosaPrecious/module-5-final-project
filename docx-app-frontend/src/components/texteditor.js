import React, {Fragment} from 'react'
import '../customcss/custom.css'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormControl  from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


function TextEditor(props){
  // debugger
  return(
    <Fragment>
      <div style={{marginTop: "10%", marginRight:"50%", marginButtom:"75%",marginLeft: "35%"}}>
          <div className="my-text-editor"
          contentEditable="true">
          {"Hello world"}
          </div>
         <Link to="/profile">
          <Button variant="primary">
          {'<-'} Go back to profile
          </Button>
         </Link>
      </div>
    </Fragment>
  )
}

export default TextEditor
