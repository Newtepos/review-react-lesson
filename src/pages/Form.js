import React from 'react'
import SubmitForm from '../component/submitForm'

function Form(props) {
  return (
    <SubmitForm submitForm={props.submitForm}></SubmitForm>
  )
}

export default Form
