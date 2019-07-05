import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import { Link} from 'react-router-dom'
import {withRouter} from 'react-router'

const DocumentCard= ({docObj, onRouteHandler, handleDocumentDelete}) => {

  return (
    <Fragment>
    <br/>
          <Card className="justify-content-center mycard">
              <Card.Body>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
              <Card.Text>
                filename: {docObj.filename}
              </Card.Text>
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
              >Delete</Button>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default withRouter(DocumentCard)
