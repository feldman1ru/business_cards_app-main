import React from 'react';
import ChaildExactVsRequired from './ChaildExactVsRequired';

const FatherExactVsRequired = () => {
	const obj = { key: 'hallo', secondKey: 5 };
	// const obj = { key: 'hallo', secondKey: 5, thirdKey: 'text' };
	return (
		<>
			<ChaildExactVsRequired obj={obj} />
		</>
	);
};

export default FatherExactVsRequired;
