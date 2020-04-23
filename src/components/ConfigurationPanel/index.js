import React from "react";
import { Grid } from "semantic-ui-react";

const ConfigurationPanel = () => {
  return (
    <Grid.Column width={8} style={{ backgroundColor: "blue", zIndex: 1 }}>
      <p>Configuration panel</p>
    </Grid.Column>
  );
};

export default ConfigurationPanel;
