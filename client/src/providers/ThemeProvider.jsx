import React, { useContext, useState, useCallback, useMemo } from 'react';
import { node } from 'prop-types';
import {
	createTheme,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

const ThemeContex = React.createContext(null);

export const ThemeProvider = ({ children }) => {
	const [isDark, setDark] = useState();

	const toggleDarkMode = useCallback(() => setDark((prev) => !prev), [setDark]);

	const theme = createTheme({
		palette: {
			mode: isDark ? 'dark' : 'light',
		},
	});

	const value = useMemo(() => {
		return { isDark, toggleDarkMode };
	}, [isDark, toggleDarkMode]);

	return (
		<MuiThemeProvider theme={theme}>
			<ThemeContex.Provider value={value}>{children}</ThemeContex.Provider>
		</MuiThemeProvider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContex);
	if (!context)
		throw new Error('useTheme must be used within a Name Provaider');
	return context;
};

ThemeProvider.propTypes = {
	children: node.isRequired,
};
