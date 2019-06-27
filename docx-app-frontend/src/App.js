import React, {Fragment} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import Login  from './container/login.js'
import UserPage from './container/userpage.js'


function App() {
  return (
    <Fragment>
    <Container>
      <Login /><br/>
      <UserPage /><br/>
    </Container>
    </Fragment>
  );
}

export default App;
