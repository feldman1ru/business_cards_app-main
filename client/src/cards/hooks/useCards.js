import { useState, useCallback, useMemo } from 'react';
import {
	getCards,
	getMyCards,
	deleteCard,
	editCard,
	createCard,
	changeLikeStatus,
	getCard,
} from '../services/cardApiService';
import useAxios from '../../hooks/useAxios';
import { useSnackbar } from '../../providers/SnackBarProvider';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';
import normalizeCard from '../helpers/normalization/normalizeCard';
import { useUser } from '../../users/providers/UserProvider';

const useCards = () => {
	const [cards, setCards] = useState(null);
	const [card, setCard] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { user } = useUser();
	const navigate = useNavigate();
	const snack = useSnackbar();
	useAxios();

	const requestStatus = (loading, errorMassage, cards, card = null) => {
		setLoading(loading);
		setError(errorMassage);
		setCards(cards);
		setCard(card);
	};

	const handleGetCards = useCallback(async () => {
		try {
			setLoading(true);
			const cards = await getCards();
			requestStatus(false, null, cards);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleGetCard = useCallback(async (cardId) => {
		try {
			setLoading(true);
			const card = await getCard(cardId);
			requestStatus(false, null, null, card);
			return card;
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleGetMyCards = useCallback(async () => {
		try {
			setLoading(true);
			const cards = await getMyCards();
			requestStatus(false, null, cards);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleGetFavCards = useCallback(async () => {
		try {
			setLoading(true);
			const cards = await getCards();
			const favCards = cards.filter(
				(card) => !!card.likes.find((id) => id === user._id)
			);
			requestStatus(false, null, favCards);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, [user]);

	const handleUpdateCard = useCallback(
		async (cardId, cardFromClient) => {
			try {
				setLoading(true);
				const card = await editCard(cardId, cardFromClient);
				requestStatus(false, null, null, card);
				snack('success', 'The business card has been successfully updated');
				navigate(ROUTES.MY_CARDS);
			} catch (error) {
				requestStatus(false, error, null);
			}
		},
		[snack]
	);

	const handleDeleteCard = useCallback(async (cardId) => {
		try {
			setLoading(true);
			await deleteCard(cardId);
			snack('success', 'The business card has been successfully deleted');
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleCreateCard = useCallback(async (cardFromClient) => {
		try {
			setLoading(true);
			const normalizedCard = normalizeCard(cardFromClient);
			const card = await createCard(normalizedCard);
			requestStatus(false, null, null, card);
			snack('success', 'A new business card has been created');
			navigate(ROUTES.MY_CARDS);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const handleLikeCard = useCallback(async (cardId) => {
		try {
			const card = await changeLikeStatus(cardId);
			requestStatus(false, null, cards, card);
		} catch (error) {
			requestStatus(false, error, null);
		}
	}, []);

	const value = useMemo(() => {
		return { isLoading, cards, card, error };
	}, [isLoading, cards, card, error]);

	return {
		value,
		handleGetCards,
		handleGetMyCards,
		handleDeleteCard,
		handleUpdateCard,
		handleCreateCard,
		handleGetCard,
		handleLikeCard,
		handleGetFavCards,
	};
};
export default useCards;
