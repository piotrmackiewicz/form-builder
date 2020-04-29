import React from 'react'
import FieldPopup from '../FieldPopup/index'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'

const FieldWrapper = styled.div`
  position: relative;
  padding: 0 0.5em;
`

const FieldPreview = ({ field, onRemoveField, onChangeFieldOrder }) => {
  let triggerComponent = null
  switch (field.type) {
    case 'singleLineText':
      triggerComponent = <Form.Input placeholder={field.placeholder} />
      break
    case 'multiLineText':
      triggerComponent = <Form.TextArea placeholder={field.placeholder} />
      break
    case 'select':
      triggerComponent = (
        <Form.Select
          fluid
          options={field.options}
          placeholder={field.placeholder}
        />
      )
      break
    default:
      break
  }
  if (!triggerComponent) return null
  return (
    <FieldPopup
      key={field.id}
      triggerComponent={<FieldWrapper>{triggerComponent}</FieldWrapper>}
      onLeftClick={() => onChangeFieldOrder('left')}
      onRightClick={() => onChangeFieldOrder('right')}
      onRemoveClick={onRemoveField}
    />
  )
}

export default FieldPreview
