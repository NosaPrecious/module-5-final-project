import React, {Fragment} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import UserList from '../container/UserList.js'

const Permission= (props) => {

  return(
    <Fragment>
      <Row>
        <Col>
          <Dropdown size="sm" as={ButtonGroup}>
            <Button variant="primary">Share</Button>
            <Dropdown.Toggle
              split
              variant="primary"
              id="dropdown-split-basic"/>
              <UserList
              handleModalClick={props.handleModalClick}
              crtUserId={props.crtUserId}
              />
            </Dropdown>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Permission
