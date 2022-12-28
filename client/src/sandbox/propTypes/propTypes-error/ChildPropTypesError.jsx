import React from 'react';
import PropTypes from 'prop-types';

const ChildPropTypesError = ({ text }) => {
	return <div>{text}</div>;
};

ChildPropTypesError.propTypes = {};

export default ChildPropTypesError;
