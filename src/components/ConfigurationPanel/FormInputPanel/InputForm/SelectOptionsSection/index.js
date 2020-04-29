import React from 'react'
import { Message, Button } from 'semantic-ui-react'
import OptionsList from './OptionsList/index'
import Wrapper from './Wrapper'
import NoOptionsMessage from './NoOptionsMessage'

const SelectOptionsSection = ({
  options,
  noOptionsError,
  onOptionDelete,
  onOptionAdd,
}) => {
  const renderNoOptionsError = () => {
    return (
      <Message negative size="small">
        You need to add at least one option
      </Message>
    )
  }

  const renderSelectOptionsList = () => {
    if (!options || options.length === 0) {
      return (
        <NoOptionsMessage info size="mini">
          No options added
        </NoOptionsMessage>
      )
    }
    return <OptionsList options={options} onDelete={onOptionDelete} />
  }

  return (
    <Wrapper>
      <p>Options:</p>
      {renderSelectOptionsList()}
      {noOptionsError && renderNoOptionsError()}
      <Button size="small" primary compact onClick={onOptionAdd}>
        Add option
      </Button>
    </Wrapper>
  )
}

export default SelectOptionsSection
