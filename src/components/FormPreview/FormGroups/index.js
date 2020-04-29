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
  removeInputField,
  changeFieldOrder,
  setEditedFieldId,
} from 'redux/actions/index'
import {
  FORM_INPUT,
  EDIT_FORM_INPUT,
} from 'redux/constants/configuration-panel-modes'
import FieldPreview from './FieldPreview/index'

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

  const handleFieldRemove = (groupId, fieldId) => {
    dispatch(removeInputField(groupId, fieldId))
  }

  const handleChangeFieldOrder = (idx, direction, groupId, fields) => {
    if (idx === 0 && direction === 'left') return
    if (idx === fields.length - 1 && direction === 'right') return
    dispatch(changeFieldOrder(idx, direction, groupId))
  }

  const handleEditField = (fieldId, groupId) => {
    dispatch(setEditedFieldId(fieldId))
    dispatch(setConfigurationPanelGroupId(groupId))
    dispatch(setConfigurationPanelMode(EDIT_FORM_INPUT))
  }

  const renderFields = (fields, groupId) => {
    if (fields.length === 0) {
      return (
        <NoInputGroupsMessage compact info size="mini">
          No input fields
        </NoInputGroupsMessage>
      )
    }
    return fields.map((f, idx) => (
      <FieldPreview
        key={f.id}
        field={f}
        onRemoveField={() => handleFieldRemove(groupId, f.id)}
        onChangeFieldOrder={(direction) =>
          handleChangeFieldOrder(idx, direction, groupId, fields)
        }
        onEditField={() => handleEditField(f.id, groupId)}
      />
    ))
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
          <Form.Group>{renderFields(e.fields, e.id)}</Form.Group>
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
