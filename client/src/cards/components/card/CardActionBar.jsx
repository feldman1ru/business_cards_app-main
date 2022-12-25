import React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CallIcon from '@mui/icons-material/Call';

const CardActionBar = ({ myHandleDelete, myHandleEdit, myHandleLike }) => {
	return (
		<CardActions
			disableSpacing
			sx={{ paddingTop: 0, justifyContent: 'space-between' }}
		>
			<Box>
				<IconButton aria-label="add to favorites" onClick={myHandleDelete}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="add to favorites" onClick={myHandleEdit}>
					<ModeEditIcon />
				</IconButton>
			</Box>

			<Box>
				<IconButton aria-label="call business">
					<CallIcon />
				</IconButton>
				<IconButton aria-label="add to favorites" onClick={myHandleLike}>
					<FavoriteIcon />
				</IconButton>
			</Box>
		</CardActions>
	);
};

export default CardActionBar;
