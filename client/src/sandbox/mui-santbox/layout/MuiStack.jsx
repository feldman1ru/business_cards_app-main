import { Divider, Paper } from '@mui/material';
// import { Stack } from '@mui/material/Stack';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Box } from '@mui/material';

// ******* basic Stack ******

// const MuiStack = () => {
// 	return (
// 		<Stack m={2} width={250} spacing={2} direction="row">
// 			<Paper sx={{ p: 2 }}>One</Paper>
// 			<Paper sx={{ p: 2 }}>Two</Paper>
// 			<Paper sx={{ p: 2 }}>Three</Paper>
// 		</Stack>
// 	);
// };

// ******* basic Divider ******

const MuiStack = () => {
	return (
		<Stack
			m={2}
			width={250}
			spacing={2}
			direction="row"
			divider={<Divider orientation="vertical" flexItem />}
		>
			<Box sx={{ p: 2 }}>One</Box>
			<Box sx={{ p: 2 }}>Two</Box>
			<Box sx={{ p: 2 }}>Three</Box>
		</Stack>
	);
};

export default MuiStack;
