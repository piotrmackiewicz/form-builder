import React from 'react'
import 'App.scss'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Transition } from 'semantic-ui-react'
import FormPreview from 'components/FormPreview/index'
import ConfigurationPanel from 'components/ConfigurationPanel/index'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const FormPreviewColumn = styled(Grid.Column)`
  z-index: 2;
`

const ConfigurationPanelColumn = styled(Grid.Column)`
  z-index: 1;
`

function App() {
  const configurationPanelMode = useSelector((s) => s.configurationPanelMode)

  const renderConfigurationPanel = () => (
    <ConfigurationPanelColumn width={8}>
      <ConfigurationPanel mode={configurationPanelMode} />
    </ConfigurationPanelColumn>
  )

  return (
    <Grid padded>
      <FormPreviewColumn width={8}>
        <FormPreview />
      </FormPreviewColumn>
      <Transition.Group animation="fade right" duration={500}>
        {configurationPanelMode && renderConfigurationPanel()}
      </Transition.Group>
    </Grid>
  )
}

export default App
