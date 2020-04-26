import React from 'react'
import { Grid } from 'semantic-ui-react'
import FormHeader from './FormHeader/index'
import AddGroupButton from './AddGroupButton/index'
import { useSelector } from 'react-redux'
import FormGroups from './FormGroups/index'

const FormPreview = () => {
  const formGroups = useSelector((s) => s.formGroups)

  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <FormHeader />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <FormGroups groups={formGroups} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <AddGroupButton />
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormPreview
