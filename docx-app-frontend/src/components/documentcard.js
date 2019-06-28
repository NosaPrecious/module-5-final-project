import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router'

const DocumentCard= (props) => {

  let handleClick= (event) => {
    return <Redirect to={`/profile/${1}`} />
  }

  return (
    <Fragment>
    <br/>
          <Card className="mycard">
              <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Img className="thumbnail" variant="top" src="./thumbnail.png" />
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button
              variant="primary"
              onClick={handleClick}
              >Open</Button>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default withRouter(DocumentCard)
