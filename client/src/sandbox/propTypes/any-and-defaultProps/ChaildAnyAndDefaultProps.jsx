import React from 'react';
import { any } from 'prop-types';

const ChaildAnyAndDefaultProps = ({ name }) => {
	return <div>ChaildAnyAndDefaultProps</div>;
};

ChaildAnyAndDefaultProps.propTypes = {
	name: any.isRequired,
};

ChaildAnyAndDefaultProps.default.Props = {
	name: 'david',
};

export default ChaildAnyAndDefaultProps;
