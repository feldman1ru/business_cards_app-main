import React from 'react';
import { CardActionArea } from '@mui/material';
import CardHead from './CardHead';
import CardBody from './CardBody';
import CardActionBar from './CardActionBar';
import MuiCard from '@mui/material/Card';
import cardType from '../../models/types/cardType';
import { func } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';

const Card = ({ card, onDelete, onLike }) => {
	const navigate = useNavigate();
	return (
		<MuiCard sx={{ minWidth: 280 }}>
			<CardActionArea
				onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
			>
				<CardHead image={card.image} />
				<CardBody card={card} />
			</CardActionArea>
			<CardActionBar
				cardId={card._id}
				onDelete={onDelete}
				cardUserId={card.user_id}
				cardLikes={card.likes}
				onLike={onLike}
			/>
		</MuiCard>
	);
};

Card.propTypes = {
	card: cardType.isRequired,
	onDelete: func.isRequired,
	// onLike: func.isRequired,
};

export default Card;
