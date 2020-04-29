import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { PLACEHOLDER_INPUTS, BUTTON, SELECT } from '../constants/inputTypes'
import PlaceholderInput from './PlaceholderInput'
import ButtonProperties from './ButtonProperties'
import SelectOptionsSection from './SelectOptionsSection/index'
import FormButtons from './FormButtons/index'

const InputForm = ({
  selectedInputType,
  placeholder,
  onChange,
  buttonText,
  noButtonTextError,
  options,
  noOptionsError,
  onOptionDelete,
  onOptionAddClick,
  onSubmit,
  onCancel,
  submitText,
}) => (
  <Grid.Row>
    <Grid.Column>
      <Form>
        {PLACEHOLDER_INPUTS.includes(selectedInputType) && (
          <PlaceholderInput value={placeholder} onChange={onChange} />
        )}
        {selectedInputType === BUTTON && (
          <ButtonProperties
            buttonText={buttonText}
            noButtonTextError={noButtonTextError}
            onChange={onChange}
          />
        )}
        {selectedInputType === SELECT && (
          <SelectOptionsSection
            options={options}
            noOptionsError={noOptionsError}
            onOptionDelete={onOptionDelete}
            onOptionAdd={onOptionAddClick}
          />
        )}
        <FormButtons
          onSubmit={onSubmit}
          onCancel={onCancel}
          submitText={submitText}
        />
      </Form>
    </Grid.Column>
  </Grid.Row>
)

export default InputForm
