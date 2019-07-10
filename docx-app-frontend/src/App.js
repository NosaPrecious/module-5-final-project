import React, {Fragment} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Login  from './container/login.js'
import UserPage from './container/userpage.js'
import EditPage from './components/texteditor.js'
import Registration from './container/register.js'
import NotFound from './container/not_found.js'

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

// let editedText, copyArr, updateDocObj, idx, splittedArr, nDocObj

class App extends React.Component{

  constructor(){
    super()
    this.state={
      currentUser: null,
      selectedDocument: null,
      loading: true,
      redirectProfile : false
    }
  }

  //This makes the fetch request to authenticate the currentUser
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
        this.handleUpdateUser(data)
        this.setState({loading: false})
      })
    }else{
      this.setState({loading: false})
    }
  }

  //This redirect the current user to the profile based
  // on if he or she is login or logout
  handleUpdateUser = (currentUser) => {
    if(currentUser == null){
      this.setState({
      currentUser : currentUser
    })
  }else{
        this.setState({
          currentUser : currentUser
      })
    }
  }

  //This display the user profile page
  showProfile = (props) => this.state.loading ? null : (
    this.state.currentUser ? <UserPage
    user= {this.state.currentUser}
    handleUpdateUser={this.handleUpdateUser}
    docArr={this.state.docArr}
    onRouteHandler={this.onRouteHandler}
    routeprops = {props}
    handleOpenNewDocument={this.handleOpenNewDocument}
    handleDocumentDelete={this.handleDocumentDelete}
    /> : <Redirect to="/login"/>
  )

  handleOpenNewDocument = (e) => {
    console.log(e.target)
  }

  //This is shows the login page
  showLogIn = () => this.state.loading ? null : (
    this.state.currentUser ? <Redirect to="/profile" /> :
    <Login handleUpdateUser={this.handleUpdateUser} />
  )

  //This renders the textEditor page
  showEditPage = (props) => {

    // let handleEditorChange= this.handleEditorChange.bind(this)
    // let handleCreateNewDocument= this.handleCreateNewDocument.bind(this)
    let docId = parseInt(props.match.params.id)
    const{id} = this.state.currentUser
    return <EditPage
    handleCreateNewDocument={this.handleCreateNewDocument}
    handleEditorChange={this.handleEditorChange}
    userId = {id}
    docObj= {this.state.currentUser.docs.find(d => d.id === docId)}
    userdoc= {this.state.currentUser.user_docs.find(userDoc => userDoc.doc_id === docId)}
  />
  }

  //Event handler to handle editor changes
  handleEditorChange = (htmlVal, docObj) => {
    let docId = docObj.id
    let copyObj =JSON.parse(JSON.stringify(this.state.currentUser))
    let retDocObjFound = copyObj.docs.find(doc => doc.id === docId)
    retDocObjFound.data = htmlVal

        //Making a fetch call to update the text in the textEditor
        fetch(`http://localhost:3001/api/v1/docs/${docId}`,{
          method : "PUT",
          headers : {
            Content_Type : "application/json",
            Accept : "application/json"
          },
          body : JSON.stringify({
            data : htmlVal
          })
        })
        .then(resp => resp.json())
        .then(retData => {
          this.setState({
           currentUser :  copyObj
         })
        })
  }

  //Callback function for my post fetch request
  // to create a new document
  replacer = (key, value) =>{
    if(typeof value === 'object' || typeof value === 'string' || typeof value === 'number'){
        return value
      }
        return undefined


  }

  //This eventhandler opens a new document
  handleCreateNewDocument= (htmlVal, crtUserId, fileName) => {
      fetch("http://localhost:3001/api/v1/user_docs", {
        method : "POST",
        headers : {
          Content_Type : "application/json",
          Accept : "application/json"
        },
        body: JSON.stringify({
          user_id : crtUserId,
          input_text : htmlVal,
          file_name: fileName
        }, this.replacer)
      })
      .then(resp => resp.json())
      .then(jsonData => {
        this.setState({redirectProfile : true, currentUser: jsonData["user"]}, (_) => this.setState({redirectProfile : false}))
      })
  }

  handleDocumentDelete = (event) => {
    // console.log(event.target.dataset.documentId)
    let docId= parseInt(event.target.dataset.documentId)

    let userDocumentObject= {...this.state.currentUser}
    let foundDoc= userDocumentObject.docs.find(docObj => docObj.id === docId)
    //
    userDocumentObject.docs.splice(userDocumentObject.docs.indexOf(foundDoc), 1)

    let isDocOwneruser = userDocumentObject.user_docs.find(docuser => docuser.has_owner === true && docuser.doc_id === docId)

    if(isDocOwneruser){
      this.setState({
        currentUser : userDocumentObject
      }, () => console.log(this.state.currentUser.docs))
      this.makeFetchToDeleteDoc(docId)
    }else{
      alert("You don't have such permission")
    }

  }

  makeFetchToDeleteDoc = (id) => {
    let nId = id.toString()
    fetch(`http://localhost:3001/api/v1/docs/${nId}`,{
      method : "DELETE"
    }).then(resp => resp.json())
  }

  //This eventhandler for each document open button
  onRouteHandler = (event) => {
    let docId= event.target.dataset.docId
    let id= parseInt(docId)
    let docObj = {...this.state.currentUser}
    let selectDocument = docObj.docs.find(doc => doc.id === id)
    this.setState({
      selectedDocument : selectDocument
    })
  }



  render(){
    if(this.state.redirectProfile){
      return <Redirect to="/profile" />
    }


    return (
      <Fragment>
      <Container>
      <Switch>
        <Route exact path='/profile/:id' render={this.state.currentUser? this.showEditPage : null} />
        <Route exact path='/profile' render= {(props) =>{
          return this.showProfile(props)
        } }/>
        <Route exact path="/profile/textEditor" component={EditPage} />
        <Route exact path='/login' render= {this.showLogIn} />
        <Route exact path='/register_as_user' component={Registration}/>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route component={NotFound} />
      </Switch>
      </Container>
      </Fragment>
    );
  }

}

export default withRouter(App);
