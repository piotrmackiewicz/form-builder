import React from 'react'
import FieldPopup from '../FieldPopup/index'
import { Form } from 'semantic-ui-react'
import FieldWrapper from './FieldWrapper'

const FieldPreview = ({
  field,
  onRemoveField,
  onChangeFieldOrder,
  onEditField,
}) => {
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
    case 'button':
      triggerComponent = <Form.Button primary content={field.text} />
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
      onEditClick={onEditField}
      onRemoveClick={onRemoveField}
    />
  )
}

export default FieldPreview
