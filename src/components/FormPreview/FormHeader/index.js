import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header, Button, Input } from 'semantic-ui-react'
import { setFormTitle } from 'redux/actions/index'

const FormHeader = ({ onFormTitleChange }) => {
  const dispatch = useDispatch()
  const formTitle = useSelector((s) => s.formTitle)

  const [editing, setEditing] = useState(false)
  const [currentFormTitle, setCurrentFormTitle] = useState(formTitle)

  const formTitleInput = useRef(null)

  useEffect(() => {
    if (editing) {
      formTitleInput.current.focus()
    }
  }, [editing])

  const handleChangeTitle = () => {
    dispatch(setFormTitle(currentFormTitle))
    setEditing(false)
  }

  const handleEditTitle = (e) => setCurrentFormTitle(e.target.value)

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleChangeTitle()
    }
  }

  if (editing) {
    return (
      <Input
        value={currentFormTitle}
        onChange={handleEditTitle}
        onKeyUp={handleKeyUp}
        onBlur={handleChangeTitle}
        ref={formTitleInput}
      />
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Header as="h1" style={{ marginBottom: 0 }}>
        {formTitle}
      </Header>
      <Button
        basic
        compact
        color="yellow"
        size="tiny"
        icon="edit"
        style={{ marginLeft: '15px' }}
        onClick={() => setEditing(true)}
      />
    </div>
  )
}

export default FormHeader
