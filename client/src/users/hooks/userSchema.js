import Joi from 'joi';

const urlRegex =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const userSchema = {
	first: Joi.string().min(2).max(256).required(),
	middle: Joi.string().min(2).max(256),
	last: Joi.string().min(2).max(1024).required(),
	phone: Joi.string()
		.ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
		.rule({ message: 'card "phone" mast be a valid phone number' })
		.required(),
	email: Joi.string()
		.ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
		.rule({ message: 'card "mail" mast be a valid mail' })
		.required(),
	password: Joi.string()
		.ruleset.regex(
			/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
		)
		.rule({
			message:
				'The password must be at least seven characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
		})
		.required(),
	imageUrl: Joi.string()
		.ruleset.regex(urlRegex)
		.rule({ message: 'user.image "url" mast be a valid url' })
		.allow(''),
	imageAlt: Joi.string().min(2).max(256).allow(''),
	state: Joi.string().allow(''),
	country: Joi.string().min(2).max(256).required(),
	city: Joi.string().min(2).max(256).required(),
	street: Joi.string().min(2).max(256).required(),
	houseNumber: Joi.number().required(),
	zip: Joi.number(),
	isBusiness: Joi.bool(),
};

export default userSchema;
