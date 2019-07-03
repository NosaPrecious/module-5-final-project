import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import { Link} from 'react-router-dom'
import {withRouter} from 'react-router'

const DocumentCard= (props) => {
  // debugger
   // console.log(props)
   const{docObj, onRouteHandler} = props
   // let fileName = docObj.filename.slice(-10)

  return (
    <Fragment>
    <br/>
          <Card className="justify-content-center mycard">
              <Card.Body>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
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
              >Delete</Button>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default withRouter(DocumentCard)
