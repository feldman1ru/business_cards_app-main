import { Box, Typography } from "@mui/material";
import React from "react";
import ChaildPropsTwoKeys from "./ChaildPropsTwoKeys";


const FatherPropsTwoKeys= () => {

  const name = { first:"hadas", last:"gringberg" }
  return (
    <>
      <Typography m={2}>Father props Tokies</Typography>
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 300,
          backgroundColor: "secondary.dark",
        }}
      >
        <ChaildPropsTwoKeys first={name.first} last={name.last} />
      </Box>
    </>
  );
};

export default FatherPropsTwoKeys;