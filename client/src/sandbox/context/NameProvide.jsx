import React, { useState, useEffect, useContext } from 'react';
import { node } from 'prop-types';

const NameContext = React.createContext(null);

// console.log(NameContext);

export const NameProvide = ({ children }) => {
	const [name, setName] = useState();

	useEffect(() => {
		setName('david');
	}, []);

	return (
		<NameContext.Provider value={{ name, setName }}>
			{children}
		</NameContext.Provider>
	);
};

export const useName = () => {
	const context = useContext(NameContext);
	if (!context) throw new Error('useName must be used within a Name Provaider');
	return context;
};

NameProvide.propTypes = {
	children: node.isRequired,
};

export default NameProvide;
