import React from 'react';
// import { Box } from '@mui/material';
import Card from './card/Card';
import { Button, Grid, Typography } from '@mui/material';

const Cards = () => {
	const handleCardDelete = (bizNumber) => {
		console.log(`you delete card no ${bizNumber}`);
	};

	const handleCardLike = (bizNumber) => {
		console.log(`you Like card no ${bizNumber}`);
	};

	const handleCardEdit = (bizNumber) => {
		console.log(`you edit card no ${bizNumber}`);
	};
	const cards = [
		{
			_id: '1',
			title: 'First',
			subtitle: 'Business Headline',
			description: 'some desc',
			phone: '0500000000',
			email: 'admin@gmail.com',
			web: 'https://www.hackampus.com',
			image: {
				url: 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg',
				alt: 'Wowww this is Apple Watch',
				_id: '639221ec70962dd4df2b709c',
			},
			address: {
				state: 'israel',
				country: 'israel',
				city: 'Tel Aviv',
				street: 'STREET',
				houseNumber: 1,
				zip: 123456,
				_id: '639221ec70962dd4df2b709d',
			},
			bizNumber: 6480161,
			createdAt: '2022-12-08T17:42:04.379Z',
			user_id: '638503e4caa1f3d9dbbcf7bc',
			likes: ['639221ec70962dd4df2b70a3'],
			__v: 0,
		},
		{
			_id: '2',
			title: 'Second',
			subtitle: 'Business Headline',
			description: 'some desc',
			phone: '0500000000',
			email: 'admin@gmail.com',
			web: 'https://www.hackampus.com',
			image: {
				url: 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg',
				alt: 'Wowww this is Apple Watch',
				_id: '639221ec70962dd4df2b709c',
			},
			address: {
				state: 'israel',
				country: 'israel',
				city: 'Tel Aviv',
				street: 'STREET',
				houseNumber: 1,
				zip: 123456,
				_id: '639221ec70962dd4df2b709d',
			},
			bizNumber: 6480162,
			createdAt: '2022-12-08T17:42:04.379Z',
			user_id: '638503e4caa1f3d9dbbcf7bc',
			likes: ['639221ec70962dd4df2b70a3'],
			__v: 0,
		},
		{
			_id: '3',
			title: 'three',
			subtitle: 'Business Headline',
			description: 'some desc',
			phone: '0500000000',
			email: 'admin@gmail.com',
			web: 'https://www.hackampus.com',
			image: {
				url: 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg',
				alt: 'Wowww this is Apple Watch',
				_id: '639221ec70962dd4df2b709c',
			},
			address: {
				state: 'israel',
				country: 'israel',
				city: 'Tel Aviv',
				street: 'STREET',
				houseNumber: 1,
				zip: 123456,
				_id: '639221ec70962dd4df2b709d',
			},
			bizNumber: 6480163,
			createdAt: '2022-12-08T17:42:04.379Z',
			user_id: '638503e4caa1f3d9dbbcf7bc',
			likes: ['639221ec70962dd4df2b70a3'],
			__v: 0,
		},
	];
	// const cards = [];

	if (!cards.length)
		return (
			<Typography>
				Oops... it seems there are no bisiness cards to display
			</Typography>
		);

	return (
		<Grid container spacing={2} pb={2}>
			{cards.map((card) => (
				<Grid item xs={12} sm={6} md={4} lg={3} key={card._id}>
					<Card
						card={card}
						handleDeleteClick={handleCardDelete}
						handleEditClick={handleCardEdit}
						handleCardLike={handleCardLike}
					/>
				</Grid>
			))}
		</Grid>
	);
};

// const OnClick = (Cards) => {
// 	const handleCardDelete = (bizNumber) =>
// 		console.log(`you delete card + ${bizNumber}`);
// 	return (
// 		<Button
// 			variant="outlined"
// 			sx={{ m: 2 }}
// 			onClick={(bizNumber) =>
// 				handleCardDelete(`you delete card + ${bizNumber}`)
// 			}
// 		>
// 			Click me
// 		</Button>
// 	);
// };
// OnClick();

export default Cards;
