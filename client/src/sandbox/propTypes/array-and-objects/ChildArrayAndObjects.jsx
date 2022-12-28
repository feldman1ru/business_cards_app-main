import React from 'react';
import { objectOf, arrayOf, string, number, bool } from 'prop-types';

const ChildArrayAndObjects = (props) => {
	return <div>ChildArrayAndObjects</div>;
};

ChildArrayAndObjects.propTypes = {
	object: objectOf(string).isRequired,
	array: arrayOf(number).isRequired,
	arrayOfObject: arrayOf(arrayOf(bool)).isRequired,
};

export default ChildArrayAndObjects;
