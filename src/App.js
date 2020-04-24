import React, { useState } from 'react'
import 'App.scss'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Transition } from 'semantic-ui-react'
import FormPreview from 'components/FormPreview/index'
import ConfigurationPanel from 'components/ConfigurationPanel/index'
import styled from 'styled-components'

const FormPreviewColumn = styled(Grid.Column)`
  z-index: 2;
`

const ConfigurationPanelColumn = styled(Grid.Column)`
  background-color: blue;
  z-index: 1;
`

function App() {
  const [configurationPanelVisible, setConfigurationPanelVisible] = useState(
    false
  )

  const renderConfigurationPanel = () => (
    <ConfigurationPanelColumn width={8}>
      <ConfigurationPanel />
    </ConfigurationPanelColumn>
  )

  return (
    <Grid padded>
      <FormPreviewColumn width={8}>
        <FormPreview
          onShowConfigPanelClick={() =>
            setConfigurationPanelVisible((prev) => !prev)
          }
        />
      </FormPreviewColumn>
      <Transition.Group animation="fade right" duration={500}>
        {configurationPanelVisible && renderConfigurationPanel()}
      </Transition.Group>
    </Grid>
  )
}

export default App
