/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			'theme-orange-500': '#FF5C00',
			'theme-organe-400': '#FF7A30',
			'theme-orange-300': '#FFA776',
			'theme-pink-500': '#FF007A',
			'theme-pink-400': '#FF3F9B',
			'theme-pink-300': '#FF76B8',
			'theme-pink-200': '#EFEFEF',
			'theme-gray-500': '#313131',
			'theme-gray-400': '#4D4D4D',
			'theme-gray-300': '#7A7A7A',
			'theme-gray-200': '#EFEFEF'
		},
		fontFamily:{
			'sans': ['Roboto\\ Flex', 'Helvetica'],
			'mono': ['Fira\\ Mono']
		}
	},
	plugins: [require('@tailwindcss/typography')],
}
