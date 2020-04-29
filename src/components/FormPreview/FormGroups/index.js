import React from 'react'
import { Form } from 'semantic-ui-react'
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
import InputGroupLabelField from './InputGroupLabelField'
import FormGroupWrapper from './FormGroupWrapper'
import NoInputGroupsMessage from './NoInputGroupsMessage'

const FormGroups = ({ groups }) => {
  const dispatch = useDispatch()

  const isElementExtreme = (idx, direction, arrLength) =>
    (direction === 'left' && idx === 0) ||
    (direction === 'right' && idx === arrLength - 1)

  const handleFieldRemove = (groupId, fieldId) => {
    dispatch(removeInputField(groupId, fieldId))
  }

  const handleChangeFieldOrder = (idx, direction, groupId, fields) => {
    if (isElementExtreme(idx, direction, fields.length)) return
    dispatch(changeFieldOrder(idx, direction, groupId))
  }

  const handleChangeGroupOrder = (idx, direction) => {
    if (isElementExtreme(idx, direction, groups.length)) return
    dispatch(changeGroupOrder(idx, direction))
  }

  const handleEditField = (fieldId, groupId) => {
    dispatch(setEditedFieldId(fieldId))
    dispatch(setConfigurationPanelGroupId(groupId))
    dispatch(setConfigurationPanelMode(EDIT_FORM_INPUT))
  }

  const handleRemoveGroup = (groupId) => {
    dispatch(removeFormGroup(groupId))
  }

  const handleAddField = (groupId) => {
    dispatch(setConfigurationPanelMode(FORM_INPUT))
    dispatch(setConfigurationPanelGroupId(groupId))
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
