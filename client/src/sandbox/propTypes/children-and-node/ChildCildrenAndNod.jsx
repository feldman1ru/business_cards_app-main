import React from 'react';
import { node, element } from 'prop-types';

const ChildCildrenAndNod = ({ children }) => {
	return <div>{children}</div>;
};

// ChildCildrenAndNod.propTypes = {
//     children: node.isRequired
// };

ChildCildrenAndNod.propTypes = {
	children: element.isRequired,
};

export default ChildCildrenAndNod;
