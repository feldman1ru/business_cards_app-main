import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import CardFeedback from '../components/CardsFeedback';
import useCards from '../hooks/useCards';

const CardsPage = () => {
	const { value, handleGetCards, handleDeleteCard } = useCards();
	const { isLoading, error, filteredCards } = value;

	useEffect(() => {
		handleGetCards();
	}, []);

	const onDeleteCard = async (cardId) => {
		await handleDeleteCard(cardId);
		await handleGetCards();
	};

	return (
		<Container>
			<PageHeader
				title="Cards"
				subtitle="Here you can find businnes cards from categories"
			/>
			<CardFeedback
				isLoading={isLoading}
				error={error}
				cards={filteredCards}
				onDelete={onDeleteCard}
			/>
		</Container>
	);
};
export default CardsPage;
