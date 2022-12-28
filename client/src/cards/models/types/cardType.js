import { array, number, shape, string } from 'prop-types';
import addressType from './addressType';
import imageType from './imageType';

const cardType = shape({
	_id: string,
	title: string.isRequired,
	subtitle: string.isRequired,
	description: string.isRequired,
	address: addressType.isRequired,
	image: imageType.isRequired,
	bizNumber: number.isRequired,
	phone: string.isRequired,
	like: array.isRequired,
	web: string.isRequired,
	email: string.isRequired,
	user_id: string.isRequired,
	creatadAt: string.isRequired,
});

export default cardType;
