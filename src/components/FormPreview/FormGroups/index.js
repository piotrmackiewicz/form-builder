import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import GroupButtons from './GroupButtons/index'
import { useDispatch } from 'react-redux'
import {
  removeFormGroup,
  setConfigurationPanelMode,
  setConfigurationPanelGroupId,
} from 'redux/actions/index'
import { FORM_INPUT } from 'redux/constants/configuration-panel-modes'

const InputGroupLabelField = styled(Form.Field)`
  margin-bottom: 0 !important;
`

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`

const FormGroups = ({ groups }) => {
  const dispatch = useDispatch()

  const renderFields = (fields) => {
    if (fields.length === 0) {
      return (
        <Message compact info size="mini">
          No input fields
        </Message>
      )
    }
    return fields.map((f) => {
      switch (f.type) {
        case 'singleLineText':
          return <Form.Input placeholder={f.placeholder} />
        case 'multiLineText':
          return <Form.TextArea placeholder={f.placeholder} />
        case 'select':
          return (
            <Form.Select
              fluid
              options={f.options}
              placeholder={f.placeholder}
            />
          )
        default:
          return null
      }
    })
  }

  const renderGroupLabel = (value) => (
    <InputGroupLabelField>
      <label>{value}</label>
    </InputGroupLabelField>
  )

  const handleRemoveGroup = (groupId) => {
    dispatch(removeFormGroup(groupId))
  }

  const handleAddField = (groupId) => {
    dispatch(setConfigurationPanelMode(FORM_INPUT))
    dispatch(setConfigurationPanelGroupId(groupId))
  }

  const renderGroups = () =>
    groups.map((e) => (
      <React.Fragment key={e.id}>
        {e.label && renderGroupLabel(e.label)}
        <FormGroupWrapper>
          <Form.Group>{renderFields(e.fields)}</Form.Group>
          <GroupButtons
            onRemoveGroupClick={() => handleRemoveGroup(e.id)}
            onAddFieldClick={() => handleAddField(e.id)}
          />
        </FormGroupWrapper>
      </React.Fragment>
    ))

  return <Form>{renderGroups()}</Form>
}

export default FormGroups
