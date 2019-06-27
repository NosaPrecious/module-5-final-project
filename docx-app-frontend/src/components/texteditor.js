import React, {Fragment} from 'react'
import '../customcss/custom.css'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl  from 'react-bootstrap/FormControl'


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
      </div>
    </Fragment>
  )
}

export default TextEditor
