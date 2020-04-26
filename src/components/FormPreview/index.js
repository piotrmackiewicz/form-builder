import React from 'react'
import { Grid } from 'semantic-ui-react'
import FormHeader from './FormHeader/index'
import AddElementButtons from './AddElementButtons/index'
import { useSelector } from 'react-redux'
import FormElements from './FormElements/index'

const FormPreview = () => {
  const formElements = useSelector((s) => s.formElements)

  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <FormHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FormElements elements={formElements} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <AddElementButtons />
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormPreview
