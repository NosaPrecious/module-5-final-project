import React, {Fragment} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import '../customcss/custom.css'

const MyDropdown = (props) => {
    const{userObj: {userId, firstname, lastname}, handleModalClick}= props


  return(
    <Fragment>
      <Dropdown.Item
      as={Button}
      id="myBtn"
      onClick={(_) => handleModalClick(userId, firstname, lastname)}>
        {`${firstname} ${lastname}`}
      </Dropdown.Item>
    </Fragment>
  )

}

export default MyDropdown
