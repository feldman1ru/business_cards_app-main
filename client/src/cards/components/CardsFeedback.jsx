import React from 'react';
import { bool, string, arrayOf, func } from 'prop-types';
import Cards from './Cards';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Typography } from '@mui/material';
import cardType from '../models/types/cardType';

const CardFeedback = ({ isLoading, error, cards, onDelete, onLike }) => {
	if (isLoading) return <Spinner />;
	if (error) return <Error errorMessage={error} />;

	if (cards && !cards.length)
		return (
			<Typography>
				Oops... it seems there are no bisiness cards to display
			</Typography>
		);

	if (cards && !!cards.length)
		return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
};

CardFeedback.propTypes = {
	isLoading: bool.isRequired,
	error: string,
	cards: arrayOf(cardType),
	onDelete: func.isRequired,
	onLike: func.isRequired,
};

CardFeedback.defaultProps = {
	onLike: () => {},
};

export default CardFeedback;
