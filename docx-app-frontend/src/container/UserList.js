import React, {Fragment} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import MyDropdown from '../components/myDropdown.js'



class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users : []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/users')
    .then(resp => resp.json())
    .then(jsonData => {
      this.setState({
        users : jsonData
      })
    })
  }

  render(){
    // console.log(this.state.users, this.props.crtUserId)
    return(
      <Fragment>
        <Dropdown.Menu>
          {this.state.users.length === 0? null
            : this.state.users.map(userObj => (
              userObj.userId !== this.props.crtUserId? <MyDropdown
                key={userObj.userId}
                userObj={userObj}
                handleModalClick={this.props.handleModalClick}
              /> : null
            ))}
        </Dropdown.Menu>
      </Fragment>
    )
  }
}

export default UserList
