import {
	type Options,
	type Result,
	passwordStrength as strength,
} from 'check-password-strength'

const strengthOptions: Options<any> = [
	{
		id: 0,
		value: 'Unacceptable!',
		minDiversity: 0,
		minLength: 0,
	},
	{
		id: 1,
		value: 'Too Weak!',
		minDiversity: 1,
		minLength: 5,
	},
	{
		id: 2,
		value: 'Weak',
		minDiversity: 2,
		minLength: 5,
	},
	{
		id: 3,
		value: 'Medium',
		minDiversity: 3,
		minLength: 8,
	},
	{
		id: 4,
		value: 'Strong',
		minDiversity: 4,
		minLength: 10,
	},
]

export const passwordStrength = (password: string): Result<string> => {
	return strength(password, strengthOptions)
}
