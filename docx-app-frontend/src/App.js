import React, {Fragment} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Login  from './container/login.js'
import UserPage from './container/userpage.js'
import EditPage from './container/edit.js'
import Registration from './container/register.js'
import NotFound from './container/not_found.js'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class App extends React.Component{

  constructor(){
    super()
    this.state={
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    let token= localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3001/api/v1/profile", {
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.handleUpdateUser(data)
        this.setState({
          loading: false
        })
      })
    }else{
      this.setState({
        loading: false
      })
    }
  }

  handleUpdateUser = (currentUser) => {
    this.setState({currentUser : currentUser})
  }

  showProfile = () => this.state.loading ? null : (
    this.state.currentUser ? <UserPage
    user= {this.state.currentUser}/> : <Redirect to="/login"/>
  )

  showLogIn = () => this.state.loading ? null : (
    this.state.currentUser ? <Redirect to="/profile" /> :
    <Login handleUpdateUser={this.handleUpdateUser} />
  )

  render(){
    return (
      <Fragment>
      <Container>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path='/profile' render= {this.showProfile} />
        <Route exact path='/login' render= {this.showLogIn} />

        <Route component={NotFound} />
      </Switch>
      </Container>
      </Fragment>
    );
  }

}

export default withRouter(App);
