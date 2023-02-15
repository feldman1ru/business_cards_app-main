import { useState, useCallback, useMemo, useEffect } from 'react';
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
import { useNavigate, useSearchParams } from 'react-router-dom';
import normalizeCard from '../helpers/normalization/normalizeCard';
import { useUser } from '../../users/providers/UserProvider';

const useCards = () => {
	const [cards, setCards] = useState(null);
	const [card, setCard] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { user } = useUser();
	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [filteredCards, setFilter] = useState(null);
	const [searchParams] = useSearchParams();
	const snack = useSnackbar();
	useAxios();

	useEffect(() => {
		setQuery(searchParams.get('q') ?? '');
	}, [searchParams]);

	useEffect(() => {
		if (cards) {
			setFilter(
				cards.filter(
					(card) =>
						card.title.includes(query) ||
						String(card.bizNumber).includes(query) ||
						card.phone.includes(query) ||
						card.subtitle.includes(query) ||
						card.description.includes(query) ||
						card.email.includes(query) ||
						card.address.country.includes(query) ||
						card.address.city.includes(query) ||
						card.address.street.includes(query) ||
						String(card.address.houseNumber).includes(query)
				)
			);
		}
	}, [cards, query]);

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
		return { isLoading, cards, card, error, filteredCards };
	}, [isLoading, cards, card, error, filteredCards]);

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
