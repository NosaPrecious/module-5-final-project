import React, {Fragment} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Login  from './container/login.js'
import UserPage from './container/userpage.js'
import EditPage from './components/texteditor.js'
// import Registration from './container/register.js'
import NotFound from './container/not_found.js'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class App extends React.Component{

  constructor(){
    super()
    this.state={
      currentUser: null,
      selectedDocument: null,
      docArr: [],
      loading: true
    }
  }

  componentDidMount(){
    let token= localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: {
          "Authentication" : `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
         // debugger
        this.handleUpdateUser(data)
        this.setState({loading: false})
      })
    }else{
      this.setState({loading: false})
    }
  }

  handleUpdateUser = (currentUser) => {
    debugger
    if(currentUser == null){
      this.setState({
      currentUser : currentUser,
    })
  }else{
      let updatedDocArr = [...this.state.docArr, ...currentUser.docs]
        this.setState({
          currentUser : currentUser,
          docArr : updatedDocArr
      })
    }
  }

  showProfile = (props) => this.state.loading ? null : (
    this.state.currentUser ? <UserPage
    user= {this.state.currentUser}
    handleUpdateUser={this.handleUpdateUser}
    docArr={this.state.docArr}
    onRouteHandler={this.onRouteHandler}
    routeprops = {props}

    /> : <Redirect to="/login"/>
  )

  showLogIn = () => this.state.loading ? null : (
    this.state.currentUser ? <Redirect to="/profile" /> :
    <Login handleUpdateUser={this.handleUpdateUser} />
  )

  // showEditPage = (props) => {
  //   return this.state.currentUser? <EditPage routeprops={props} /> : <Redirect to="/login"/>
  // }

  onRouteHandler = (event) => {
    debugger
    let docId= event.target.dataset.docId
    let id= parseInt(docId)
    let selectDocument = this.state.docArr.find(doc => doc.id === id)
    this.setState({
      selectedDocument : selectDocument
    }, () => console.log(this.state.selectedDocument))
  }

  render(){
    return (
      <Fragment>
      <Container>
      <Switch>
        <Route exact path='/profile/:id' render={(props) => {
          let id = props.match.params.id
          return <EditPage
          currentDoc = {this.state.selectedDocument}
          docObj= {this.state.docArr.find(d => d.id === id)}/>
        } } />
        <Route exact path='/profile' render= {(props) =>{
          return this.showProfile(props)
        } }/>
        <Route exact path='/login' render= {this.showLogIn} />
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route component={NotFound} />
      </Switch>
      </Container>
      </Fragment>
    );
  }

}

export default withRouter(App);
