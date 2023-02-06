import React from 'react';
import { useName } from '../../NameProvide';

const C = () => {
	const { name, setName } = useName();
	return (
		<>
			<div>in c component: {name}</div>
			<input type="text" onChange={(e) => setName(e.target.value)} />
		</>
	);
};

export default C;
