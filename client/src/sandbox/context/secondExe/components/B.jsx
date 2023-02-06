import React from 'react';
import { useName } from '../../NameProvide';
import C from './C';

const B = () => {
	const { name } = useName();
	return (
		<>
			<p>in B component: {name}</p>
			<C />
		</>
	);
};

export default B;
