import React from 'react'
import { Grid } from 'semantic-ui-react'
import FormHeader from './FormHeader/index'
import AddGroupButton from './AddGroupButton'
import { useSelector } from 'react-redux'
import FormGroups from './FormGroups/index'
import DownloadButton from './DownloadButton'

const FormPreview = () => {
  const formGroups = useSelector((s) => s.formGroups)
  const formTitle = useSelector((s) => s.formTitle)

  const handleDownload = () => {
    const filename = `${formTitle.trim()}-form-structure.json`
    const contentType = 'application/json;charset=utf-8;'
    const objectData = {
      formTitle,
      formGroups,
    }
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob(
        [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
        { type: contentType }
      )
      navigator.msSaveOrOpenBlob(blob, filename)
    } else {
      var a = document.createElement('a')
      a.download = filename
      a.href =
        'data:' +
        contentType +
        ',' +
        encodeURIComponent(JSON.stringify(objectData))
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

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
      <Grid.Row>
        <Grid.Column>
          <DownloadButton onClick={handleDownload} />
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormPreview
