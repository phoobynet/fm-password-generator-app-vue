import { debouncedWatch } from '@vueuse/core'
import { generate } from 'generate-password-browser'
import { reactive, ref, toRefs } from 'vue'

export interface PasswordOptions {
	length?: number
	uppercase?: boolean
	lowercase?: boolean
	numbers?: boolean
	symbols?: boolean
}

const password = ref<string>('')
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
		},
		{
			debounce: 1000,
		},
	)

	return {
		password,
		...toRefs(options),
	}
}
