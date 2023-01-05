import React from 'react';
import Card from './card/Card';
import { Grid, Typography } from '@mui/material';
import { arrayOf } from 'prop-types';
import cardType from '../models/types/cardType';

const Cards = ({ cards }) => {
	const handleCardDelete = (cardId) => {
		console.log(`You delete card no: ${cardId}`);
	};

	const handleCardLike = (cardId) => {
		console.log(`You Like card no: ${cardId}`);
	};

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
						handleCardDelete={handleCardDelete}
						handleCardLike={handleCardLike}
					/>
				</Grid>
			))}
		</Grid>
	);
};

Cards.propType = {
	cards: arrayOf(cardType).isRequired,
};

export default Cards;
