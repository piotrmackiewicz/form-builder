import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import FormHeader from './FormHeader/index'

const FormPreview = ({ onShowConfigPanelClick }) => {
  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <p>Form preview</p>
          <Button onClick={onShowConfigPanelClick}>Show panel</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FormHeader />
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormPreview
