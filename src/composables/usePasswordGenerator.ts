import { generate } from 'generate-password-browser'
import { ref, watch } from 'vue'

const password = ref<string>('')
const length = ref<number>(10)
const uppercase = ref<boolean>(true)
const lowercase = ref<boolean>(true)
const numbers = ref<boolean>(true)
const symbols = ref<boolean>(false)

password.value = generate({
	length: length.value,
	uppercase: uppercase.value,
	lowercase: lowercase.value,
	numbers: numbers.value,
	symbols: symbols.value,
})

export const usePasswordGenerator = () => {
	watch(
		[length, uppercase, lowercase, numbers, symbols],
		([newLength, newUppercase, newLowercase, newNumbers, newSymbols]) => {
			password.value = generate({
				length: newLength,
				uppercase: newUppercase,
				lowercase: newLowercase,
				numbers: newNumbers,
				symbols: newSymbols,
			})
		},
	)

	return {
		password,
		length,
		uppercase,
		lowercase,
		numbers,
		symbols,
	}
}
