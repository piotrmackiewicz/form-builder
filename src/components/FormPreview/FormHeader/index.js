import React, { useState, useEffect, useRef } from 'react'
import { Header, Button, Input } from 'semantic-ui-react'

const FormHeader = ({ value, onFormTitleChange }) => {
  const [editing, setEditing] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(value)

  const formTitleInput = useRef(null)

  useEffect(() => {
    if (editing) {
      formTitleInput.current.focus()
    }
  }, [editing])

  const handleChangeTitle = () => {
    onFormTitleChange(currentTitle)
    setEditing(false)
  }

  const handleEditTitle = (e) => setCurrentTitle(e.target.value)

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleChangeTitle()
    }
  }

  if (editing) {
    return (
      <Input
        value={currentTitle}
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
        {value}
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
