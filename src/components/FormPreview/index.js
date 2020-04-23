import React from "react";
import { Button } from "semantic-ui-react";

const FormPreview = ({ onShowConfigPanelClick }) => {
  return (
    <React.Fragment>
      <p>Form preview</p>
      <Button onClick={onShowConfigPanelClick}>Show panel</Button>
    </React.Fragment>
  );
};

export default FormPreview;
