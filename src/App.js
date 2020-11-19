import React from "react";
import { Grommet, Box,  } from "grommet";

import RangePredictor from "./features/RangePredictor/RangePredictor";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill align="center" justify="center" background="dark-2">
        <RangePredictor />
      </Box>
  
    </Grommet>
  );
}

export default App;
