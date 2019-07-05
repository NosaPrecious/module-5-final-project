import React, {Fragment} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import DocumentCard from '../components/documentcard'
import '../customcss/custom.css'

const DocumentList = ({onRouteHandler, userObj, searchText,handleDocumentDelete}) => {

  // This eventhandler filters the list of document returned
    let filteredDocuments = userObj.docs.filter(doc => doc.filename.includes(searchText))
    return(
      <Fragment>
        This is the Document List Page
        <CardGroup className="myDocList">
          {filteredDocuments.length !== 0? filteredDocuments.map(docObj => {
            return <DocumentCard
                key={Math.random(10) + docObj.id}
                docObj={docObj}
                onRouteHandler={onRouteHandler}
                handleDocumentDelete={handleDocumentDelete}
                />
          }) : <p>Currently, you have no document, please click the create button to make a new one</p>}

        </CardGroup>

      </Fragment>
    )
  }


export default DocumentList
