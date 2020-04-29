import React, { useState, useEffect } from 'react'
import { Header, Grid, Form, Button, Message } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setConfigurationPanelMode,
  addInputField,
  setConfigurationPanelGroupId,
  editInputField,
} from 'redux/actions/index'
import {
  FORM_INPUT,
  EDIT_FORM_INPUT,
} from 'redux/constants/configuration-panel-modes'
import AddOptionModal from './AddOptionModal/index'
import OptionsList from './OptionsList/index'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const FormInputPanel = ({ mode }) => {
  const groupId = useSelector((s) => s.configurationPanelGroupId)
  const editedField = useSelector((s) => {
    if (!s.editedFieldId) return null
    const foundGroup = s.formGroups.find((fg) => fg.id === groupId)
    if (foundGroup) {
      return foundGroup.fields.find((f) => f.id === s.editedFieldId)
    } else {
      return null
    }
  })
  const dispatch = useDispatch()
  const [selectedInputType, setSelectedInputType] = useState('singleLineText')
  const [placeholder, setPlaceholder] = useState('')
  const [buttonText, setButtonText] = useState('')
  const [noButtonTextError, setNoButtonTextError] = useState(false)
  const [options, setOptions] = useState([])
  const [addOptionModalVisible, setAddOptionModalVisible] = useState(false)
  const [noOptionsError, setNoOptionsError] = useState(false)

  useEffect(() => {
    if (editedField && mode === EDIT_FORM_INPUT) {
      setSelectedInputType(editedField.type)
      if (
        ['singleLineText', 'multiLineText', 'select'].includes(editedField.type)
      ) {
        setPlaceholder(editedField.placeholder)
        if (editedField.options) setOptions(editedField.options)
      }
      if (editedField.type === 'button') {
        setButtonText(editedField.text)
      }
    } else {
      setSelectedInputType('singleLineText')
      setPlaceholder('')
      setOptions([])
    }
  }, [editedField, mode])

  const setDefaults = () => {
    setPlaceholder('')
    setOptions([])
    setSelectedInputType('singleLineText')
    setNoOptionsError(false)
    setNoButtonTextError(false)
    dispatch(setConfigurationPanelGroupId(null))
    dispatch(setConfigurationPanelMode(null))
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'placeholder':
        setPlaceholder(e.target.value)
        break
      case 'buttonText':
        if (e.target.value.trim()) {
          setNoButtonTextError(false)
        }
        setButtonText(e.target.value)
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    const input = {
      type: selectedInputType,
    }
    if (
      ['singleLineText', 'multiLineText', 'select'].includes(selectedInputType)
    ) {
      input.placeholder = placeholder
    }
    if (selectedInputType === 'select') {
      if (options.length === 0) {
        setNoOptionsError(true)
        return
      }
      input.options = options
    }
    if (selectedInputType === 'button') {
      if (!buttonText.trim()) {
        setNoButtonTextError(true)
        return
      }
      input.text = buttonText
    }
    if (mode === FORM_INPUT) {
      input.id = uuidv4()
      dispatch(addInputField(groupId, input))
    }
    if (mode === EDIT_FORM_INPUT) {
      dispatch(editInputField(editedField.id, input, groupId))
    }
    setDefaults()
  }

  const handleCancel = () => {
    setDefaults()
    dispatch(setConfigurationPanelMode(null))
  }

  const inputTypeOptions = [
    {
      key: 'slt',
      text: 'Single Line Text',
      value: 'singleLineText',
    },
    {
      key: 'mlt',
      text: 'Multi Line Text',
      value: 'multiLineText',
    },
    {
      key: 's',
      text: 'Select',
      value: 'select',
    },
    {
      key: 'b',
      text: 'Button',
      value: 'button',
    },
  ]

  const renderNoOptionsError = () => {
    return (
      <Message negative size="small">
        You need to add at least one option
      </Message>
    )
  }

  const handleOptionDelete = (optionId) => {
    setOptions((prevOptions) => prevOptions.filter((po) => po.id !== optionId))
  }

  const renderSelectOptionsList = () => {
    if (!options || options.length === 0) {
      return (
        <Message info size="mini" style={{ marginBottom: '.5em' }}>
          No options added
        </Message>
      )
    }
    return <OptionsList options={options} onDelete={handleOptionDelete} />
  }

  const renderSelectOptions = () => {
    return (
      <div style={{ marginBottom: '1em' }}>
        <p>Options:</p>
        <div style={{ display: 'block' }}>{renderSelectOptionsList()}</div>
        {noOptionsError && renderNoOptionsError()}
        <Button
          size="small"
          primary
          compact
          onClick={(e) => {
            e.preventDefault()
            setAddOptionModalVisible(true)
          }}
        >
          Add option
        </Button>
      </div>
    )
  }

  const renderFormButtonText = () => {
    if (mode === FORM_INPUT) {
      return 'Create'
    }
    if (mode === EDIT_FORM_INPUT) {
      return 'Save'
    }
  }

  const renderPlaceholderInput = () => (
    <Form.Input
      placeholder="Placeholder"
      name="placeholder"
      value={placeholder}
      onChange={handleChange}
    />
  )

  const renderButtonProperties = () => (
    <React.Fragment>
      <Form.Input
        placeholder="Button text"
        name="buttonText"
        value={buttonText}
        onChange={handleChange}
        error={
          noButtonTextError && {
            content: 'Please enter button text',
            pointing: 'below',
          }
        }
      />
    </React.Fragment>
  )

  const ButtonsWrapper = styled.div`
    display: flex;
  `

  const renderForm = () => (
    <Grid.Row>
      <Grid.Column>
        <Form>
          {['select', 'singleLineText', 'multiLineText'].includes(
            selectedInputType
          ) && renderPlaceholderInput()}
          {selectedInputType === 'button' && renderButtonProperties()}
          {selectedInputType === 'select' && renderSelectOptions()}
          <ButtonsWrapper>
            <Button primary onClick={handleSubmit}>
              {renderFormButtonText()}
            </Button>
            <Button color="red" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonsWrapper>
        </Form>
      </Grid.Column>
    </Grid.Row>
  )

  const handleInputTypeChange = (e, v) => {
    setSelectedInputType(v.value)
  }

  const handleSubmitAddOption = (formValues) => {
    setOptions((prevOptions) => [...prevOptions, formValues])
    setAddOptionModalVisible(false)
    setNoOptionsError(false)
  }

  const renderHeaderText = () => {
    if (mode === FORM_INPUT) {
      return `New input to group ${groupId}`
    }
    if (mode === EDIT_FORM_INPUT) {
      return `Edit field in group ${groupId}`
    }
  }

  return (
    <React.Fragment>
      <AddOptionModal
        onCancel={() => setAddOptionModalVisible(false)}
        onSubmit={handleSubmitAddOption}
        visible={addOptionModalVisible}
      />
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">{renderHeaderText()}</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form.Select
            fluid
            label="Input type"
            value={selectedInputType}
            options={inputTypeOptions}
            onChange={handleInputTypeChange}
          />
        </Grid.Column>
      </Grid.Row>
      {selectedInputType && renderForm()}
    </React.Fragment>
  )
}

export default FormInputPanel
