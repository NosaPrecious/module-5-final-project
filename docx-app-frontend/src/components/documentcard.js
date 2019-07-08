import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import { Link} from 'react-router-dom'
import {withRouter} from 'react-router'

import ChkBtn from './checkbox'

const DocumentCard= ({docObj, onRouteHandler, handleDocumentDelete, userDocs}) => {
       let userDoc= userDocs.find(udoc => udoc.doc_id === docObj.id)
       console.log(userDoc.remove_access)
       // debugger
  return (
    <Fragment>
    <br/>
          <Card className="justify-content-center mycard">
              <Card.Body>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
              <Card.Text>
                filename: {docObj.filename}
              </Card.Text>
                <ChkBtn
                 name={"Read Access"}
                 value= {userDoc.read_access}
                />
                <ChkBtn
                 name={"Write Access"}
                 value= {userDoc.write_access}
                />
              <Card.Text>
                Content Type: {docObj.content_type}
              </Card.Text>
              <Link to={`/profile/${docObj.id}`}>
              <Button
              data-doc-id={docObj.id}
              variant="primary"
              onClick={onRouteHandler}
              >Open</Button>
              </Link>

              <Button
              variant="primary"
              data-document-id = {docObj.id}
              onClick={handleDocumentDelete}
              disabled={userDoc.remove_access? false: true}
              >{userDoc.remove_access? "Delete" : "Delete Disabled"}</Button>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default withRouter(DocumentCard)
