import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import '../customcss/custom.css'
import { Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import ChkBtn from './checkbox'

const DocumentCard= ({docObj, onRouteHandler, handleDocumentDelete, userDocs}) => {
       let userDoc= userDocs.find(udoc => udoc.doc_id === docObj.id)
       // console.log(userDoc.remove_access)
  return (
    <Fragment>
        <Col>
          <Card
          as={"div"}
          lg={"auto"}
          bg="light"
          border="primary"
          style={{width: '18rem', marginTop: '10px'}}>
              <Card.Body>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
                filename: {docObj.filename}
                <ChkBtn
                 name={"Read Access"}
                 value= {userDoc.read_access}
                />
                <ChkBtn
                 name={"Write Access"}
                 value= {userDoc.write_access}
                />
                Content Type: {docObj.content_type}
                <br/>
              <Link to={`/profile/${docObj.id}`}>
              <Button
              data-doc-id={docObj.id}
              variant="primary"
              onClick={onRouteHandler}
              >Open</Button>
              </Link>

              <Button
              variant={userDoc.remove_access? "primary" : "secondary"}
              data-document-id = {docObj.id}
              onClick={handleDocumentDelete}
              disabled={userDoc.remove_access? false: true}>
              Delete
              </Button>
              </Card.Body>
            </Card>
            </Col>
    </Fragment>
  )
}

export default withRouter(DocumentCard)
