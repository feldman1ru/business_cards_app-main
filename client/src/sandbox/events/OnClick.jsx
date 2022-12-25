import { Button } from '@mui/material';
import React from 'react';

// ************* onClick no arguments **********
// const OnClick = () => {
// 	const handelClick = () => console.log('you clicked');
// 	return (
// 		<Button variant="outlined" sx={{ m: 2 }} onClick={handelClick}>
// 			Click me!!
// 		</Button>
// 	);
// };

// ************* onClick with arguments **********
// const OnClick = () => {
// 	const handelClick = (text) => console.log(text);
// 	return (
// 		<Button variant="outlined" sx={{ m: 2 }} onClick={ ()=> handelClick('hallo')}>
// 			Click me!!
// 		</Button>
// 	);
// };

// ************* onClick with arguments **********
const OnClick = () => {
	const handelClick = (text, e) => {
		console.log(e.target);
		console.log(text);
	};
	return (
		<>
			<Button variant="outlined" sx={{ m: 2 }} onClick={handelClick}>
				Click me one!!
			</Button>
			<Button variant="outlined" sx={{ m: 2 }} onClick={(e) => handelClick(e)}>
				Click me two!!
			</Button>
			<Button
				variant="outlined"
				sx={{ m: 2 }}
				onClick={(e) => handelClick('hello', e)}
			>
				Click me three!!
			</Button>
		</>
	);
};
export default OnClick;
