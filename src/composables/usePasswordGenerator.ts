import { passwordStrength } from 'check-password-strength'
import { generate } from 'generate-password-browser'
import { computed, reactive, ref, toRefs, watch } from 'vue'

export enum StrengthLevel {
	TooWeak = 1,
	Weak = 2,
	Medium = 3,
	Strong = 4,
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

const invalidOptions = computed<boolean>(() => {
	const { uppercase, lowercase, numbers, symbols } = options

	return [uppercase, lowercase, numbers, symbols].every((value) => !value)
})

watch(invalidOptions, (newValue, oldValue) => {
	if (!newValue && oldValue) {
		password.value = ''
		strength.value = undefined
	}
})

export const usePasswordGenerator = () => {
	function generatePassword(passwordOptions: PasswordOptions = { ...options }) {
		password.value = generate({
			...passwordOptions,
			strict: true,
		})

		const result = passwordStrength(password.value)

		switch (result.value) {
			case 'Too weak':
				strength.value = StrengthLevel.TooWeak
				break
			case 'Weak':
				strength.value = StrengthLevel.Weak
				break
			case 'Medium':
				strength.value = StrengthLevel.Medium
				break
			case 'Strong':
				strength.value = StrengthLevel.Strong
				break
			default:
				strength.value = undefined
		}
	}

	return {
		generatePassword,
		invalidOptions,
		password,
		strength,
		...toRefs(options),
	}
}
