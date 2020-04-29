import React, { useState, useEffect } from 'react'
import { Header, Grid, Form } from 'semantic-ui-react'
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
import { v4 as uuidv4 } from 'uuid'
import inputTypeOptions from './constants/inputTypeOptions'
import {
  SINGLE_LINE_TEXT,
  SELECT,
  BUTTON,
  PLACEHOLDER_INPUTS,
} from './constants/inputTypes'
import InputForm from './InputForm/index'

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
  const [selectedInputType, setSelectedInputType] = useState(SINGLE_LINE_TEXT)
  const [placeholder, setPlaceholder] = useState('')
  const [buttonText, setButtonText] = useState('')
  const [noButtonTextError, setNoButtonTextError] = useState(false)
  const [options, setOptions] = useState([])
  const [addOptionModalVisible, setAddOptionModalVisible] = useState(false)
  const [noOptionsError, setNoOptionsError] = useState(false)

  useEffect(() => {
    if (editedField && mode === EDIT_FORM_INPUT) {
      setSelectedInputType(editedField.type)
      if (PLACEHOLDER_INPUTS.includes(editedField.type)) {
        setPlaceholder(editedField.placeholder)
        if (editedField.options) setOptions(editedField.options)
      }
      if (editedField.type === BUTTON) {
        setButtonText(editedField.text)
      }
    } else {
      setSelectedInputType(SINGLE_LINE_TEXT)
      setPlaceholder('')
      setOptions([])
    }
  }, [editedField, mode])

  const setDefaults = () => {
    setPlaceholder('')
    setOptions([])
    setSelectedInputType(SINGLE_LINE_TEXT)
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
    if (PLACEHOLDER_INPUTS.includes(selectedInputType)) {
      input.placeholder = placeholder
    }
    if (selectedInputType === SELECT) {
      if (options.length === 0) {
        setNoOptionsError(true)
        return
      }
      input.options = options
    }
    if (selectedInputType === BUTTON) {
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

  const handleOptionDelete = (optionId) => {
    setOptions((prevOptions) => prevOptions.filter((po) => po.id !== optionId))
  }

  const handleInputTypeChange = (e, v) => {
    setSelectedInputType(v.value)
  }

  const handleAddOption = (formValues) => {
    setOptions((prevOptions) => [...prevOptions, formValues])
    setAddOptionModalVisible(false)
    setNoOptionsError(false)
  }

  const getSubmitButtonText = () => {
    if (mode === FORM_INPUT) {
      return 'Create'
    }
    if (mode === EDIT_FORM_INPUT) {
      return 'Save'
    }
    return '???'
  }

  const getHeaderText = () => {
    if (mode === FORM_INPUT) {
      return `New input to group ${groupId}`
    }
    if (mode === EDIT_FORM_INPUT) {
      return `Edit field in group ${groupId}`
    }
    return '???'
  }

  return (
    <React.Fragment>
      <AddOptionModal
        onCancel={() => setAddOptionModalVisible(false)}
        onSubmit={handleAddOption}
        visible={addOptionModalVisible}
      />
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">{getHeaderText()}</Header>
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
      {selectedInputType && (
        <InputForm
          selectedInputType={selectedInputType}
          placeholder={placeholder}
          onChange={handleChange}
          buttonText={buttonText}
          noButtonTextError={noButtonTextError}
          options={options}
          noOptionsError={noOptionsError}
          onOptionDelete={handleOptionDelete}
          onOptionAddClick={(e) => {
            e.preventDefault()
            setAddOptionModalVisible(true)
          }}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          submitText={getSubmitButtonText()}
        />
      )}
    </React.Fragment>
  )
}

export default FormInputPanel
