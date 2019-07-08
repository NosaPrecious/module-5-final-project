import React, {Fragment} from 'react'
import Form from 'react-bootstrap/Form'


const CheckBtn = ({name, value}) => {
      // console.log(props)
  return (
    <Fragment>
    <Form>
      {['checkbox'].map(type => (
      <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`my${type}`}
            label={name}
            defaultChecked={value}
          />
        </div>
      ))}
      </Form>
    </Fragment>
  )
}

export default CheckBtn
