import React, {Fragment} from 'react'
import MenuBar from '../container/menubar.js'
import TextEditor from '../components/texteditor.js'

class Edit extends React.Component{

  render(){
    return(
      <Fragment>
        --Edit Page--<br/>
        <MenuBar /><br/>
        <TextEditor />
      </Fragment>
    )
  }
}

export default Edit
