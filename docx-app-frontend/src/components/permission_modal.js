import React, {Fragment} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



class PermissionModal extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      readAccess : false,
      writeAccess : false
    }
  }

  handleChangeChkbx = ({currentTarget : input}) => {
    // debugger
    this.setState({
      [input.name] : input.checked
    }, (_) => console.log(this.state))
  }


  render(){
     // debugger
    // console.log(this.props)
    return(
        <Fragment>
            <Modal show={this.props.show} onHide={this.props.handleClose} backdrop={false}>
                <Modal.Header closeButton>
                  <Modal.Title>{`Set Permission for ${this.props.permittedUser}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                      {['checkbox'].map(chkbx => (
                        <div key={`inline-${chkbx}`} className="mb-3">
                          <Form.Check
                            inline
                            label="Read Access"
                            type={chkbx}
                            id="read-access"
                            name="readAccess"
                            onChange={this.handleChangeChkbx}
                            />
                          <Form.Check
                            inline
                            label="Write Access"
                            type={chkbx}
                            id="write-access"
                            name="writeAccess"
                            onChange={this.handleChangeChkbx}
                            />
                        </div>
                      ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.props.handleClose}>
                    close
                  </Button>
                  <Button variant="primary" onClick={(_) => this.props.handleSaveChanges(this.props.docObj.id, this.state.readAccess, this.state.writeAccess, this.props.permittedUserId)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
  }
}

export default PermissionModal
