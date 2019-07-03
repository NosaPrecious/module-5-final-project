import React, {Fragment} from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import DocumentCard from '../components/documentcard'
import '../customcss/custom.css'

class DocumentList extends React.Component{

  render(){
    // console.log(this.props)
    const{onRouteHandler, userObj: {docs}}=this.props
    return(
      <Fragment>
        This is the Document List Page
        <CardGroup className="myDocList">
          {docs.map(docObj => {
            return <DocumentCard
                key={docObj.id}
                docObj={docObj}
                onRouteHandler={onRouteHandler}
            />
          })}

        </CardGroup>

      </Fragment>
    )
  }
}

export default DocumentList
