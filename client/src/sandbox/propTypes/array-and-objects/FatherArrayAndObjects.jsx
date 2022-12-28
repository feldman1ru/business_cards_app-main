import React from 'react';
import ChildArrayAndObjects from './ChildArrayAndObjects';

const FatherArrayAndObjects = () => {
	const obj = { key: 'value' };
	const array = [1, 2, 3];
	const arrayOfObject = [{ key: true }];
	return (
		<ChildArrayAndObjects
			object={obj}
			array={array}
			arrayOfObject={arrayOfObject}
		/>
	);
};

export default FatherArrayAndObjects;
