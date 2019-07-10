import React, {Fragment} from 'react'


const UploadFile= (props) => {
  // console.log(props.user)
  let handleUpload = (event) => {
    event.stopPropagation()
    event.preventDefault()

    let uploadedFile= event.target.children[0].files[0]
    fileProcessor(uploadedFile)

  }

  let fileProcessor = (fileObj) => {
    if(window.File && window.FileReader && window.Blob){
    let fr = new FileReader()

    fr.onload = (frEvent) => {
      // let myBlob= new Blob([frEvent.target.result], {type:"text/plain;charset=utf-8"})

      let myDocContainer = document.querySelector('.myDocList')
        myDocContainer.innerHTML = frEvent.target.result
    }
      fr.readAsBinaryString(fileObj)
    }else{
      alert("The File API is not supported by your browser.")
    }
  }

  return (
    <Fragment>
    <div className="input-file-group">
      <div className="custom-file-input">
      <form onSubmit={handleUpload}>
      <input
      type="file"
      className="file-input"
      id="file-input"
      />
      <br/>
      <input type="submit" value="submit"/>
      </form>
      </div>
      </div>
    </Fragment>
  )
}

export default UploadFile
