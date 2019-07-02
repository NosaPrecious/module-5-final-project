import React, {Fragment} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import DocumentCard from '../components/documentcard'

class DocumentList extends React.Component{

  render(){
    // debugger
    // const{routeprops, documentArr}= this.props
    return(
      <Fragment>
        This is the Document List Page
        <CardGroup className="myDocList">
          <DocumentCard/>

        </CardGroup>

      </Fragment>
    )
  }
}

export default DocumentList
