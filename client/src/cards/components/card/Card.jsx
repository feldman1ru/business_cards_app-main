import React from 'react';
import { CardActionArea } from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import MuiCard from '@mui/material/Card';
import cardType from '../../models/types/cardType';

const Card = ({ card, handleCardDelete, handleCardLike }) => {
	return (
		<MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
			<CardActionArea>
				<CardHead image={card.image} />
				<CardBody card={card} />
			</CardActionArea>
			<CardActionBar
				cardId={card._id}
				handleCardDelete={handleCardDelete}
				handleCardLike={handleCardLike}
			/>
		</MuiCard>
	);
};

Card.propTypes = {
	card: cardType,
};

export default Card;
