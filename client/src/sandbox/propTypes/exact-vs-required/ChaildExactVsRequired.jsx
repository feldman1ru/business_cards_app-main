import React from 'react';
import { exact, number, string } from 'prop-types';

const ChaildExactVsRequired = (obj) => {
	return <div>ChaildExactVsRequired</div>;
};

ChaildExactVsRequired.propTypes = {
	obj: exact({
		ker: string,
		secondKey: number,
	}),
};

export default ChaildExactVsRequired;
