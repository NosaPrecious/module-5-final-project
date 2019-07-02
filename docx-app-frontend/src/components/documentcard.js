import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import { Link} from 'react-router-dom'
import {withRouter} from 'react-router'

const DocumentCard= (props) => {
  // debugger
  let handleClick= (event) => <Link to="/textEditor" />

  return (
    <Fragment>
    <br/>
          <Card className="mycard">
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
              <Card.Text>
                Content Type: 
              </Card.Text>
              <Button
              variant="primary"
              onClick={handleClick}
              >Open</Button>
              <Button
              variant="primary"
              >Delete</Button>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default withRouter(DocumentCard)
