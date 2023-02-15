import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { useUser } from '../../users/providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import { useEffect } from 'react';
import mapCardToModel from '../helpers/normalization/mapToModel';
import normalizeCard from './../helpers/normalization/normalizeCard';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../joi-schema/cardSchema';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CardDetailsPage = () => {
	const { cardId } = useParams();
	const {
		handleUpdateCard,
		handleGetCard,
		value: { card },
	} = useCards();
	const { user } = useUser();
	const { value, ...rest } = useForm(initialCardForm, cardSchema, () =>
		handleUpdateCard(card._id, {
			...normalizeCard({ ...value.data }),
			bizNumber: card.bizNumber,
			user_id: card.user_id,
		})
	);

	useEffect(() => {
		handleGetCard(cardId).then((data) => {
			if (user._id !== data.user_id) return;
			const modeledCard = mapCardToModel(data);
			rest.setData(modeledCard);
		});
	}, []);

	if (card)
		return (
			<TableContainer>
				<Table
					sx={{
						paddingTop: 3,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>{card.title}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Subtitle</TableCell>
							<TableCell>{card.subtitle}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Description</TableCell>
							<TableCell>{card.description}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Phone</TableCell>
							<TableCell>{card.phone}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Email</TableCell>
							<TableCell>{card.email}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Created</TableCell>
							<TableCell>{card.createdAt}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Web URL</TableCell>
							<TableCell>{card.web}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Image URL</TableCell>
							<TableCell>{card.image.url}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Image Alt</TableCell>
							<TableCell>{card.image.alt}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Biz number</TableCell>
							<TableCell>{card.bizNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>State</TableCell>
							<TableCell>{card.address.state}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Country</TableCell>
							<TableCell>{card.address.country}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>City</TableCell>
							<TableCell>{card.address.city}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Street</TableCell>
							<TableCell>{card.address.street}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>House Number</TableCell>
							<TableCell>{card.address.houseNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Zip Code</TableCell>
							<TableCell>{card.address.zip}</TableCell>
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		);
};

export default CardDetailsPage;
