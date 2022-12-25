import React from 'react';
import { CardActionArea } from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import MuiCard from '@mui/material/Card';

const Card = ({ card, handleDeleteClick, handleEditClick, handleCardLike }) => {
	return (
		<MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
			<CardActionArea>
				<CardHead image={card.image} />
				<CardBody card={card} />
			</CardActionArea>
			<CardActionBar
				myHandleDelete={() => handleDeleteClick(card.bizNumber)}
				myHandleEdit={() => handleEditClick(card.bizNumber)}
				myHandleLike={() => handleCardLike(card.bizNumber)}
			/>
		</MuiCard>
	);
};

export default Card;
