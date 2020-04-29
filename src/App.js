import React from 'react'
import 'App.scss'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Transition } from 'semantic-ui-react'
import FormPreview from 'components/FormPreview/index'
import ConfigurationPanel from 'components/ConfigurationPanel/index'
import { useSelector, useDispatch } from 'react-redux'
import CloseConfigurationPanelButton from 'components/CloseConfigurationPanelButton'
import { setConfigurationPanelMode } from 'redux/actions/index'
import ConfigurationPanelColumn from 'components/ConfigurationPanel/ConfigurationPanelColumn'
import FormPreviewColumn from 'components/FormPreview/FormPreviewColumn'

function App() {
  const configurationPanelMode = useSelector((s) => s.configurationPanelMode)
  const dispatch = useDispatch()

  const renderConfigurationPanel = () => (
    <ConfigurationPanelColumn width={4}>
      <CloseConfigurationPanelButton
        onClick={() => dispatch(setConfigurationPanelMode(null))}
      />
      <ConfigurationPanel mode={configurationPanelMode} />
    </ConfigurationPanelColumn>
  )

  return (
    <Grid padded id="globalWrapper">
      <FormPreviewColumn width={12}>
        <FormPreview />
      </FormPreviewColumn>
      <Transition.Group animation="fly left" duration={500}>
        {configurationPanelMode && renderConfigurationPanel()}
      </Transition.Group>
    </Grid>
  )
}

export default App
