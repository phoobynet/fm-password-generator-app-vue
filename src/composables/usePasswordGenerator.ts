import { passwordStrength } from '@/lib/passwordStrength'
import { type PasswordOptions } from '@/lib/types'
import { type Result as StrengthResult } from 'check-password-strength'
import { generate } from 'generate-password-browser'
import { computed, reactive, ref, toRefs, watch } from 'vue'

const password = ref<string>('')
const strengthResult = ref<StrengthResult<string>>()
const options = reactive<PasswordOptions>({
	length: 10,
	uppercase: true,
	lowercase: true,
	numbers: true,
	symbols: false,
})

const invalidOptions = computed<boolean>(() =>
	[
		options.uppercase,
		options.lowercase,
		options.numbers,
		options.symbols,
	].every((value) => !value),
)

watch(invalidOptions, (newValue) => {
	if (newValue) {
		password.value = ''
		strengthResult.value = undefined
	}
})

export const usePasswordGenerator = () => {
	function generatePassword(passwordOptions: PasswordOptions = { ...options }) {
		password.value = generate({
			...passwordOptions,
			excludeSimilarCharacters: true,
			strict: false,
		})

		strengthResult.value = passwordStrength(password.value)
	}

	return {
		generatePassword,
		invalidOptions,
		password,
		strengthResult,
		...toRefs(options),
	}
}
