import React, {Fragment} from 'react'
import Form from 'react-bootstrap/Form'


function SearchBar(){
  return (
    <Fragment>
    <Form>
      <Form.Control className="search" type="text" placeholder="Search"/>
    </Form>
    </Fragment>
  )
}

export default SearchBar
