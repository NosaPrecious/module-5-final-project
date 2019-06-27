import React, {Fragment} from 'react'
import Card from 'react-bootstrap/Card'
import '../customcss/custom.css'

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
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>

    </Fragment>
  )
}

export default DocumentCard
