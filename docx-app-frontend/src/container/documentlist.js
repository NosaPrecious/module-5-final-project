import React, {Fragment} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import DocumentCard from '../components/documentcard'

class DocumentList extends React.Component{

  render(){
    debugger
    return(
      <Fragment>
        This is the Document List Page
        <CardGroup>
          <DocumentCard routeprops={this.props.routeprops}/>
        </CardGroup>
      </Fragment>
    )
  }
}

export default DocumentList
