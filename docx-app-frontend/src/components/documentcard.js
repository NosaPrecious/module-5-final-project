import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'
import {Link} from 'react-router-dom'

function DocumentCard(){
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
              <Link to={'/profile/textEditor'}>
              <Button variant="primary">Open</Button>
              </Link>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default DocumentCard
