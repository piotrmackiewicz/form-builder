import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const DownloadButton = ({ onClick }) => (
  <Button color="green" onClick={onClick}>
    <Icon name="download" />
    Download form structure
  </Button>
)

export default DownloadButton
