import { debouncedWatch } from '@vueuse/core'
import { passwordStrength } from 'check-password-strength'
import { generate } from 'generate-password-browser'
import { reactive, ref, toRefs } from 'vue'

export enum StrengthLevel {
	TooWeak = 'Too Weak',
	Weak = 'Weak',
	Medium = 'Medium',
	Strong = 'Strong',
}

export interface PasswordOptions {
	length?: number
	uppercase?: boolean
	lowercase?: boolean
	numbers?: boolean
	symbols?: boolean
}

const password = ref<string>('')
const strength = ref<StrengthLevel>()
const options = reactive<PasswordOptions>({
	length: 10,
	uppercase: true,
	lowercase: true,
	numbers: true,
	symbols: false,
})

password.value = generate(options)

export const usePasswordGenerator = () => {
	debouncedWatch(
		options,
		(newOptions) => {
			password.value = generate(newOptions)
			const result = passwordStrength(password.value)

			if (result.value === 'Too Weak') {
				strength.value = StrengthLevel.TooWeak
			} else if (result.value === 'Weak') {
				strength.value = StrengthLevel.Weak
			} else if (result.value === 'Medium') {
				strength.value = StrengthLevel.Medium
			} else if (result.value === 'Strong') {
				strength.value = StrengthLevel.Strong
			} else {
				throw new Error(`Unknown strength level: ${result.value}`)
			}
		},
		{
			debounce: 1000,
		},
	)

	return {
		password,
		strength,
		...toRefs(options),
	}
}
