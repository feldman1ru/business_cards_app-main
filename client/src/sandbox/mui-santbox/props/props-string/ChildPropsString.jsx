import React from "react";
import { Box, Typography } from "@mui/material";


const ChildPropsString = (props) => {
    const {string} = props
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: 100,
        height: 100,
        "&hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography>Child Component</Typography>
      <Typography>{string}</Typography>
    </Box>
  );
};

export default ChildPropsString;
