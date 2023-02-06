import React from 'react';
import NameProvide from '../../NameProvide';
import B from './B';

const A = () => {
	return (
		<NameProvide>
			<p>in A component</p>
			<B />
		</NameProvide>
	);
};

export default A;
