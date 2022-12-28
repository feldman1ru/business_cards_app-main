import React from 'react';
import ChildCildrenAndNod from './ChildCildrenAndNod';
import Button from '@mui/material/Button';

// const FatherCildrenAndNod = () => {
// 	return <ChildCildrenAndNod>
//         Yakin

//     </ChildCildrenAndNod>;
// };
const FatherCildrenAndNod = () => {
	return (
		<ChildCildrenAndNod>
			<Button variant="outline" color="primary">
				Click mi
			</Button>
		</ChildCildrenAndNod>
	);
};

export default FatherCildrenAndNod;
