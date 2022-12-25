import React from "react";
import { Box, Typography } from "@mui/material";


const ChaildPropsTwoKeys = ({first,last}) => {

    
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
      <Typography>{first + " " + last}</Typography>
    </Box>
  );
};

export default ChaildPropsTwoKeys;