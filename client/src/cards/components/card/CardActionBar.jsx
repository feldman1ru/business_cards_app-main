import React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CallIcon from '@mui/icons-material/Call';

const CardActionBar = ({ handleCardDelete, cardId, handleCardLike }) => {
	return (
		<CardActions
			disableSpacing
			sx={{ paddingTop: 0, justifyContent: 'space-between' }}
		>
			<Box>
				<IconButton
					aria-label="delete card"
					onClick={() => handleCardDelete(cardId)}
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					aria-label="edit card"
					onClick={() => console.log(`Move to edit ${cardId}`)}
				>
					<ModeEditIcon />
				</IconButton>
			</Box>

			<Box>
				<IconButton aria-label="call business">
					<CallIcon />
				</IconButton>
				<IconButton
					aria-label="add to favorites"
					onClick={() => handleCardLike(cardId)}
				>
					<FavoriteIcon />
				</IconButton>
			</Box>
		</CardActions>
	);
};

export default CardActionBar;
