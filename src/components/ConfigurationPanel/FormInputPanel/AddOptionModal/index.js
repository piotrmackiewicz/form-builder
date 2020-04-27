import React, { useState } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid'

const AddOptionModal = ({ onCancel, onSubmit, visible }) => {
  const [key, setKey] = useState('')
  const [text, setText] = useState('')
  const [value, setValue] = useState('')
  const [keyError, setKeyError] = useState(false)
  const [textError, setTextError] = useState(false)
  const [valueError, setValueError] = useState(false)

  const setDefaults = () => {
    setKey('')
    setText('')
    setValue('')
    setKeyError(false)
    setTextError(false)
    setValueError(false)
  }

  const handleSubmit = () => {
    if (!key) setKeyError(true)
    if (!text) setTextError(true)
    if (!value) setValueError(true)

    if (key && text && value) {
      onSubmit({
        id: uuidv4(),
        key,
        text,
        value,
      })
      setDefaults()
    }
  }

  const handleCancel = () => {
    setDefaults()
    onCancel()
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'key':
        setKey(e.target.value)
        if (!e.target.value) {
          setKeyError(true)
        } else {
          setKeyError(false)
        }
        break
      case 'text':
        setText(e.target.value)
        if (!e.target.value) {
          setTextError(true)
        } else {
          setTextError(false)
        }
        break
      case 'value':
        setValue(e.target.value)
        if (!e.target.value) {
          setValueError(true)
        } else {
          setValueError(false)
        }
        break
      default:
        break
    }
  }

  return (
    <Modal
      open={visible}
      closeOnEscape
      closeOnDimmerClick
      onClose={handleCancel}
    >
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Field
              control="input"
              label="Key"
              width={16}
              name="key"
              value={key}
              onChange={handleChange}
              error={
                keyError && {
                  content: 'Please enter key',
                  pointing: 'below',
                }
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              control="input"
              label="Text"
              width={16}
              name="text"
              value={text}
              onChange={handleChange}
              error={
                textError && {
                  content: 'Please enter text',
                  pointing: 'below',
                }
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              control="input"
              label="Value"
              width={16}
              name="value"
              value={value}
              onChange={handleChange}
              error={
                valueError && {
                  content: 'Please enter value',
                  pointing: 'below',
                }
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Button primary content="Add" />
            <Button color="red" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default AddOptionModal
