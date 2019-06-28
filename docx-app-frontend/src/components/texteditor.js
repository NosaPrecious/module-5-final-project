import React, {Fragment} from 'react'
import '../customcss/custom.css'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl  from 'react-bootstrap/FormControl'
import Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


function TextEditor(){
  return(
    <Fragment>
      <div>
      <FormGroup>
       <FormControl
           className="mytextarea"
           componentClass="textarea"
           placeholder={"Hello World"}
           value={"Hello World everybody!!!"}
           onChange={(_)=> {}}
         />
         </FormGroup>
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
