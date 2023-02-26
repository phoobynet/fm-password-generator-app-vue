import PasswordGenerator from '@/pages/password-generator/PasswordGenerator.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: PasswordGenerator,
			name: 'PasswordGenerator',
		},
	],
})
