import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import styled from 'styled-components'
import GroupButtons from './GroupButtons/index'
import { useDispatch } from 'react-redux'
import { removeFormGroup } from 'redux/actions/index'

const InputGroupLabelField = styled(Form.Field)`
  margin-bottom: 0 !important;
`

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
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
    return null
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
    console.log(`adding field to group ${groupId}`)
  }

  const renderGroups = () =>
    groups.map((e) => (
      <React.Fragment>
        <small>{e.id}</small>
        {e.label && renderGroupLabel(e.label)}
        <FormGroupWrapper>
          <Form.Group key={e.id}>{renderFields(e.fields)}</Form.Group>
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
