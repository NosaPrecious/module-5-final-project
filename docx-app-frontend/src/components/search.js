import React, {Fragment} from 'react'
import Form from 'react-bootstrap/Form'


function SearchBar(props){
  // console.log(props)
  return (
    <Fragment>
    <Form>
      <Form.Control
      className="search"
      type="text"
      placeholder="Search"
      value={props.value}
      onChange={props.onSearchHandler}
      />
    </Form>
    </Fragment>
  )
}

export default SearchBar
