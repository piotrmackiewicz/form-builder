import React, { useState } from 'react'
import {
  Header,
  Grid,
  Form,
  Button,
  Message,
  Modal,
  Input,
  List,
} from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addFormGroup,
  setConfigurationPanelMode,
  addInputField,
  setConfigurationPanelGroupId,
} from 'redux/actions/index'
import AddOptionModal from './AddOptionModal/index'
import OptionsList from './OptionsList/index'
import { v4 as uuidv4 } from 'uuid'

const FormInputPanel = () => {
  const groupId = useSelector((s) => s.configurationPanelGroupId)
  const dispatch = useDispatch()
  const [selectedInputType, setSelectedInputType] = useState('singleLineText')
  const [placeholder, setPlaceholder] = useState('')
  const [options, setOptions] = useState([])
  const [addOptionModalVisible, setAddOptionModalVisible] = useState(false)

  const setDefaults = () => {
    setPlaceholder('')
    setOptions([])
    setSelectedInputType('singleLineText')
    dispatch(setConfigurationPanelGroupId(null))
    dispatch(setConfigurationPanelMode(null))
  }

  const handleChange = (e) => setPlaceholder(e.target.value)

  const handleSubmit = () => {
    let input = {
      id: uuidv4(),
      type: selectedInputType,
      placeholder,
    }
    if (selectedInputType === 'select') {
      input.options = options
    }
    dispatch(addInputField(groupId, input))
    setDefaults()
  }

  const inputTypeOptions = [
    {
      key: 'slt',
      text: 'Single line text',
      value: 'singleLineText',
    },
    {
      key: 'mlt',
      text: 'Multi line text',
      value: 'multiLineText',
    },
    {
      key: 's',
      text: 'Select',
      value: 'select',
    },
  ]

  const renderSelectOptionsList = () => {
    if (!options || options.length === 0) {
      return (
        <Message info size="mini" style={{ marginBottom: '.5em' }}>
          No options added
        </Message>
      )
    }
    return <OptionsList options={options} />
  }

  const renderSelectOptions = () => {
    return (
      <div style={{ marginBottom: '1em' }}>
        <p>Options:</p>
        <div style={{ display: 'block' }}>{renderSelectOptionsList()}</div>
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

  const renderForm = () => (
    <Grid.Row>
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Placeholder"
            name="placeholder"
            value={placeholder}
            onChange={handleChange}
          ></Form.Input>
          {selectedInputType === 'select' && renderSelectOptions()}
          <Form.Button primary content="Create" />
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
          <Header as="h2">New input to group {groupId}</Header>
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
