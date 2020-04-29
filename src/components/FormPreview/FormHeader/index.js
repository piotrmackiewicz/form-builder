import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { setFormTitle } from 'redux/actions/index'
import Wrapper from './Wrapper'
import TextDisplay from './TextDisplay'
import EditButton from './EditButton'

const FormHeader = () => {
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
    <Wrapper>
      <TextDisplay value={formTitle} />
      <EditButton
        basic
        compact
        color="yellow"
        size="tiny"
        icon="edit"
        onClick={() => setEditing(true)}
      />
    </Wrapper>
  )
}

export default FormHeader
