import React, { useState, useContext, useCallback } from 'react';
import { node } from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarContex = React.createContext(null);

export const SnackbarProvider = ({ children }) => {
	const [isSnackOpen, setSnackOpen] = useState(false);
	const [snackColor, setSnackColor] = useState('success');
	const [snackVariant, setsnackVariant] = useState('filled');
	const [snackMassage, setsnackMassage] = useState('in snackbar');

	const setSnack = useCallback((color, message, variant = 'filled') => {
		setSnackOpen(true);
		setSnackColor(color);
		setsnackVariant(variant);
		setsnackMassage(message);
	}, []);

	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isSnackOpen}
				onClose={() => setSnackOpen((prev) => !prev)}
				autoHideDuration={5000}
			>
				<Alert security={snackColor} varient={snackVariant}>
					{snackMassage}
				</Alert>
			</Snackbar>

			<SnackbarContex.Provider value={setSnack}>
				{children}
			</SnackbarContex.Provider>
		</>
	);
};

export const useSnackbar = () => {
	const context = useContext(SnackbarContex);
	if (!context)
		throw new Error('useSnackbar must be used within a NameProvider');
	return context;
};

SnackbarProvider.propTypes = {
	children: node.isRequired,
};
