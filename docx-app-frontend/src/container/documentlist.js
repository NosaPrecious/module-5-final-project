import React, {Fragment} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import DocumentCard from '../components/documentcard'
import '../customcss/custom.css'

import Container from 'react-bootstrap/Container'


const DocumentList = ({onRouteHandler, userObj, searchText,handleDocumentDelete}) => {
  // console.log(userObj)
    const{user_docs} = userObj
  // This eventhandler filters the list of document returned
    let filteredDocuments = userObj.docs.filter(doc => doc.filename.includes(searchText))
    return(
      <Fragment>
        <Container fluid={true} as={"div"}>

            <CardGroup as={"div"}>
              {filteredDocuments.length !== 0? filteredDocuments.map(docObj => {
                return <DocumentCard
                    key={Math.random(10) + docObj.id}
                    docObj={docObj}
                    userDocs={user_docs}
                    onRouteHandler={onRouteHandler}
                    handleDocumentDelete={handleDocumentDelete}
                    />
              }) : <p>Currently, you have no document, please click the create button to make a new one</p>}
            </CardGroup>
        </Container>
      </Fragment>
    )
  }


export default DocumentList
