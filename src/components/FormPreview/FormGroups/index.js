import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import GroupButtons from './GroupButtons/index'
import { useDispatch } from 'react-redux'
import {
  removeFormGroup,
  setConfigurationPanelMode,
  setConfigurationPanelGroupId,
  changeGroupOrder,
} from 'redux/actions/index'
import { FORM_INPUT } from 'redux/constants/configuration-panel-modes'

const InputGroupLabelField = styled(Form.Field)`
  margin-bottom: 0 !important;
`

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NoInputGroupsMessage = styled(Message)`
  margin-left: 0.5em !important;
`

const FormGroups = ({ groups }) => {
  const dispatch = useDispatch()

  const renderFields = (fields) => {
    if (fields.length === 0) {
      return (
        <NoInputGroupsMessage compact info size="mini">
          No input fields
        </NoInputGroupsMessage>
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

  const handleChangeGroupOrder = (idx, direction) => {
    if (idx === 0 && direction === 'up') return
    if (idx === groups.length - 1 && direction === 'down') return
    dispatch(changeGroupOrder(idx, direction))
  }

  const renderGroups = () =>
    groups.map((e, idx) => (
      <React.Fragment key={e.id}>
        {e.label && renderGroupLabel(e.label)}
        <FormGroupWrapper>
          <Form.Group>{renderFields(e.fields)}</Form.Group>
          <GroupButtons
            onRemoveGroupClick={() => handleRemoveGroup(e.id)}
            onAddFieldClick={() => handleAddField(e.id)}
            onMoveUpClick={() => handleChangeGroupOrder(idx, 'up')}
            onMoveDownClick={() => handleChangeGroupOrder(idx, 'down')}
          />
        </FormGroupWrapper>
      </React.Fragment>
    ))

  return <Form>{renderGroups()}</Form>
}

export default FormGroups
